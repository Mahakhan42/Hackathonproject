import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Config/Firebase';
import { Input_Field } from '../Components/Input_Field';
import { Custom_Button } from '../Components/Custom_Button';

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState('');

    const change_handle = (e) => {
        const { value, id } = e.target;
        setData({ ...data, [id]: value });
    };

    const submit_handle = (e) => {
        e.preventDefault();

        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/Login");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <center>
            <br /><br /><br />
            <div className="container" style={{maxWidth:'500px'}}>
            <form onSubmit={submit_handle} className='bg-white rounded-md shadow-md max-w-md py-6 px-6 grid grid-cols-1 gap-5' style={{ border: '2px solid red' }}>
                <div className='text-red-500 text-center text-3xl font-bold'>
                    <br /> <h2><b>Sign Up</b></h2>
                </div>
                <div className="flex justify-center container">
                    <div className="w-full max-w-md">
                        <Input_Field id='first_name' type='text' required={true} onChange={change_handle} placeholder='First Name' /> <br /><br />
                        <Input_Field id='last_name' type='text' required={true} onChange={change_handle} placeholder='Last Name' /><br /><br />
                        <Input_Field id='username' type='text' required={true} onChange={change_handle} placeholder='Username' /><br /><br />
                        <Input_Field id='phone_number' type='number' required={true} onChange={change_handle} placeholder='Phone Number' /><br /><br />
                        <Input_Field id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' /><br /><br />
                        <Input_Field id='password' required={true} onChange={change_handle} type='password' placeholder='Password' /><br /><br />
                        <Custom_Button type='submit' className='bg-red text-white hover:bg-red-600' style={{ background: 'red', padding: '10px 20px', border: 'none', width: '50%' }}>
                            Signup
                        </Custom_Button>
                        {error && <div className="text-red-500">{error}</div>}
                        <div><br />
                            <span>Already have an account? </span>
                            <Link to='/Login' className='underline text-primary_color'>
                                Login
                            </Link>
                        </div><br />
                    </div>
                </div>
            </form>
            </div>
            <br /><br /><br />
        </center>
    );
};

export default Signup;
