import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const inputCleaner = () => {
    setSearchValue("");
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
    setIsPagesOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-center items-center w-full min-h-[64px] lg:min-h-[96px]">
      <div className="flex justify-between items-center lg:gap-[40px] px-[16px] lg:px-[100px] w-full lg:max-w-[1440px]">
        <div className="flex items-center gap-[16px] w-[166px] lg:w-[160px] h-[24px] lg:h-[22px] object-contain shrink-0">
          <button className="lg:hidden" onClick={toggleBurgerMenu}>
            <img
              className="w-[24px] h-[24px] object-contain shrink-0"
              src="./images/svg/burgerMenu.svg"
              alt="burgerMenu Button"
            />
          </button>
          <Link to="/">
            <img
              src="./images/svg/Logo.svg"
              alt="site Logo"
              className="w-[126px] lg:w-[160px] h-[18px] lg:h-[22px] object-contain shrink-0"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-[24px]">
          <li className="hover:text-[var(--paragraph-color)] transition duration-300 ease-in-out cursor-pointer">
            <div
              onClick={toggleServices}
              className="lg:flex lg:gap-[7px] lg:max-w-[99px]"
            >
              <a to="#">Shop</a>
              <motion.img
                src="images/svg/downArow.svg"
                alt="CaretDown"
                animate={isServicesOpen ? "open" : "closed"}
                variants={{
                  open: {
                    rotate: 180,
                    filter: "brightness(1.2)",
                  },
                  closed: {
                    rotate: 0,
                    filter: "brightness(1)",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              {isServicesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute flex flex-col justify-center bg-[var(--color-white)] shadow-[2px_4px_30px_rgba(0,0,0,0.1)] mt-[13px] pl-[32px] rounded-[16px] w-[100%] max-w-[276px] min-h-[250px] font-medium"
                >
                  <ul className="flex flex-col lg:gap-[32px]">
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                      <a href="#footer">Privacy Policy</a>
                    </li>
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                      <a href="#footer">Payment Gateway</a>
                    </li>
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                      <a href="#footer">Payment Gateway</a>
                    </li>
                    <li className="text-[var(--paragraph-color)] hover:text-[var(--colorBlack)] transition duration-300 ease-in-out cursor-pointer">
                      <a href="#footer">Terms & Conditions</a>
                    </li>
                  </ul>
                </motion.div>
              ) : (
                ""
              )}
            </div>
          </li>
          <li className="hover:text-[var(--paragraph-color)]">
            <a href="#sale">On Sale</a>
          </li>
          <li className="hover:text-[var(--paragraph-color)]">
            <a href="#arrival">New Arrivals</a>
          </li>
          <li className="hover:text-[var(--paragraph-color)]">
            <a href="#brand">Brans</a>
          </li>
        </ul>
        <div className="relative w-full max-w-[577px]">
          <input
            onChange={(event) => setSearchValue(event.target.value)}
            value={searchValue}
            type="search"
            className="hidden [&::-webkit-search-cancel-button]:hidden lg:flex bg-[var(--grayColorForInput)] px-[52px] rounded-[62px] outline-none w-full max-w-[577px] min-h-[48px] appearance-none"
            placeholder="Search for products..."
          />
          <img
            className={`top-[12px] left-[16px] absolute hidden lg:flex lg:${
              searchValue ? "hidden" : "flex"
            }`}
            src="./images/svg/search-icon.svg"
            alt="search icon"
          />

          <button
            onClick={inputCleaner}
            className="top-[15px] left-[16px] absolute cursor-pointer"
          >
            <img
              className={`w-[20px] h-[20px]  ${
                searchValue ? "block" : "hidden"
              }`}
              src="./images/svg/xIcon.svg"
              alt="close icon"
            />
          </button>
        </div>
        <div className="flex gap-[12px] lg:gap-[14px] w-[96px] lg:w-[62px] h-[24px] object-contain shrink-0">
          <button className="lg:hidden cursor-pointer">
            <img
              src="./images/svg/searchIcon.svg"
              alt="search Button"
              className="w-[24px] h-[24px] object-contain shrink-0"
            />
          </button>
          <button className="cursor-pointer">
            <img
              className="w-[24px] h-[24px] object-contain shrink-0"
              src="./images/svg/shopIcon.svg"
              alt="shoping Button"
            />
          </button>
          <button className="cursor-pointer">
            <img
              className="w-[24px] h-[24px] object-contain shrink-0"
              src="./images/svg/Profile.svg"
              alt="Profile Button"
            />
          </button>
        </div>
      </div>
      {isBurgerOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="top-0 left-0 z-50 fixed flex flex-col gap-6 bg-white shadow-lg p-[24px] w-2/3 h-full"
        >
          <button onClick={toggleBurgerMenu} className="w-[24px] h-[24px]">
            <img src="./images/svg/CloseBTN.svg" alt="close menu" />
          </button>

          <nav className="flex flex-col gap-4 mt-8">
            <ul className="flex flex-col gap-[32px]">
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Home</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">About</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Services</a>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <div onClick={toggleServices} className="flex flex-col">
                  <div className="flex gap-[7px]">
                    <a to="#">Shop</a>
                    <motion.img
                      src="images/svg/Caret down.svg"
                      alt="CaretDown"
                      animate={isServicesOpen ? "open" : "closed"}
                      variants={{
                        open: {
                          rotate: 180,
                          filter: "brightness(1.2)",
                        },
                        closed: {
                          rotate: 0,
                          filter: "brightness(1)",
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  {isServicesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-[24px] mt-[24px] ml-[16px]"
                    >
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">About Company</a>
                      </li>
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">Payment Gateway</a>
                      </li>
                      <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </motion.ul>
                  )}
                </div>
              </li>
              <li className="font-medium text-[var(--paragraph-color)] hover:text-[var(--colorBlack)]">
                <a href="#">Testimonials</a>
              </li>
            </ul>
          </nav>
          <button className="bg-[var(--colorBlack)] mt-[62px] rounded-[10px] max-w-[165px] min-h-[52px] text-[var(--colorWhite)]">
            Sign Up Now
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
