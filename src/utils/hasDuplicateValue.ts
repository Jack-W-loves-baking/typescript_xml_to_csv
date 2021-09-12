/**
 * To check if a given row id is unique in the row id array.
 * Return true means it has duplicate value, false otherwise
 *
 * @param {string[]} arrayOfCsvArrayRowId     array of row ids
 * @param {string} uniqueValue                     row id to check if it is unique
 *
 * @returns {boolean}                              if the given value is unique or not
 */
export const hasDuplicateValue = (
  arrayOfCsvArrayRowId: string[],
  uniqueValue: string
) => {
  return (
    arrayOfCsvArrayRowId.filter((rowId) => rowId === uniqueValue).length > 1
  );
};
