import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand fw-bold fs-3'>
                        My Ride
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className='nav-item px-3'>
                                <Link to='/home' className='nav-link active'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link
                                    to='/destination/1'
                                    className='nav-link active'
                                >
                                    Destination
                                </Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to='/blog' className='nav-link active'>
                                    Blog
                                </Link>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to='/contact' className='nav-link active'>
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item px-3'>
                                <h5 className='nav-link active'>{loggedInUser.name || loggedInUser.displayName}</h5>
                            </li>
                            <li className='nav-item px-3'>
                                <Link to='/login' className='nav-link active btn btn-info text-white'>
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
