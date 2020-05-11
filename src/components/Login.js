import React, {useState} from "react";

const Login = () => {
    const [handle, setHandle] = useState("")
    const loginUser = (e) => {
        e.preventDefault();
        console.log(handle);    
    }
    return (
        <div className="login-form">
            <form onSubmit={loginUser}>
                <input 
                    type="text" 
                    name="handle" 
                    placeholder="Enter Username" 
                    value={handle} 
                    onChange={(event) => {
                        setHandle(event.target.value)
                    }} 
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login