import React, { useState } from 'react'

const Login = () => {
    const [login, setLog] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLog({
            ...login, [name]: value
        })
    }
    const handleLogin = () => {
        try {
            fetch("https://stormy-shift-yak.cyclic.app/user/login", {
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(res => {
                alert(res.message)
                if(res.message=="Login Successful"){
                    localStorage.setItem("loginStatus",login.email);
                }
            }).catch(err => {
                const errorMess=`Error:${err.message}`
                alert(errorMess)
            })
        }
        catch (err) {
            console.log("error while login")
        }

    }
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", gap: "30px", marginTop: "20px" }}>
            <h1>Please Login Here</h1>
            <input style={{ padding: "10px",borderRadius:"10px", }} name="email" type="email" value={login.email} onChange={(e) => handleChange(e)} placeholder='enter email id' />
            <input style={{ padding: "10px",borderRadius:"10px", }} name="password" type="password" value={login.password} onChange={(e) => handleChange(e)} placeholder='enter password' />
            <button style={{ padding: "10px",borderRadius:"10px", }} onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login