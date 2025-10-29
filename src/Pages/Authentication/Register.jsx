import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/images/register.jpg"
import useAuth from "../../Auth/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    const { registerUser, googleUser, updateUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state || '/'
    // register account
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // register user 
        registerUser(email, password)
            .then(result => {
                if (result?.user) {
                    updateUser({
                        displayName: name,
                        photoURL: photo
                    })
                        .then(() => {
                            toast.success("Your account was created successfully");
                            navigate(from, {replace:true})
                        })
                        .catch((error) => {
                            toast.error("Error updating user profile:", error.message);
                        });
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    // google register
    const googleRegister = async () => {
        try {
            await googleUser()
            toast.success("Your Account Create Successfully")
            navigate(from, {replace:true})
        } catch (error) {
            toast.error(error?.message)
        }
    }

    return (
        <div className='flex justify-center items-center py-10 md:py-20'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-5xl border-2 p-2 border-neutral-300 '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    {/* logo */}
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='/src/assets/images/logo.png'
                            alt=''
                        />
                    </div>
                    {/* register form title */}
                    <p className='mt-3 text-xl text-center text-gray-700 '>
                        Create Your Free Account Now.
                    </p>
                    <p className="text-center my-4 pb-6 font-medium text-gray-700">Have an Account? Please <Link to={'/login'} className="font-semibold text-blue-500">Login</Link></p>
                    {/* google register form */}
                    <div onClick={googleRegister} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg  hover:bg-gray-200 '>
                        <div className='px-4 py-2'>
                            <FcGoogle size={20}></FcGoogle>
                        </div>

                        <span className='py-4 font-bold text-center'>
                            Sign in with Google
                        </span>
                    </div>
                    {/* border line */}
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    {/* register form */}
                    <form onSubmit={handleSubmit}>
                        {/* name */}
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                required
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        {/* photo url */}
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                required
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type="url"
                            />
                        </div>
                        {/* email */}
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                required
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>
                        {/* password */}
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
                                required
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-3 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        {/* register button */}
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-base font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
                <div
                    className='hidden rounded-md bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Register;
