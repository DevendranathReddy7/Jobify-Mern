import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisterAndLoginPage"
import { Logo, RegisterForm } from "../components"

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>Login</h4>
                <RegisterForm type='email' name='email' defaultValue='dev@gmail.com' />
                <RegisterForm type='password' name='password' defaultValue='password123' />
                <button type="submit" className="btn btn-block">Submit</button>
                <button type="submit" className="btn btn-block">Login as Guest</button>
                <p>Not a member yet? <Link to='/register' className="member-btn">Register</Link></p>

            </form>
        </Wrapper>
    )
}
export default Login