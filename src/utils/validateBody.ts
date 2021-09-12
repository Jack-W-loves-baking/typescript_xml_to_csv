/**
 * To validate body row ids in the row id array
 * Will throw exception if it breaks rule
 *
 * @param {string[]} arrayOfCsvArrayRowId
 * @throws error messages according to the rule break;
 *
 * @returns if no error will just exist and continue following validation.
 */
export const validateBody = (arrayOfCsvArrayRowId: string[]) => {
  const allPossibleBodyRowIds = ["200", "300"];
  // The first occurance of header row id and trailer row id.
  const firstIndexOf200RowId = arrayOfCsvArrayRowId.indexOf("200");

  // The second row id has to be '200';
  if (firstIndexOf200RowId !== 1) {
    throw new Error("The second row id of CSV array has to be 200!");
  }

  // The last row id cannot be '200';
  if (arrayOfCsvArrayRowId[arrayOfCsvArrayRowId.length - 1] === "200") {
    throw new Error(
      "CSV Array, each 200 row id needs to follow at least one 300 row id!"
    );
  }

  // Loop through the array of row id, checking
  // 1. if any row after 200 row id is not 300;
  // 2. if any row id is not 200 or 300.
  for (let i = 1; i < arrayOfCsvArrayRowId.length - 1; i++) {
    if (
      arrayOfCsvArrayRowId[i] === "200" &&
      arrayOfCsvArrayRowId[i + 1] !== "300"
    ) {
      throw new Error(
        "CSV Array, each 200 row id needs to follow at least one 300 row id!"
      );
    }

    if (allPossibleBodyRowIds.indexOf(arrayOfCsvArrayRowId[i]) < 0) {
      throw new Error("CSV Array has Invalid row ID!");
    }
  }
};
