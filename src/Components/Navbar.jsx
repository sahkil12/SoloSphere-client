import { Link } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const Navbar = () => {
    const { user } = useAuth()
    return (
        <div className='navbar bg-base-200 py-5 shadow-md px-4'>
            <div className='flex-1'>
                <Link to={'/'} className='flex gap-2 items-center'>
                    <img className='w-auto h-8' src='/src/assets/images/logo.png' alt='' />
                    <span className='font-bold text-2xl'>SoloSphere</span>
                </Link>
            </div>
            <div className='flex-none'>
                {user ? <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full' title=''>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src=''
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li>
                            <div className='justify-between'>Add Job</div>
                        </li>
                        <li>
                            <div>My Posted Jobs</div>
                        </li>
                        <li>
                            <div>My Bids</div>
                        </li>
                        <li>
                            <div>Bid Requests</div>
                        </li>
                        <li className='mt-2'>
                            <button className='bg-gray-200 block text-center'>Logout</button>
                        </li>
                    </ul>
                </div> : 
                <ul className='menu menu-horizontal px-1'>
                    <li>
                       <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/login'}>Login</Link>
                    </li>
                </ul>
                }
            </div>
        </div>
    )
}

export default Navbar;