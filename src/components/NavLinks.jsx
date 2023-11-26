import { NavLink } from "react-router-dom"
import { UseDashboard } from "../pages/DashboardLayout"
import links from "../Utils/Links"

const NavLinks = ({ isBigSidebar }) => {
    const { toggleSideBar } = UseDashboard()
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, icon } = link
                return <NavLink to={path} key={text} className='nav-link' onClick={isBigSidebar ? null : toggleSideBar}>
                    <span className="icon">{icon}</span>{text}
                </NavLink>
            })}
        </div>
    )
}
export default NavLinks