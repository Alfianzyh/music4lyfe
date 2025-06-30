const DownloadCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center w-full sm:w-fit px-4 sm:px-5 py-3 rounded-xl bg-black text-white hover:bg-white/10 transition space-x-3 sm:space-x-4 cursor-pointer">
      <div className="text-xl sm:text-2xl">{icon}</div>
      <div className="leading-tight">
        <p className="text-xs sm:text-sm text-white/70">{subtitle}</p>
        <p className="text-sm sm:text-lg font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default DownloadCard;
