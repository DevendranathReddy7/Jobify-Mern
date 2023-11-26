import Wrapper from "../assets/wrappers/ThemeToggle"
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { useDashboard } from "../pages/DashboardLayout"

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useDashboard();
    return (
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme ? (
                <BsSunFill className='toggle-icon' />
            ) : (
                <BsFillMoonFill className='toggle-icon' />

            )}
        </Wrapper>
    )
}
export default ThemeToggle

