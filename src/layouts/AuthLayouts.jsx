import Logo from '../components/logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayouts = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            {/* Left Section - Form */}
            <div className='flex-1 flex flex-col justify-center items-center p-8 lg:p-12'>
                <div className='w-full max-w-md'>
                    <Logo />
                    <div className='mt-12'>
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className='hidden lg:flex flex-1 bg-gradient-to-br from-blue-500 to-purple-600 justify-center items-center p-8'>
                <img src={authImage} alt="Auth Banner" className='w-full h-full object-cover rounded-lg shadow-lg' />
            </div>
        </div>
    );
};

export default AuthLayouts;