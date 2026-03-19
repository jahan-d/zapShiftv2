import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();
    const { signinUser } = useAuth();
    
    const handleSignin = (data) => {
        signinUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12'>
            {/* Left Side - Form */}
            <div className='flex justify-center lg:justify-end'>
                <div className='w-full max-w-md'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h1>
                    <p className='text-gray-600 mb-8'>Enter your credentials to access your account</p>
                    
                    <form onSubmit={handleSubmit(handleSignin)} className='space-y-5'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                            <input 
                                {...register("email", { required: "Email is required" })} 
                                type='email' 
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition'
                                placeholder='you@example.com' 
                            />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                            <input 
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} 
                                type='password' 
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition'
                                placeholder='••••••••' 
                            />
                            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                        </div>

                        <button type='submit' className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 mt-8'>
                            Sign In
                        </button>
                    </form>
                    
                    <p className='text-center text-gray-600 text-sm mt-6'>
                        Don't have an account? <Link to='/auth/register' className='text-indigo-600 hover:text-indigo-700 font-semibold'>Sign up</Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Will show authImage from AuthLayout */}
            <div className='hidden lg:flex justify-center lg:justify-start'>
                <div className='w-full max-w-md h-96 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg'></div>
            </div>
        </div>
    );
};

export default Login;