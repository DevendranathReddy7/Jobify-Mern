import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSideBar, Navbar, SmallSideBar } from "../components"
import { createContext, useContext, useState } from "react"
import { checkDefaultTheme } from "../App"
import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/current-user')
        return data
    } catch (error) {
        return redirect('/')
    }
}

const DashboardContext = createContext()
const DashboardLayout = () => {
    const { user } = useLoaderData()
    const navigate = useNavigate()
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
        navigate('/')
        await customFetch.get('/auth/logout')
        toast.success('Logged out successfully')
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
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    )
}
export const useDashboard = () => useContext(DashboardContext)
export default DashboardLayout