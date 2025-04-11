import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/BigSidebar';
import { Logo, NavLinks } from '../components';

const BigSideBar = () => {
  const { showSideBar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSideBar;
