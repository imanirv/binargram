import Input from '../components/input'
import Button from '../components/button'
import { Subtitle, Title } from '../components/typography'
import RegistrationContainer from '../containers/registration/registration'

import Head from 'next/head'



const RegistrationPage = () =>{
    return(
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <RegistrationContainer />
        </>
    )
}

export default RegistrationPage