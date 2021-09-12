/**
 * Generate the name for the file
 *
 * @param subArray nested array
 * e.g [[['100','test'],['200', '819871231']]]
 *
 * @returns the name for the generated csv file
 */
export const generateCSVName = (subArray: string[][]) => {
  return `${subArray[1][1]}.csv`;
};
