import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import myImage from "../images/amazon_logo.png";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../StateProvider"
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue()
  const login = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <nav className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src={myImage}
          alt="amazon-logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"} className="header__Link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello, {user ? user.email : "Guest"}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__Link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__Link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>

    </nav>
  );
}

export default Header;
