import React from "react"; 
import Enfant from "./Enfant";
function ParentComponent() {
    const data1 = "Données du parent";
    const data2 = "Données du parent 2";
    const data3 = "123";


    return  (
        <div>
            <h1>ParentComponent</h1>
            <Enfant props1={data1} props2={data2} props3={data3} />
        </div>
    )
}

export default ParentComponent;