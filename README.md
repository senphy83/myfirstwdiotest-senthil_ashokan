WebdriverIO Test Automation framework

This framework is built to test google search, Below are the list of scenarios thats been automated using this framework
1. GoogleSearch.test.js - UI test, that searches for the keyword 'Selenium' and checks for the number of links on the page
2. GoogleSearchAccessibility.test.js - Accessibility test, loads the selenium web page and scans for the accessibility violations, and the reports are printed on console in jsin format. We can then parse the json file and create a html format of reporting.
3. GoogleSearchPerf.test.js - Performance test, loads a page and extracts the performance metrics

To run those tests type the below command in cmd line
for UI test : npm test -- --spec=GoogleSearch.test.js
for Accessibility test : npm test -- --spec=GoogleSearchAccessibility.test.js
for Performance test : npm test -- --spec=GoogleSearchPerf.test.js

To run all tests in parallel : npm test

Performance metrics :
getMetrics : Gets most common used performance metrics like load, speedindex etc.
getDiagnostics : details about page load
getMainThreadWorkBreakdown : Breakdown of all main thread task and their total duration
getPerformanceScore : Lighthouse performance score, To provide a good user experience, sites should strive to have a good score (90-100)

