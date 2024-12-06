import React from "react";
import { FaRedoAlt, FaSortAmountDown } from "react-icons/fa"; // Import icons

interface HeaderProps {
  onSort: () => void; // Function to handle sorting tiles
  onReset: () => void; // Function to reset tiles to their initial order
}

const Header: React.FC<HeaderProps> = ({ onSort, onReset }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="mx-auto flex justify-between items-center py-4 px-6">
        {/* Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 text-3xl font-extrabold">
          TileFlow
        </h1>

        {/* Buttons Section */}
        <div className="flex space-x-4">
          {/* Reset Button */}
          <button
            className="flex items-center space-x-2 bg-gradient-to-r from-red-400 to-purple-500 text-white font-medium text-lg px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            onClick={onReset}
          >
            <FaRedoAlt className="w-5 h-5" /> {/* Reset Icon */}
            <span>Initial Order</span>
          </button>

          {/* Sort Button */}
          <button
            className="flex items-center space-x-2 bg-blue-500 text-white font-medium text-lg px-5 py-2 rounded-full shadow-md hover:bg-blue-400 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            onClick={onSort}
          >
            <FaSortAmountDown className="w-5 h-5" /> {/* Sort Icon */}
            <span>Sorted Order</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
