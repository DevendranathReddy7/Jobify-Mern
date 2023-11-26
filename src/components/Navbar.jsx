import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft } from 'react-icons/fa'
import Logo from "./Logo"
import { UseDashboard } from "../pages/DashboardLayout"
const Navbar = () => {
    const { toggleSideBar } = UseDashboard()
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
                <div className="btn-container">toggle/logout

                </div>
            </div>
        </Wrapper>
    )
}
export default Navbar