import { useContext, useState } from "react";
import MoonIcon from "../assets/icons/moon.svg";
import SunIcon from "../assets/icons/sun.svg";
import LogoIcon from "../assets/logo.svg";
import notificationIcon from "../assets/ring.svg";
import ShoppingCartIcon from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CartDetails from "./CartDetails";

export default function Header() {
  const { state } = useContext(MovieContext);
  const [showCart, setShowcart] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleCart = () => {
    setShowcart(true);
  };

  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={LogoIcon} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={notificationIcon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={darkMode ? SunIcon : MoonIcon}
                  width="24"
                  height="24"
                  alt=""
                  onClick={() => setDarkMode(!darkMode)}
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src={ShoppingCartIcon}
                  width="24"
                  height="24"
                  alt=""
                  onClick={handleCart}
                />
                {state.cartData.length > 0 && (
                  <span className="absolute h-6 w-6 bg-green-500 top-[-5px] right-[-20px] rounded-full text-center justify-center">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {showCart && <CartDetails onCloseCart={() => setShowcart(false)} />}
    </>
  );
}
