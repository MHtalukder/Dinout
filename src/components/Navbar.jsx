import Logo from "../assets/logo.svg";
import UserLogo from "../assets/user-icon.png";

const Navbar = () => {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="text-primary mr-2">
          <img src={Logo} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary">Dine</span>Out
        </h1>
      </div>
      <div className="flex items-center">
        <img src={UserLogo} className="h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
