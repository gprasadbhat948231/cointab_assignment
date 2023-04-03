import React, { useState } from 'react'

const Registration = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = () => {
        fetch('https://stormy-shift-yak.cyclic.app/user/register', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'aplication/json'
            }
        }).then(() => alert("Registration Successful")).catch(err => alert("Something went wrong"));
    }
    return (
        <div>
            <h1>Please Register Here</h1>
            <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", gap: "30px", marginTop: "20px" }}>
            <input style={{ padding: "10px",borderRadius:"10px", }} name="email" type="email" value={user.email} onChange={(e) => handleChange(e)} placeholder='enter email id' />
            <input style={{ padding: "10px",borderRadius:"10px", }} name="password" type="password" value={user.password} onChange={(e) => handleChange(e)} placeholder='enter password' />
            <button style={{ padding: "10px",borderRadius:"10px", }} onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Registration