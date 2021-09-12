// Utils
import { hasDuplicateValue } from "./hasDuplicateValue";

/**
 * To validate Header and trailer row ids in the row id array
 * Will throw exception if it breaks rule
 *
 * @param {string[]} arrayOfCsvArrayRowId
 * @throws error messages according to the rule break;
 *
 * @returns if no error will just exist and continue following validation.
 */
export const validateHeaderAndTrailer = (arrayOfCsvArrayRowId: string[]) => {
  // The first occurance of header row id and trailer row id.
  const indexOfHeader = arrayOfCsvArrayRowId.indexOf("100");
  const indexOfTrailer = arrayOfCsvArrayRowId.indexOf("900");

  // check if header row id is not found
  if (indexOfHeader < 0) {
    throw "CSV Array has NO header!";
  }

  // check if trailer row id is not found
  if (indexOfTrailer < 0) {
    throw "CSV Array has NO trailer!";
  }

  // check if header and trailer row id is unique
  if (hasDuplicateValue(arrayOfCsvArrayRowId, "100")) {
    throw "CSV Array has Duplicate header row!";
  }

  if (hasDuplicateValue(arrayOfCsvArrayRowId, "900")) {
    throw "CSV Array has Duplicate trailer row!";
  }

  // check if header row is at the first of array and trailer row is at the last.
  if (indexOfHeader > 0 || indexOfTrailer < arrayOfCsvArrayRowId.length - 1) {
    throw "CSV Array should only use 100 as staring rowId, and 900 as ending row id.";
  }

  return;
};
