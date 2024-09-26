import { useState } from "react";
const UserComponenet = (props) => {
    const { name } = props;
    const [count] = useState(0);
    return (
        <div className="userCard">
            <h1>Count = {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Kolkata</h3>
            <h4>Email: ankur.guha16@gmail.com</h4>
        </div>
    )
}

export default UserComponenet;