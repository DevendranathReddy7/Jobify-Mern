import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, RegisterForm } from "../components"

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Register</h4>
                <RegisterForm type='text' name='name' defaultValue='Devendra' />
                <RegisterForm type='text' name='lastName' labelText='last name' defaultValue='Reddy' />
                <RegisterForm type='text' name='location' defaultValue='India' />
                <RegisterForm type='email' name='email' defaultValue='dev@gmail.com' />
                <RegisterForm type='password' name='password' defaultValue='password123' />

                <button type="submit" className="btn btn-block"> Submit</button>
                <p>Already a member? <Link to='/login' className="member-btn">Login</Link></p>
            </form>
        </Wrapper>
    )
}
export default Register