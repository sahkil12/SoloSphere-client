import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"
import bgImg from "../../assets/images/login.jpg"
import useAuth from "../../Auth/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const { loginUser, googleUser } = useAuth()
    const navigate = useNavigate()
    // register account
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        // register user 
        loginUser(email, password)
            .then(result => {
                console.log(result)
                toast.success('You Successfully login to SoloSphere')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                toast.error('Something is wrong pls try again!')
            })
    }
    // google login
    const googleLogin = async () => {
        try {
            await googleUser()
            toast.success("You Successfully login to SoloSphere")
            navigate('/')
        } catch (error) {
            toast.error(error?.message)
        }
    }
    return (
        <div className='flex justify-center items-center py-20'>
            <div className='flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-5xl border-2 p-2 border-neutral-300'>
                {/* image section */}
                <div
                    className='hidden rounded-md bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                ></div>
    {/* logo */}
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='/src/assets/images/logo.png'
                            alt=''
                        />
                    </div>
                    {/* login form title */}
                    <p className='mt-3 text-xl text-center text-gray-600 font-semibold'>
                        Welcome back to <span className="text-gray-700">SoloSphere</span>
                    </p>
                    {/*  */}
                    <p className="text-center my-4 pb-6 font-medium text-gray-700">Don't Have an Account? <Link to={'/register'} className="font-semibold text-blue-500">Register</Link> Here</p>
                    {/* google login */}
                    <div onClick={googleLogin} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-200 '>
                        <div className='px-4 py-2'>
                            <FcGoogle size={20}></FcGoogle>
                        </div>

                        <span className='py-4 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>
                        {/* border line */}
                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    {/* login form */}
                    <form onSubmit={handleSubmit}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                autoComplete='email'
                                required
                                name='email'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                autoComplete='current-password'
                                required
                                name='password'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-base font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                LogIn
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;