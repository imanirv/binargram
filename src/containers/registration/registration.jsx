import Input from '../../components/input'
import Button from '../../components/button'
import {Subtitle, Title} from '../../components/typography'
import useForm from './hooks/useForm'


const RegistrationContainer = () =>{
    const {
        handleChange,
        handleSubmit,
        handleBlur,
        hasErrors,
        isValid,
        values
    } = useForm({
        initialValues: {
            username:'',
            email:'',
            password:'',

        }
    })

    return(
        <main>
            <div className='w-full text-gray-700 h-screen flex flex-col space-y-3 justify-center items-center'>
                <div className='w-1/4 mx-auto py-5'>
                    <Title text="Sign Up Here" />
                    <Subtitle content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, repellat?" />
                </div>
                <form action="" className='w-1/4 mx-auto border p-5 rounded-2xl'>
                    <Input 
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="Your Username"
                        onChange={(value) => handleChange("username", value)}
                        onBlur={(e) => handleBlur("username", e)}
                    />
                    {
                        hasErrors("username") && (
                            <div className='text-xs text-red-500 pb-3'>{hasErrors("username")}</div>
                        )
                    }
                    <Input 
                        name="email"
                        label="Email"
                        type="text"
                        placeholder="your@mail.com"
                        onChange={(value) => handleChange("email", value)}
                        onBlur={(e) => handleBlur("email", e)}
                    />
                    {
                        hasErrors("email") && (
                            <div className='text-xs text-red-500 pb-3'>{hasErrors("email")}</div>
                        )
                    }
                    <Input 
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="your@mail.com"
                        onChange={(value) => handleChange("password", value)}
                        onBlur={(e) => handleBlur("password", e)}
                    />
                    {
                        hasErrors("password") && (
                            <div className='text-xs text-red-500 pb-3'>{hasErrors("password")}</div>
                        )
                    }
                    <Button type="submit" label="Create an Account now" />
                </form>
            </div>
        </main>
    )
}

export default RegistrationContainer