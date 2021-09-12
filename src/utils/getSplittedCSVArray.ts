/**
 * To generate a splitted csv array.
 *
 * @param {string[][]} validArray       all csv data
 * @returns {string[][][]}              arrays - each block is a csv data
 */
export const getSplittedCSVArray = (validArray: string[][]) => {
  let splittedArray = [];

  // get all the index of rows whose id is 200.
  let indexesOf200Rows: number[] = [];
  validArray.filter((row: string[], index: number) => {
    if (row[0] === "200") {
      indexesOf200Rows.push(index);
    }
  });

  // if a block of data only has one '200' row id, then we just return the whole array as csv data.
  if (indexesOf200Rows.length === 1) return validArray;

  // splice the array to generate blocks of csv data based on the index of '200' row id.
  for (let i = 0; i < indexesOf200Rows.length; i++) {
    splittedArray.push(
      validArray.slice(indexesOf200Rows[i], indexesOf200Rows[i + 1])
    );
  }
  return splittedArray;
};
