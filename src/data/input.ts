export type Message = Record<"date" | "message", string>;

/**
 * Function to generate random records
 * Generates a specified number of random messages with dates within the last 5 years
 * @param n - Number of records to generate
 * @returns An array of randomly generated messages
 */
export const generateRandomRecords = (n: number): Message[] => {
  /**
   * Generates a random date between two given dates
   * @param start - Start date for the range
   * @param end - End date for the range
   * @returns A string representing a random date in YYYY-MM-DD format
   */
  const randomDate = (start: Date, end: Date): string => {
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toISOString().split("T")[0]; // Extract YYYY-MM-DD
  };

  const messages = [
    "message A",
    "message B",
    "message C",
    "message D",
    "message E",
    "message F",
    "message G",
  ]; // Array of sample message texts

  const now = new Date(); // Current date
  const fiveYearsAgo = new Date(); // Date from 5 years ago
  fiveYearsAgo.setFullYear(now.getFullYear() - 5);

  const records: Message[] = []; // Array to store generated records

  for (let i = 0; i < n; i++) {
    records.push({
      date: randomDate(fiveYearsAgo, now), // Generate a random date in the range
      message: messages[Math.floor(Math.random() * messages.length)], // Randomly pick a message
    });
  }

  return records; // Return the generated records
};

/**
 * Initial input dataset
 * A small sample of messages with dates for initial testing
 */
export const input: Message[] = [
  { date: "2021-06-21", message: "message D" },
  { date: "2020-06-18", message: "message A" },
  { date: "2021-06-20", message: "message C" },
  { date: "2020-06-19", message: "message B" },
];
