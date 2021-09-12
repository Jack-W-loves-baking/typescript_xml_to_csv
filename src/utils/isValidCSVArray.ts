// Utils
import { validateHeaderAndTrailer } from "./validateHeaderAndTrailer";
import { validateBody } from "./validateBody";

/**
 * To check if the data extracted from CSVIntervalData is valid.
 * Return true means valid, false otherwise
 *
 * @param {string[][]}formattedArray     nested array modified from CSVIntervalData
 *
 * @returns {boolean}                 is the array extracted from CSVIntervalData element is valid
 */
export const isValidCSVArray = (formattedArray: string[][]) => {
  let isValid = true;

  // Generate an array of rowId based on csvArray
  let arrayOfCsvArrayRowId: string[] = formattedArray.map((row) => {
    return row[0];
  });

  // validate header and trailer row. Throw error message if not passed
  validateHeaderAndTrailer(arrayOfCsvArrayRowId);

  // validate body row. Throw error message if not passed
  validateBody(arrayOfCsvArrayRowId);

  return isValid;
};
