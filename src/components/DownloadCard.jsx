// src/components/DownloadCard.jsx
const DownloadCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center w-fit px-5 py-3 rounded-xl bg-black text-white hover:bg-white/10 transition space-x-4">
      <div className="text-white text-2xl">{icon}</div>
      <div>
        <p className="text-xs text-white">{subtitle}</p>
        <p className="text-lg font-semibold text-white">{title}</p>
      </div>
    </div>
  );
};

export default DownloadCard;
