import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { registerUser } = useAuth();
    const handleRegistration = (data) => {

        registerUser(data.email, data.password)
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
            <form onSubmit={handleSubmit(handleRegistration)} className="w-full max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
                <label className='label'>Email</label>
                <input {...register("email", { required: true })} type='email' className='input' placeholder='Email' />
                {errors.email?.type === 'required' && <p>Email is Required</p>}
                <label className='label'>Password</label>
                <input {...register("password", { required: true, minLength: 6, })} type='password' className='input' placeholder='Password' />
                {errors.password?.type === 'required' && <p>Password is Required</p>}
                {errors.password?.type === 'minLength' && <p>Password must be at least 6 character long</p>}
                <button className='btn btn-neutral mt-4'>Register</button>
            </form>
        </div>
    );
};

export default Register;