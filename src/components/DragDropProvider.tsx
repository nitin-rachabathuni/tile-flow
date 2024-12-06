import React, { useState } from "react";
import { Message } from "../data/input";

interface DragDropProviderProps {
  tiles: Record<string, Message[]>; // All grouped tiles by year
  setTiles: React.Dispatch<React.SetStateAction<Record<string, Message[]>>>; // Function to update tile state
  groupKey: string; // Current year (group) key
  children: React.ReactNode; // Tile components as children
}

const DragDropProvider: React.FC<DragDropProviderProps> = ({
  tiles,
  setTiles,
  groupKey,
  children,
}) => {
  // Track the currently dragged item
  const [draggedItem, setDraggedItem] = useState<{
    index: number;
    groupKey: string;
  } | null>(null);

  /**
   * Handle the start of a drag event
   * @param event - The drag event
   * @param index - The index of the dragged item
   */
  const handleDragStart = (
    index: number
  ) => {
    setDraggedItem({ index, groupKey }); // Store the dragged item's index and group key
  };

  /**
   * Handle dropping an item
   * @param event - The drop event
   * @param targetIndex - The index of the target drop location
   */
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetIndex: number
  ) => {
    event.preventDefault();
    if (!draggedItem) return; // Exit if no item is being dragged

    const { index: sourceIndex, groupKey: sourceGroup } = draggedItem;

    if (sourceGroup === groupKey) {
      // Same group drag-and-drop
      const updatedGroup = [...tiles[groupKey]];
      const [draggedTile] = updatedGroup.splice(sourceIndex, 1); // Remove dragged tile
      updatedGroup.splice(targetIndex, 0, draggedTile); // Insert at the new position

      setTiles((prevTiles) => ({
        ...prevTiles,
        [groupKey]: updatedGroup,
      }));
    } else {
      // Cross-group drag-and-drop
      const sourceGroupTiles = [...tiles[sourceGroup]];
      const targetGroupTiles = [...tiles[groupKey]];

      const [draggedTile] = sourceGroupTiles.splice(sourceIndex, 1); // Remove from source
      targetGroupTiles.splice(targetIndex, 0, draggedTile); // Add to target

      setTiles((prevTiles) => ({
        ...prevTiles,
        [sourceGroup]: sourceGroupTiles,
        [groupKey]: targetGroupTiles,
      }));
    }

    setDraggedItem(null); // Reset drag state
  };

  /**
   * Handle dragging over a drop target
   * @param event - The drag over event
   */
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent default to allow drop
  };

  return (
    <div className="grid gap-4">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<JSX.IntrinsicElements["div"]>, // Ensure child is a valid div element
            {
              draggable: true, // Make child draggable
              onDragStart: () => handleDragStart(index), // Start dragging
              onDrop: (e: React.DragEvent<HTMLDivElement>) => handleDrop(e, index), // Handle dropping
              onDragOver: handleDragOver, // Allow drag over
            }
          );
        }
        return child; // Return the child as-is if not a valid element
      })}
    </div>
  );
};

export default DragDropProvider;
