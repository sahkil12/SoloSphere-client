import { FaFacebook, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
    return (
        <footer className='bg-white shadow-sm'>
            <hr className="text-gray-300"/>
            <div className='container px-6 py-8 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src='/src/assets/images/logo.png' alt='' />
                        <span className="text-2xl font-semibold">SoloSphere</span>
                    </div>

                    <div className='flex flex-wrap justify-center mt-6 -mx-4 '>
                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Home{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            About{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Teams{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Privacy{' '}
                        </a>

                        <a
                            href='#'
                            className='mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 '
                            aria-label='Reddit'
                        >
                            {' '}
                            Cookies{' '}
                        </a>
                    </div>
                </div>

                <hr className='my-6 border-gray-200 md:my-10 ' />

                <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
                    <p className='text-sm md:text-base text-gray-700 '>
                        © Copyright {new Date().getFullYear()}. All Rights Reserved.
                    </p>
                    {/* linkedin */}
                    <div className='flex -mx-2'>
                        <a
                            href='#'
                            className='mx-2 text-gray-700 transition-colors duration-300 hover:text-blue-500 text-xl'
                            aria-label='linkedin'
                        >
                            <ImLinkedin size={22}></ImLinkedin>
                        </a>
                        {/* facebook */}
                        <a
                            href='#'
                            className='mx-2 text-gray-700 transition-colors duration-300 hover:text-blue-500 text-xl'
                            aria-label='Facebook'
                        >
                            <FaFacebook size={23}></FaFacebook>
                        </a>
                        {/* github */}
                        <a
                            href='#'
                            className='mx-2 text-gray-700 transition-colors duration-300 hover:text-black text-xl'
                            aria-label='Github'
                        >
                            <FaGithub size={23}></FaGithub>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;