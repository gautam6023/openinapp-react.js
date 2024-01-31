import React, { useState } from "react";
import CircleSvg from "../assets/icon.png";
import GitHubSvg from "../assets/github.svg";
import TwitterSvg from "../assets/twitter.svg";
import LinkedInSvg from "../assets/linkedin.svg";
import DiscordSvg from "../assets/discord.svg";
import { Button, TextInput } from "flowbite-react";
import GoogleSvg from "../assets/google-icon 1.svg";
import AppleSvg from "../assets/apple 1.svg";
import { useNavigate } from "react-router-dom";
import GitHubSvg1 from "../assets/github-3.svg";
import TwitterSvg1 from "../assets/twitter2.svg";
import LinkedInSvg1 from "../assets/linkedin-2.svg";
import DiscordSvg1 from "../assets/discord-4.svg";

const SignIn = () => {
  const icons = [GitHubSvg, TwitterSvg, LinkedInSvg, DiscordSvg];
  const icons2 = [TwitterSvg1, GitHubSvg1, LinkedInSvg1, DiscordSvg1];
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // In case of invalid input
    if (!email && !password) {
      alert("Email and Password required!");
      return;
    }
    console.log(email, password);
  };
  return (
    <div className="flex bg-[#F8FAFF] flex-col sm:flex-row border-black w-[100vw]">
      <div className="w-[100%] sm:w-[50%] h-[80px] sm:h-[100vh] bg-[#605BFF] signin">
        {/* Logo */}
        <div className="h-[25px] w-[25px] sm:h-[80px] sm:w-[80px] absolute sm:top-[54px] sm:ml-[60px] top-[27px] ml-[20px]">
          <img src={CircleSvg} alt="icon" />
        </div>
        {/* Heading */}
        <div className="h-[100%] flex sm:items-center sm:justify-center flex-row sm:flex-col sm:pr-[110px] pr-0">
          <div className="flex-grow flex items-center  h-[100%]">
            <p className="text-[20px] font-semibold sm:text-[72px] sm:font-bold text-white sm:uppercase flex-grow pl-[50px] sm:pl-0 ">
              Base
            </p>
          </div>

          {/* social icons */}
          <div className="mb-[67px] flex gap-[30px] items-center icons">
            {icons.map((icon, index) => (
              <span className="text-[#FFF] text-[42px] w-[42px]">
                <img src={icon} alt="icon" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow pl-0 sm:pl-[100px] flex items-center">
        <div className="w-[400px] sm:ml-0 mx-[16px] sm:mt-0 mt-[28px]">
          <p className="text-[24px] sm:text-[36px] font-bold pl-[10px] sm:pl-0">Sign In</p>
          <p className="text-[12px] sm:text-[16px] font-normal pl-[10px] sm:pl-0">Sign in to your account</p>

          <div className="mt-[28px] flex gap-[20px] sm:gap-[28px] items-center">
            <Button
              className="text-[#858585] font-normal border-none items-center flex"
              style={{
                background: "#FFF",
                color: "#858585",
              }}
              color="light"
            >
              <span className="h-[15px] w-[15px] mr-2 sm:mr-[16px]">
                <img src={GoogleSvg} alt="icon" />{" "}
              </span>
              <p className=" text-[10px] sm:text-[12px]">Sign in with Google</p>
            </Button>
            <Button
              style={{
                background: "#FFF",
                color: "#858585",
              }}
              className="text-[#858585] text-[12px] font-normal border-none bg-[white] items-center"
              color="light"
            >
              <span className="h-[15px] w-[15px] mr-[16px]">
                <img src={AppleSvg} alt="icon" />{" "}
              </span>
              <p className="text-[10px] sm:text-[12px]">Sign in with Apple</p>
            </Button>
          </div>
          <form className="mt-[28px] bg-white p-[32px] rounded-[20px]" onSubmit={handleSubmit}>
            <div>
              <p>Email address</p>
              <TextInput
                className="mt-[10px]"
                style={{
                  background: "#F5F5F5",
                  color: "black",
                  border: "none",
                  outline: "none",
                }}
                placeholder="johndoe@gmail.com"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-[20px]">
              <p>Password</p>
              <TextInput
                className="mt-[10px]"
                style={{
                  background: "#F5F5F5",
                  color: "black",
                  border: "none",
                  outline: "none",
                }}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="text-[16px] font-normal text-[#346BD4] my-[20px] cursor-pointer">Forgot Password?</p>

            <button
              type="submit"
              className="text-white w-[100%] bg-[#605BFF] hover:bg-[#5a54fb] focus:outline-none  font-bold rounded-lg text-[16px] px-5 py-2.5 me-2 mb-2"
            >
              Sign In
            </button>
          </form>
          <p className="text-[16px] font-normal text-center mt-[50px] sm:mt-[20px] flex flex-col gap-[30px] sm:flex-row sm:gap-[4px] sm:justify-center">
            <span className="text-[#858585]"> Don’t have an account?</span>{" "}
            <span className="text-[#346BD4] cursor-pointer">Register here</span>
          </p>
          <div className="mt-[42px] flex gap-[15px] justify-center items-center mb-[45px] sm:hidden cursor-pointer">
            {icons2.map((icon, index) => (
              <span className="text-[#858585] text-[42px] w-[42px]">
                <img src={icon} alt="icon" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
