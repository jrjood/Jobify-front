import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper type='button' onClick={toggleDarkTheme}>
      <BsFillMoonFill className={`toggle-icon ${isDarkTheme ? 'hide' : ''}`} />
      <BsFillSunFill className={`toggle-icon ${isDarkTheme ? '' : 'hide'}`} />
    </Wrapper>
  );
};
export default ThemeToggle;
