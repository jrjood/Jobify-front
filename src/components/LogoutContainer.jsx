import { useState } from 'react';

import { useDashboardContext } from '../pages/DashboardLayout';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  function handleShowLogout() {
    setShowLogout((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={handleShowLogout}
      >
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
