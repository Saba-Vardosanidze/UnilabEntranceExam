import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { footerLists, paymentMethod } from "../../data/footerLists";
import { Link } from "react-router-dom";

const Footer = ({ children }) => {
  return (
    <footer
      id="footer"
      className="relative bg-[var(--grayColorForInput)] mt-[184px] px-[16px] pt-[189px] lg:pt-[140px] pb-[77px] w-full"
    >
      {children}
      <div className="m-auto lg:px-[100px] w-full lg:max-w-[1440px]">
        <div className="flex lg:flex-row flex-col gap-x-[113px]">
          <div>
            <div className="max-w-[248px]">
              <Link to="/">
                <img
                  src="./images/svg/Logo.svg"
                  alt="site Logo"
                  className="w-[114px] lg:w-[125px] h-[20px] lg:h-[20px] object-contain shrink-0"
                />
              </Link>
              <p className="mt-[14px] mb-[20px] text-[14px] text-[var(--colorBlackOpacity)] leading-[20px]">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>
            <div className="flex gap-[12px]">
              <a href="https://x.com/">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer">
                  <FaTwitter className="fill-[var(--colorBlack)] hover:fill-[var(--colorWhite)] p-[7px] w-[28px] h-[28px] transition-all duration-300 cursor-pointer" />
                </div>
              </a>
              <a href="https://facebook.com/">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer">
                  <FaFacebookF className="fill-[var(--colorBlack)] hover:fill-[var(--colorWhite)] p-[7px] w-[28px] h-[28px] transition-all duration-300 cursor-pointer" />
                </div>
              </a>
              <a href="https://instagram.com/">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer">
                  <FaInstagram className="fill-[var(--colorBlack)] hover:fill-[var(--colorWhite)] p-[7px] w-[28px] h-[28px] transition-all duration-300 cursor-pointer" />
                </div>
              </a>
              <a href="https://github.com/">
                <div className="flex justify-center items-center bg-[var(--colorWhite)] hover:bg-[var(--colorBlack)] border border-[var(--colorBlackborder)] rounded-[100%] w-[28px] h-[28px] transition-all duration-300 cursor-pointer">
                  <FaGithub className="fill-[var(--colorBlack)] hover:fill-[var(--colorWhite)] p-[7px] w-[28px] h-[28px] transition-all duration-300 cursor-pointer" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-[89px] gap-y-[24px] lg:gap-x-[113px] mt-[24px] lg:mt-[0px]">
            {footerLists.map((eachElements, index) => (
              <div key={eachElements.index}>
                <h3 className="font-medium text-[14px] lg:text-[16px]">
                  {eachElements.title}
                </h3>
                <ul className="flex flex-col gap-[16px] mt-[16px]">
                  {eachElements.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px] hover:text-[var(--colorBlack)] transition-all duration-300 ease-in-out"
                    >
                      <a href={link.href}>{link.value}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[var(--colorBlackborder)] mt-[40px] mb-[16px] h-[1px]"></div>
        <div className="flex lg:flex-row flex-col justify-between items-center gap-y-[16px] text-[14px] text-[var(--colorBlackOpacity)]">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex">
            {paymentMethod.map((eachElements) => (
              <div>
                <a href={eachElements.cardRegister}>
                  <img
                    className="w-[50px] object-contain shrink-0"
                    src={eachElements.paymentCard}
                    alt="paymentCardType"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
