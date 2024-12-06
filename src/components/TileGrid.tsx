import React from "react";
import { Message } from "../data/input";
import DragDropProvider from "./DragDropProvider";

interface TileGridProps {
  groupedTiles: Record<string, Message[]>; // Tiles grouped by year
  setTiles: React.Dispatch<React.SetStateAction<Record<string, Message[]>>>; // Function to update the tiles
}

const TileGrid: React.FC<TileGridProps> = ({ groupedTiles, setTiles }) => {
  return (
    <div className="mt-20 flex space-x-6 overflow-x-auto px-4">
      {Object.entries(groupedTiles).map(([year, tiles]) => (
        <div
          key={year}
          className="bg-gray-50 p-4 mb-12 rounded-lg shadow-md w-64 min-w-[250px] flex-shrink-0"
        >
          {/* Year Header */}
          <h2 className="text-lg font-bold mb-4 text-gray-700">{year}</h2>

          {/* Scrollable Container for Tiles */}
          <div className="max-h-[800px] overflow-y-auto pr-2">
            <DragDropProvider
              tiles={groupedTiles}
              setTiles={setTiles}
              groupKey={year}
            >
              {tiles.map((tile, index) => (
                <div
                  key={tile.date + tile.message}
                  className="p-4 bg-white border rounded shadow cursor-pointer mb-2"
                  data-index={index}
                >
                  {/* Tile Content */}
                  <p className="text-gray-900">{tile.message}</p>
                  <span className="text-sm text-gray-500">{tile.date}</span>
                </div>
              ))}
            </DragDropProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileGrid;
