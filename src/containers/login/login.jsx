import Input from "../../components/input";
import Button from "../../components/button";
import { Title, Subtitle } from "../../components/typography";
import { NoAuthProvider } from "../../providers/auth";
import { useFormik, getIn } from "formik";
import * as Yup from 'yup';
import { useLoginDispatcher } from '../../redux/reducers/login';


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
});
const initialValues = {
    email: "",
    password: ""
};


const LoginContainer = () =>{

    const { login: { loading }, doLogin } = useLoginDispatcher();
    const onSubmit = async (values) => {
        try {
            const payload = {
                identifier: values.email,
                password: values.password,
            };
            await doLogin(payload);
            window.location.href = "/";
        } catch (error) {
            alert(error);
        }
    }
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return(
        <NoAuthProvider>
            <div className="bg-black">
                <main className='p-3 text-gray-200 h-screen max-w-md mx-auto flex flex-col space-y-3 justify-center items-center'>
                    <div className="w-full">
                        <div className="w-full py-5">
                            <Title text={'Sign In'}/>
                            <Subtitle content="Welcome to BinarGram" />
                        </div>
                        <form clasName="w-full border p-5 rounded-2xl" onSubmit={handleSubmit}>
                            <Input
                                name="email"
                                label="email"
                                type="text"
                                placeholder="your@email.com"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                dataTestId="input-email"
                            />
                            {
                                getIn(touched, "email") && getIn(errors, "email") && (
                                    <div className="text-xs text-red-500 pb-3" data-testId="error-email">
                                        {getIn(errors, "email")}
                                    </div>
                                )
                            }
                            <Input
                                name="password"
                                label="password"
                                type="password"
                                placeholder="Your Secret Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                dataTestId="input-password"
                            />
                        {
                                getIn(touched, "password") && getIn(errors, "password") && (
                                    <div className="text-xs text-red-500 pb-3" data-testId="error-password">
                                        {getIn(errors, "password")}
                                    </div>
                                )
                            }
                            <div className="mt-14">
                                <Button type="submit" label={loading ? "please wait" : "Go to My Account"} />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </NoAuthProvider>
    )
}


export default LoginContainer;