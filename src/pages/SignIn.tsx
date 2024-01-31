import React from "react";
import CircleSvg from "../assets/icon.png";
import GitHubSvg from "../assets/github.svg";
import TwitterSvg from "../assets/twitter.svg";
import LinkedInSvg from "../assets/linkedin.svg";
import DiscordSvg from "../assets/discord.svg";
import { Button } from "flowbite-react";

const SignIn = () => {
  const icons = [TwitterSvg, GitHubSvg, LinkedInSvg, DiscordSvg];

  return (
    <div className="flex">
      <div
        className="w-[50%] h-[100vh] bg-[#605BFF]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
        }}
      >
        {/* Logo */}
        <div className="h-[80px] w-[80px] absolute top-[54px] ml-[60px]">
          <img src={CircleSvg} alt="icon" />
        </div>
        {/* Heading */}
        <div className="border-[1px] h-[100%] flex items-center justify-center flex-col pr-[110px]">
          <div className="flex-grow flex items-center">
            <p className="text-[72px] font-bold text-white uppercase flex-grow">Base</p>
          </div>

          {/* social icons */}
          <div className="mb-[67px] flex gap-[30px] items-center">
            {icons.map((icon, index) => (
              <span className="text-[#FFF] text-[42px] w-[42px]">
                <img src={icon} alt="icon" />
              </span>
            ))}
          </div>
        </div>

        <div></div>
      </div>
      <div className="flex-grow border-[1px] pl-[100px] flex items-center">
        <div className="h-[600px] w-[400px] ">
          <p className="text-[36px] font-bold">Sign In</p>
          <p className="text-[16px] font-normal">Sign in to your account</p>

          <div className="mt-[28px]">
            <Button className="text-[#858585] text-[12px] font-normal border-none" color="gray">
              Sign in with Google
            </Button>
            <Button className="text-[#858585] text-[12px] font-normal border-none" color="gray">
              Sign in with Apple
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
