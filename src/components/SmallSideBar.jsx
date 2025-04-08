import Wrapper from '../assets/wrappers/SmallSidebar';
import links from '../utils/links';
import { FaTimes } from 'react-icons/fa';
import { Logo } from '../components';

import { useDashboardContext } from '../pages/DashboardLayout';
import { NavLink } from 'react-router-dom';

const SmallSideBar = () => {
  const { toggleSideBar, showSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSideBar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSideBar}
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
