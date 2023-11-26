import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, Navbar, SmallSideBar } from "../components"
import { createContext, useContext, useState } from "react"
const DashboardContext = createContext()
const DashboardLayout = () => {
    const user = { name: 'Dev' }
    const [showSideBar, setShowSideBar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    }
    const toggleSideBar = () => {
        setShowSideBar(prev => !prev)
    }

    const logoutUser = async () => {
        console.log('logout');
    }

    return (
        <DashboardContext.Provider value={{ user, isDarkTheme, showSideBar, toggleDarkTheme, toggleSideBar, logoutUser }}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSideBar />
                    <BigSideBar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
export const UseDashboard = () => useContext(DashboardContext)
export default DashboardLayout