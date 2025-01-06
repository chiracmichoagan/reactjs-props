import React from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
    const user = {
        name: "John Doe",
        age: 30,
        email : "dona@example.com"
    };

    return (

        <>
        <div>
            <h1>User Info</h1>
            <ChildComponent user={user} />
        </div>
        </>
    );
} 

export default ParentComponent;