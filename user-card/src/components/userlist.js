import React from 'react';

const UserList = (props) => {
    return (
        <div className="box-container">
            <h1>Followers</h1>
            {props.followers.map(follower => {
                return (
                    <div key={follower.id}>
                        <h2>{follower.login}</h2>
                    </div>
                )
            })}
        </div>
    )
}
export default UserList;