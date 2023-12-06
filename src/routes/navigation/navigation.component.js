import {Fragment,useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import '../navigation/navegation.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

const Navigation = () => {
    const {currentUser}=useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);



    return (
        <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}{/* So, the entire expression means "if isCartOpen is true, render the CartDropdown component; otherwise, do nothing." It's a concise way of conditionally rendering components in React based on the value of a boolean variable. */}
      </div>
      <Outlet />
    </Fragment>
    )

};

export default Navigation;
