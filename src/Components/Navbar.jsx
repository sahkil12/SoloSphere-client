import { Link } from "react-router-dom";
import useAuth from "../Auth/useAuth";

const Navbar = () => {
    const { user, logoutUser } = useAuth()
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
                        <div title={user.displayName} className='w-10 rounded-full'>
                            <img
                                referrerPolicy='no-referrer'
                                alt='user profile'
                                src={user.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-md dropdown-content mt-3 z-1 p-3 shadow bg-base-200 rounded-box w-64 border-2 border-neutral-200 space-y-2'
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
                            <button onClick={logoutUser} className=' block text-center btn btn-primary text-base'>Logout</button>
                        </li>
                    </ul>
                </div> : 
                <ul className='menu menu-horizontal px-1 text-base font-semibold flex items-center'>
                    <li>
                       <Link to={'/'}>Home</Link>
                    </li>

                    <li>
                        <Link to={'/login'} className="btn ml-3 btn-primary px-6 text-base">Login</Link>
                    </li>
                </ul>
                }
            </div>
        </div>
    )
}

export default Navbar;