// src/components/FeatureCard.jsx
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md text-center text-white hover:scale-105 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
