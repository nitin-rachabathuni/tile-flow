import React, { useState } from "react";
import ReactDOM from "react-dom";

interface AddTileModalProps {
  onClose: () => void; // Function to close the modal
  onAddTile: (date: string, message: string) => void; // Function to add a new tile
}

const AddTileModal: React.FC<AddTileModalProps> = ({ onClose, onAddTile }) => {
  const [date, setDate] = useState(""); // State for the date input
  const [message, setMessage] = useState(""); // State for the message input

  /**
   * Handle adding a new tile
   */
  const handleAdd = () => {
    if (!date || !message) {
      alert("All fields are required!");
      return;
    }
    onAddTile(date, message);
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-md p-6 transform transition-transform duration-300 scale-100">
        {/* Modal Title */}
        <h2 className="text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500 text-3xl font-extrabold">
          Add New Tile
        </h2>

        {/* Date Input */}
        <input
          type="date"
          className="mb-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Message Input */}
        <input
          type="text"
          placeholder="Message"
          className="mb-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          {/* Cancel Button */}
          <button
            className="px-4 py-2 bg-gray-400 hover:bg-gray-300 text-white rounded-lg shadow-md transition-all duration-300"
            onClick={onClose}
          >
            Cancel
          </button>

          {/* Add Button */}
          <button
            className="px-4 py-2 bg-gradient-to-r from-red-400 to-purple-500 hover:from-red-500 hover:to-purple-600 text-white rounded-lg shadow-md transition-all duration-300"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );

  // Render modal content into a portal
  return ReactDOM.createPortal(modalContent, document.body);
};

export default AddTileModal;
