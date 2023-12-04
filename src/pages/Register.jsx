import { Link, Form, useNavigate, redirect, useNavigation } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, RegisterForm } from "../components"
import { toast } from "react-toastify"
import customFetch from "../utils/customFetch"

export const actions = async ({ request }) => {
    const formdata = await request.formData()
    const data = Object.fromEntries(formdata)
    try {
        await customFetch.post('/auth/register', data)
        toast.success('Registration successfull')
        return redirect('/login')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

const Register = () => {
    const navigate = useNavigation()
    const isSubmitting = navigate.state === 'submitting'
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>Register</h4>
                <RegisterForm type='text' name='name' defaultValue='Devendra' />
                <RegisterForm type='text' name='lastName' labelText='last name' defaultValue='Reddy' />
                <RegisterForm type='text' name='location' defaultValue='India' />
                <RegisterForm type='email' name='email' defaultValue='dev@gmail.com' />
                <RegisterForm type='password' name='password' defaultValue='password123' />

                <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
                <p>Already a member? <Link to='/login' className="member-btn">Login</Link></p>
            </Form>
        </Wrapper>
    )
}
export default Register