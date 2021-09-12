1. How to run the project.
-   npm i,
-   npm start
-   Open your localhost and click the button 'CLICK TO GENERATE' to see the CSV files

check test coverage.
npm test -- --watch

2. What was done

- Created Typescript project to finish all of the acceptance criteria.
- Created customized useFetch() hook to return xml object based on url given.
- Added some Jest Unit tests.
- Good Error handling. I throw different error messages to alert(msg), so that the user should be aware of what is wrong with the data inside CSVIntervalData tag.

3. What wasn't done

- No end to end module tests.

4. What would be done with more time.

- Better UI. I would like to have a checkbox ticked besides the csv link once it has been clicked.
- More Jest unit tests and module tests.
- Create util to allow the user to bulk download all csv files.
- Added index to throw message, so the user can quickly find out the issue.
- Added a file select feature, currently, the loading test xml file is hard-coded as 'testfile.xml' in the public folder
