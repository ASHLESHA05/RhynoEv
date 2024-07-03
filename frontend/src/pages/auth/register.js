import React, { useState } from 'react';
import './style/register.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [question, setquestion] = useState("")
    const navigate=useNavigate()

    //FORM FUNCTION
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { 
                name, 
                email, 
                password, 
                phone, 
                address,
             }); 
                if(res.data.success){
                    toast.success(res.data.message)
                    navigate('/login')
                }
                else{
                toast.error(res.data.message)
                }
        } catch (error) {
            console.log(error)
            toast.error('Something Went Wrong')
        }
    }


    return (
        <div className="containerreg" title="Register - Trip Curator" >
            <div className="register">
                <p></p>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputNumber" className="form-label">
                            Phone Num
                        </label>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="exampleInputNumber"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputAddress" className="form-label">
                            Address
                        </label>
                        <textarea
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputAddress"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>


                    <button type="submit" className="btn btn-primary" style={{}}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
