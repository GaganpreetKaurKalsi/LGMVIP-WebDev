import React from 'react'

const UserItem = ({user}) => {
    return (
      <div className="user-card center">
        <div>
          <img src={user.avatar} alt="Avatar Img" />
        </div>
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <p>{user.email}</p>
      </div>
    );
}

export default UserItem