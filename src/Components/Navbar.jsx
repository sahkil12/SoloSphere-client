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
                {user ? <div className="flex items-center gap-3">
                    <button className="btn h-fit w-fit font-bold py-1.5 px-5">
                       <Link to={'/'}>Home</Link>
                    </button>
                    <div className='dropdown dropdown-end z-50'>
                    
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
                            <Link to={'/addJobs'}>Add Job</Link>
                        </li>
                        <li>
                              <Link to={'/myPostedJobs'}>My Posted Jobs</Link>
                        </li>
                        <li>
                              <Link to={'/myBids'}>My Bids</Link>
                        </li>
                        <li>
                              <Link to={'/bidRequest'}>Bid Requests</Link>
                        </li>
                        <li className='mt-2'>
                            <button onClick={logoutUser} className=' block text-center btn btn-primary text-base'>Logout</button>
                        </li>
                    </ul>
                </div>
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