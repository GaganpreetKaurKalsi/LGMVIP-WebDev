
import React, { useState } from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Loader } from 'rsuite';
import Navbar from './components/Navbar';
import { apiGet } from './misc/config';
import UserGrid from './components/UserGrid';

function App() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState({'currPage':1, 'max_Page' : 1})
  const userDataPresent = userData.length !== 0
  

  const getUserData = async (currPage) => {
    setIsLoading(true);
    const users = await apiGet(currPage)
    setIsLoading(false)
    setPage({'currPage' : currPage, 'max_Page' : users.total_pages});
    setUserData([...(userData),...(users.data)])
  };

  return (
    <div>
      <Navbar getUserData={getUserData} />
      {isLoading && <Loader content="Loading data" size="md" speed="slow" center />}
      {!isLoading && userData && <UserGrid userData={userData} />}
      {page.currPage < page.max_Page && userDataPresent && <button type="button" onClick={() => getUserData(page.currPage + 1) }>More</button>}
    </div>
  );
}

export default App;
