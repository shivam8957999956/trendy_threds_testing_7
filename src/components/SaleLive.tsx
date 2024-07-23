import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const SaleLive = () => {
  return (
    <div className="bg-gray-900 text-center py-2">
        <p className="text-lg font-bold text-white">
            🎉 We are Open! Enjoy Discounts Up to <span className="text-green-500">50%</span>!
        </p>
    </div>
  );
};

export default SaleLive;
