import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { footerLists, paymentMethod } from "../../data/footerLists";

const Footer = () => {
  return (
    <footer className="bg-[var(--grayColorForInput)] mt-[184px] px-[16px] pt-[186px] pb-[77px] w-full">
      <div className="m-auto lg:px-[100px] w-full lg:max-w-[1440px]">
        <div className="flex flex-col">
          <div>
            <div>
              <img
                src="./images/svg/Logo.svg"
                alt="site Logo"
                className="w-[114px] lg:w-[125px] h-[20px] lg:h-[20px] object-contain shrink-0"
              />
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
          <div className="flex flex-wrap gap-x-[89px] gap-y-[24px] mt-[24px]">
            {footerLists.map((eachElements, index) => (
              <div key={eachElements.index}>
                <h3 className="font-medium text-[14px]">
                  {eachElements.title}
                </h3>
                <ul className="flex flex-col gap-[16px] mt-[16px]">
                  {eachElements.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-[14px] text-[var(--colorBlackOpacity)]"
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
        <div className="flex flex-col items-center gap-y-[16px] text-[14px] text-[var(--colorBlackOpacity)]">
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
