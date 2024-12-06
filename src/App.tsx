import React, { useState } from "react";
import Header from "./components/Header";
import TileGrid from "./components/TileGrid";
import AddTileModal from "./components/AddTileModal";
import { input, Message } from "./data/input";
import { groupByYear } from "./utils/groupByYear";
import { FaPlus } from "react-icons/fa";

// Use input data or generate a large dataset for testing
const dataSet = input; // Change to generateRandomRecords(999) for testing large datasets

const App: React.FC = () => {
  // State for managing tiles grouped by year
  const [tiles, setTiles] = useState(groupByYear(dataSet));
  // State for managing the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  /**
   * Sort tiles by date within each year group
   */
  const handleSort = () => {
    setTiles((prev) => {
      const sortedTiles = Object.keys(prev).reduce((acc, year) => {
        acc[year] = [...prev[year]].sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        return acc;
      }, {} as Record<string, Message[]>);
      return sortedTiles;
    });
  };

  /**
   * Reset tiles to their original input order
   */
  const handleReset = () => {
    setTiles(groupByYear(dataSet));
  };

  /**
   * Add a new tile to the appropriate year group
   * @param date - Date of the new tile
   * @param message - Message of the new tile
   */
  const handleAddTile = (date: string, message: string) => {
    const year = date.split("-")[0]; // Extract the year from the date
    setTiles((prev) => ({
      ...prev,
      [year]: prev[year] ? [...prev[year], { date, message }] : [{ date, message }],
    }));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      {/* Header with sorting and reset functionality */}
      <Header onSort={handleSort} onReset={handleReset} />

      {/* Grid of tiles grouped by year */}
      <TileGrid groupedTiles={tiles} setTiles={setTiles} />

      {/* Button to open the Add Tile modal */}
      <button
        className="mt-1 bg-white border border-gray-300 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
        onClick={() => setModalOpen(true)}
      >
        <FaPlus className="text-red-400" /> {/* Add Icon */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 font-medium">
          Add New Tile
        </span>
      </button>

      {/* Modal for adding a new tile */}
      {isModalOpen && (
        <AddTileModal onClose={() => setModalOpen(false)} onAddTile={handleAddTile} />
      )}
    </div>
  );
};

export default App;
