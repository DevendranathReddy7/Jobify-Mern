import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from 'react-icons/fa'
import Logo from "./Logo"
import { useDashboard } from "../pages/DashboardLayout"
import Logout from "./Logout"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
    const { toggleSideBar } = useDashboard()
    return (
        <Wrapper>
            <div className="nav-center">
                <button type="button" className="toggle-btn">
                    <FaAlignLeft onClick={toggleSideBar} />
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">dashboard</h4>
                </div>
                <div className="btn-container">
                    <ThemeToggle />
                    <Logout />
                </div>
            </div>
        </Wrapper>
    )
}
export default Navbar