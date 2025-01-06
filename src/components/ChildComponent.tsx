import React from "react"

function ChildComponent({ user }) {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default ChildComponent;