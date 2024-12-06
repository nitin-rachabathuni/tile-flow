# TileFlow - A React + TypeScript Application

TileFlow is a drag-and-drop React application designed for grouping, sorting, and managing tiles by year. Built with React, TypeScript, and Vite, the app allows for scalable and responsive interaction with tile grids.

## Features

- **Drag-and-Drop:** Move tiles within the same group or across groups.
- **Sorting:** Sort tiles by date within each year group.
- **Reset Order:** Reset tiles to their initial state.
- **Dynamic Data:** Add new tiles with customizable dates and messages.
- **Horizontal Grids:** Year-based grids are horizontally aligned and scrollable.
- **Responsive Design:** The app adjusts seamlessly to various screen sizes.

## Project Structure

The app is divided into modular components to ensure scalability and maintainability.

### Components

1. **`Header.tsx`:**
   - Contains the app title and buttons for resetting and sorting tiles.
   - Implements interactivity using icons and gradients for a modern UI.

2. **`TileGrid.tsx`:**
   - Displays tiles grouped by year in horizontally aligned grids.
   - Each grid is scrollable vertically if it exceeds a certain height.
   - Integrates `DragDropProvider` for drag-and-drop functionality.

3. **`DragDropProvider.tsx`:**
   - Provides drag-and-drop functionality for tiles.
   - Handles both same-group and cross-group tile movements.
   - Ensures seamless interaction with minimal performance overhead.

4. **`AddTileModal.tsx`:**
   - A modal for adding new tiles.
   - Features date and message inputs with validation.
   - Utilizes Tailwind CSS for animations and responsiveness.

5. **`input.ts`:**
   - Contains the initial dataset and a utility to generate random records for testing.

### Utilities

- **`groupByYear`:** Groups tiles by their year for efficient rendering and management.

## Installation and Setup

Follow the steps below to set up and run the application locally:

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn

### Steps

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   cd tileflow
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Application:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

4. **Build for Production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview the Build:**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Logic Overview

### Drag-and-Drop Logic

- **`DragDropProvider.tsx`**:
  - Tracks the dragged item’s index and group key.
  - Updates the source and target groups after a drop event.
  - Supports both intra-group and inter-group movements.

### Sorting Logic

- **`App.tsx`**:
  - The `handleSort` function sorts tiles by date within each year group.

### Reset Logic

- **`App.tsx`**:
  - The `handleReset` function restores the initial state using the original dataset.

### Adding Tiles

- **`AddTileModal.tsx`**:
  - Handles user input for date and message.
  - Validates inputs before adding the new tile to the corresponding year group.

## Styling

- **Tailwind CSS**:
  - Used for responsive design and UI enhancements.
  - Provides a clean and modern look with gradient backgrounds, hover effects, and animations.

## Testing with Large Datasets

- Use the `generateRandomRecords` function in `input.ts` to create datasets of any size for performance testing.

   Example:
   ```typescript
   import { generateRandomRecords } from "./data/input";
   const largeDataset = generateRandomRecords(1000);
   ```

## Future Improvements

- Implement keyboard accessibility for drag-and-drop.
- Enhance performance for very large datasets.
- Add unit tests for core functionality.

---

Feel free to contribute to this project or suggest enhancements!