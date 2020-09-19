import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {
    const [state, dispatch] = useStateValue()
    const handleAuth = () => {
        if (state.user) {
            auth.signOut();
        }
    }
    const homeUrl = state.user ? "/" : '/login'
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>
            <div className='header__search'>
                <input
                    className='header__searchInput'
                    text='input'
                />
                <SearchIcon
                    className='header__searchIcon'
                />
            </div>
            <div className='header__nav'>
                <Link to={homeUrl}>
                    <div onClick={handleAuth} className='header__option'>
                        <span className='header__optionLineOne'>Hello {state.user?.email ? state.user?.email : 'Guest'}</span>
                        <span className='header__optionLineTwo'>{state.user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketcount">{state.basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div >
    )
}
export default Header