import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, Navbar, SmallSideBar } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"

const DashboardContext = createContext()
const DashboardLayout = () => {
    const user = { name: 'Dev' }
    const [showSideBar, setShowSideBar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme())

    const toggleDarkTheme = () => {
        const newTheme = !isDarkTheme
        setIsDarkTheme(newTheme)
        document.body.classList.toggle('dark-theme', newTheme)
        localStorage.setItem('darkTheme', newTheme)

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
export const useDashboard = () => useContext(DashboardContext)
export default DashboardLayout