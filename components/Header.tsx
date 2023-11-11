import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 ">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        {/* logo */}

        <Logo />
        <div>
          {/* language selected */}

          {/* session && (...) */}
          {/* darkkModeToggle */}
          <DarkModeToggle />
          {/* userButtom */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
