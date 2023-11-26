import Wrapper from "../assets/wrappers/BigSidebar"
import { useDashboard } from "../pages/DashboardLayout"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

const BigSideBar = () => {
    const { showSideBar, toggleSideBar } = useDashboard()
    return (
        <Wrapper>
            <div className={showSideBar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <header><Logo /></header>
                    <NavLinks isBigSidebar />
                </div>
            </div>
        </Wrapper>
    )
}
export default BigSideBar