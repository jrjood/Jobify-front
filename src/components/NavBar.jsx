import { FaAlignLeft } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/Navbar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { Logo } from '../components';

const NavBar = () => {
  const { toggleSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};
export default NavBar;
