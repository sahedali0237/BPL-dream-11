import { toast } from "react-toastify";
import bannerMain from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";
import { useState } from "react";

type HeroProps = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
};

const Hero = ({ balance, setBalance }: HeroProps) => {
  const [claimed, setClaimed] = useState(false);

  const handleClaimCredit = () => {
    setBalance(balance + 600000);
    setClaimed(true);

    toast.success("600,000 Free Credit Claimed!");
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-8 mb-12">
      <div
        className="w-full rounded-3xl flex flex-col items-center justify-center py-16 px-4 bg-black bg-no-repeat bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <img
          src={bannerMain}
          alt="Cricket Banner"
          className="w-48 md:w-64 mb-6 object-contain"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4 tracking-wide">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="text-gray-300 text-lg md:text-xl text-center mb-8 font-medium">
          Beyond Boundaries Beyond Limits
        </p>

        <div className="p-1 border border-[#E7FE29] rounded-2xl">
          <button
        type="button"
        onClick={handleClaimCredit}
        disabled={claimed}
        className={`font-bold px-8 py-3 rounded-xl ${
          claimed
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#E7FE29] hover:bg-[#d4ed17] cursor-pointer"
        }`}
      >
        {claimed ? "Credit Claimed" : "Claim Free Credit"}
      </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;