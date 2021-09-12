// Utils
import { getSplittedCSVArray } from "./getSplittedCSVArray";

/**
 * Generate splitted csv array and generate csv accordingly.
 * @param {string[][]} validArray
 */
export const generateSplittedCSVData = (validArray: string[][]) => {
  // store header and trailer
  const header = validArray[0];
  const trailer = validArray[validArray.length - 1];

  //Remove the header and trailer from the valid array.
  validArray.shift();
  validArray.pop();

  // Get splitted csv array.
  const splittedCSVArray = getSplittedCSVArray(validArray);

  return splittedCSVArray.map((csvDataArray: any) => {
    // Added header and trailer back for each data block
    csvDataArray.unshift(header);
    csvDataArray.push(trailer);
    return csvDataArray;
  });
};
