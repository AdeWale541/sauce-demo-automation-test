import { Reporter } from "@playwright/test/reporter"

export default class CustomReporter {
    /**
       * @param {import('@playwright/test/reporter').FullResult} finalTestResult
       * @param {import('@playwright/test/reporter').TestCase} testCase
       * @param {import('@playwright/test/reporter').TestResult} testResult
       * @param {import('@playwright/test/reporter').FullConfig} config
       * @param {import('@playwright/test/reporter').Suite} suite
    
    */

    onBegin(config, suite) {
        console.log(`Test is beginning with Test Parallelism: ${config.fullyParallel} and number of tests ${suite.tests.length}`);
    }

    onTestEnd(testCase, testResult) {
        console.log(`${testCase.title} test has ended with test result ${testResult.status}`);
    }

    onEnd(finalTestResult) {
        console.log(`Test Result ended in ${finalTestResult.duration} with status ${finalTestResult.status}`);
    }

    onExit() {
        console.log("All Tests Have been run")
    }
}