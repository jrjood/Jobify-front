import { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { SmallSideBar, BigSideBar, NavBar } from '../components';

const DashBoardContext = createContext();

const DashboardLayout = () => {
  const user = { name: 'jordi' };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const toggleDarkTheme = () => {
    console.log('Dark theme');
  };

  const logoutUser = async () => {
    console.log('user');
  };

  return (
    <DashBoardContext.Provider
      value={{
        user,
        showSideBar,
        isDarkTheme,
        toggleSideBar,
        toggleDarkTheme,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashBoardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;
