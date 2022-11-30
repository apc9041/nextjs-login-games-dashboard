import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image'
// import Link from 'next/link';
import NavLink from './NavLink/';

import actions from '../../../redux/actions/';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <div className="tabs">
      <ul style={{justifyContent: "space-between"}}>
        {/* <Link href="/">
          <a>Home</a>
        </Link> */}
        {/* <NavLink href="/register" privateRoute={false}>
          <p style={{color: 'whitesmoke'}}>Register</p>
          <a>Register</a>
        </NavLink> */}
        <div className='lf'>
          <Image src= '/img/Logo.png' alt='' width={170} height={100}/>
        </div>
        <div className='lf'>
        {/* <NavLink href="/login" privateRoute={false}>
        <p style={{color: 'whitesmoke'}}>Login</p>
        </NavLink> */}
        {/* <Link href="/user">
          <a>Profile</a>
        </Link> */}
        {isAuthenticated && (
          <li onClick={() => dispatch(actions.deauthenticate())}>
            <a>Log Out</a>
          </li>
        )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
