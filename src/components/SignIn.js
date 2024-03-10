import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        phoneNumber: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword, phoneNumber } = user
        if (name && email && password && password === reEnterPassword) {
            axios.post("http://localhost:3001/signin", user)
                .then((res) => {
                    alert(res.data.message)
                    navigate("/Register")
                })
        } else {
            alert("Invalid input")
        }
    }

    return (
        <center>
            <div className="register">
                {console.log("User", user)}
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Name"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="email"
                    value={user.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                ></input>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Your Password"
                    onChange={handleChange}
                ></input>
                <input
                    type="password"
                    name="reEnterPassword"
                    value={user.reEnterPassword}
                    placeholder="Re-enter Password"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    name="phoneNumber"
                    value={user.phoneNumber}
                    placeholder="Phone Number"
                    onChange={handleChange}
                ></input>
                
                <div className="button" onClick={() => navigate("/Register")}>
                    Register
                </div>
            </div>
        </center>
    )
}

export default SignIn;
