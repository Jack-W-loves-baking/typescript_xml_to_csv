/**
 * To modify the string from CSVIntervalData elements into nested array
 *
 * @param {string} CSVIntervalData           data from CSVIntervalData elements
 *
 * @returns {string[][]}                     nested array
 */

export const modifyXMLDocToCSVArray = (CSVIntervalData: string) => {
  // First to trim here is to remove empty new line break from the beginning and end of string.
  // e.g '/n1,2,3/n4,5,6/n' => '1,2,3/n4,5,6';
  //
  // Second to split by the new line regex to generate an array for each row.
  // e.g '1,2,3/n4,5,6'=> ['1,2,3', '4,5,6'];
  //
  // Third is to split each row by ','
  // e,g ['1,2,3', '4,5,6'] => [['1', '2', '3'], ['4', '5', '6']]
  return CSVIntervalData.trim()
    .split(/\n/)
    .map((row) => row.split(","));
};
