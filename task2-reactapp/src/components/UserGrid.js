import React from 'react'
import UserItem from './UserItem'

const UserGrid = ({userData}) => {
    return (
        <div className="d-flex grid center">
            {userData.map((user) => <UserItem key={user.id} user={user}/>)}
            
        </div>
    )
}

export default UserGrid
