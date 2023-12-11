import { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google'


const clientId = process.env.GOOGLE_AUTH_CLIENT_ID!
const [credential, setCredential] = useState("")

const SignIn = () => {
    const handleLoginSuccess = (res: CredentialResponse) => {
        setCredential(res.credential!)
    }

    const handleLoginFailure = () => {
        console.log("Login failed!")
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="Signin">
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    useOneTap
                />
            </div>
        </GoogleOAuthProvider>
    )
}

export default SignIn