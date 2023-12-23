import { useState } from "react";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between section-container">
      <a href="#home" className="link">
          <span style={{ fontSize: '22px' }}>🐷</span> {/* Replace with your emoji */}
      </a>
      </div>
    </header>
  );
};

export default Header;
