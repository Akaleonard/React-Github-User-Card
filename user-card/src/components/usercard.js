import React from 'react';
import "./userlist-usercard.css";

const UserCard = (props) => {
    return (
        <div className="container">
            <div className="box-container">
                <h1>{props.user.name}</h1>
                <img height="auto" width="200px" src={props.user.avatar_url}/>
                <p>UserName: {props.user.login}</p>
                <p>Location: {props.user.location}</p>
                <p>Followers: {props.user.followers}</p>
            </div>
        </div>
    )
}
export default UserCard;