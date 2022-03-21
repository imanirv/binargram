import Head from 'next/head'
import LoginContainer from '../containers/login'

const LoginPage = () =>{
    return(
        <>
            <Head>
                <title>Sign In - Binargram</title>
            </Head>
            <LoginContainer />
        </>
    )
}

export default LoginPage