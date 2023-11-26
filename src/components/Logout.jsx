import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboard } from '../pages/DashboardLayout';

const Logout = () => {
    const { user, logoutUser } = useDashboard()
    const [showLogout, setShowLogout] = useState(false)
    return (
        <Wrapper>
            <button type='button' className='btn logout-btn' onClick={() => setShowLogout(!showLogout)}>
                <FaUserCircle />
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
                <button type='button' className='dropdown-btn' onClick={logoutUser}>Logout

                </button>

            </div>
        </Wrapper>
    )
}
export default Logout