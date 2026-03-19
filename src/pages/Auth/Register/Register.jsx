import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4'>
            <div className='w-full max-w-md mx-auto'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h2>
                <p className='text-gray-600 mb-8'>Sign up to get started</p>
                
                <form onSubmit={handleSubmit(handleRegistration)} className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                        <input 
                            {...register("email", { required: true })} 
                            type='email' 
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition'
                            placeholder='you@example.com' 
                        />
                        {errors.email?.type === 'required' && <p className='text-red-500 text-sm mt-1'>Email is required</p>}
                    </div>

                    <div>
                        <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
                        <input 
                            {...register("password", { required: true, minLength: 6 })} 
                            type='password' 
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition'
                            placeholder='At least 6 characters' 
                        />
                        {errors.password?.type === 'required' && <p className='text-red-500 text-sm mt-1'>Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500 text-sm mt-1'>Password must be at least 6 characters</p>}
                    </div>

                    <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200'>Register</button>
                </form>
                <p className='text-center text-gray-600 text-sm mt-6'>
                        Already have an account? <Link to='/auth/login' className='text-indigo-600 hover:text-indigo-700 font-semibold'>Sign in</Link>
                    </p>
            </div>
        </div>
    );
};

export default Register;
