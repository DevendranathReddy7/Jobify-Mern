import { Link, Form, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, RegisterForm, SubmitBtn } from "../components"
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
    return (
        <Wrapper>
            <Form method="post" className="form">
                <Logo />
                <h4>Register</h4>
                <RegisterForm type='text' name='name' />
                <RegisterForm type='text' name='lastName' labelText='last name' />
                <RegisterForm type='text' name='location' />
                <RegisterForm type='email' name='email' />
                <RegisterForm type='password' name='password' />
                <SubmitBtn />
                <p>Already a member? <Link to='/login' className="member-btn">Login</Link></p>
            </Form>
        </Wrapper>
    )
}
export default Register