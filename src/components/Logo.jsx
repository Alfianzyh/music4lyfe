// src/components/Logo.jsx
const Logo = ({ size = 8, textSize = "text-2xl" }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/public/logo.png"
        alt="Music4Lyfe Logo"
        className="w-[65px] h-[59px]"
      />
      <span className={`${textSize} text-white font-bold font-poppins`}>
        Music4Lyfe
      </span>
    </div>
  );
};

export default Logo;
