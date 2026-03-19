import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { auth } from '../../../firebase/firebase.init';

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();
    const { signinUser } = useAuth();
    const handleSignin = (data) => {
        signinUser(auth, data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='card-body'>
            <form onSubmit={handleSubmit(handleSignin)} className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <label className='label'>Email</label>
                <input {...register("email", { required: true })} type='email' className='input' placeholder='Email' />
                {errors.email?.type === 'required' && <p>Email is Required</p>}
                <label className='label'>Password</label>
                <input {...register("password", { required: true, minLength: 6, })} type='password' className='input' placeholder='Password' />
                {errors.password?.type === 'required' && <p>Password is Required</p>}
                {errors.password?.type === 'minLength' && <p>Password must be at least 6 character long</p>}
                <button className='btn btn-neutral mt-4'>login</button>
            </form>
        </div>
    );
};

export default Login;