import Logo from '../components/logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'

const AuthLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo />
            <div>
                <Outlet />
            </div>
            <div>
                <img src={authImage} alt="" />
            </div>
        </div>
    );
};

export default AuthLayouts;