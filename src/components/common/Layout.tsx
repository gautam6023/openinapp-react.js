import { FaAngleDown } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
// import HomeIconSvg from "../assets/Home.svg";
// import ListIconSvg from "../assets/List.svg";
// import ProductsIconSvg from "../assets/Products.svg";
// import DeliveryIconSvg from "../assets/Delivery.svg";
// import MarketingIconSvg from "../assets/Marketing.svg";
// import AnalyticsIconSvg from "../assets/Analytics.svg";
// import PaymentsIconSvg from "../assets/payments.svg";
// import ToolsIconSvg from "../assets/Tools.svg";
// import DiscountsIconSvg from "../assets/Discounts.svg";
// import AudienceIconSvg from "../assets/Audience.svg";
// import AppearanceIconSvg from "../assets/appearence.svg";
import PlugnisIconSvg from "../assets/plugins.svg";
import { CiCircleQuestion } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
// import MenuRounded from "../assets/Menu.svg";
// import SpeakerRounded from "../assets/speaker.svg";
// import WalletSvg from "../assets/wallet.svg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarOptions = [
    { name: "Home", icon: "" },
    { name: "Orders", icon: "" },
    { name: "Products", icon: "" },
    { name: "Delivery", icon: "" },
    { name: "Marketing", icon: "" },
    { name: "Analytics", icon: "" },
    { name: "Payments", icon: "" },
    { name: "Tools", icon: "" },
    { name: "Discounts", icon: "" },
    { name: "Audience", icon: "" },
    { name: "Appearance", icon: "" },
    { name: "Plugnis", icon: "" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[218px] h-[100vh] bg-[#1E2640] px-[10px] py-[16px] text-[#FFF] flex flex-col justify-between">
        {/* Name Section */}
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[12px] items-center">
              <div className="w-[39px] rounded-[4px]">
                <img
                  className="rounded-[4px] h-[39px]"
                  src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbXTfDpbx17Dm1UyWrCahHzqo902mog-y7REyL1EVX~ssIEzwHiEcj6MiIHeiOkbDRFcMpt3V-MvddqZyRBHDd-J3LkmTahxCv-UGtnU09Z3J2BfloJvJ7n8-My8RcF0WYqZ6UDqdBSium9I8xL4YyFvx4xreX-agyTnc8DLipLOn6ZANnuZqbZvpSsvyo6nPQr02YzgWu2BYAX~IzuUpJyPWDgjMwbgfHvQm7gpqsVVRXVoDqHJITXGmx4iYGsyfrawR5P-RLJ4ZNnwLYic-E7LCK2GbM-tOGgZf5OIKoUZwQMm35-HaH8YZ-MFzxSXKu~EwjGP9buXyfGZwoPdMg__"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[15px] font-medium leading-[22px]">Nishyan</p>
                <p className="text-[13px] font-normal leading-[16px] underline mt-1 opacity-[0.8] cursor-pointer">
                  Visit store
                </p>
              </div>
            </div>
            <span className="text-[20px] cursor-pointer">
              <FaAngleDown />
            </span>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-[4px] mt-[24px]">
            {sidebarOptions.map((el) => {
              return (
                <div className="px-4 flex items-center py-2 gap-3 hover:bg-[#ffffff1a] hover:rounded-[4px] hover:cursor-pointer">
                  {/* <img className="w-[20px] h-[20px]" alt="test" src={el.icon} /> */}
                  <p className="leading-5 text-[14px] font-medium">{el.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="px-[12px] py-[6px] bg-[#353C53] rounded flex items-center gap-[12px]">
          <div className="p-[6px] bg-[#ffffff1a] rounded w-[36px]">
            <img src={WalletSvg} alt="" className="h-[24px] w-[24px]" />
          </div>
          <div>
            <p className="text-[13px] font-normal leading-4 text-[#FFF] opacity-[0.5]">Available credits</p>
            <p className="text-[16px] font-medium leading-6">222.10</p>
          </div>
        </div> */}
      </div>
      {/* Topbar */}
      <div className="flex flex-col flex-grow bg-[#FAFAFA]">
        <div className="h-[64px] bg-white border-b-[1px] border-[#D9D9D9] px-[32px] py-[12px] flex gap-[16px] items-center"></div>
        <div className="flex-grow overflow-auto  max-w-[1480px] m-auto w-[calc(100vw-248px)]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
