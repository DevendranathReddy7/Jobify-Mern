import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, RegisterForm } from "../components"
import { Link, Form, useNavigate, redirect, useNavigation } from "react-router-dom"
import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"

export const actions = async ({ request }) => {
    const formdata = await request.formData()
    const data = Object.fromEntries(formdata)
    try {
        await customFetch.post('/auth/login', data)
        toast.success('Login Succssful')
        return redirect('/dashboard')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error

    }
}
const Login = () => {
    const navigate = useNavigation()
    const isSubmitting = navigate.state === 'submitting'
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>Login</h4>
                <RegisterForm type='email' name='email' defaultValue='dev@gmail.com' />
                <RegisterForm type='password' name='password' defaultValue='password123' />
                <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
                <button type="submit" className="btn btn-block">Login as Guest</button>
                <p>Not a member yet? <Link to='/register' className="member-btn">Register</Link></p>

            </Form>
        </Wrapper>
    )
}
export default Login