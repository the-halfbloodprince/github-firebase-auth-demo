import { useNavigate } from 'react-router-dom'
import { signInWithGitHub as GithubSignIn } from '../utilities/auth'

const Login = () => {

    const navigate = useNavigate()

    const onSuccessfulLogin = () => {
        // Navigate to the test page
        navigate('/test')
    }

    const signInWithGitHub = () => {
        GithubSignIn(onSuccessfulLogin)
    }

    return (
        <div>
            <button onClick={signInWithGitHub} className="login-github-btn">
                Sign In with Github
            </button>
        </div>
    )
}

export default Login
