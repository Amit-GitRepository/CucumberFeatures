$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01_basic_test.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Check background functionality",
  "description": "",
  "id": "title-of-your-feature;check-background-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "some other precondition",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "some other action",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "yet another action",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef01_Basic.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 105039345,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.some_other_precondition()"
});
formatter.result({
  "duration": 84909,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.i_complete_action()"
});
formatter.result({
  "duration": 82109,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.some_other_action()"
});
formatter.result({
  "duration": 180548,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.yet_another_action()"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 230001,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.check_more_outcomes()"
});
formatter.result({
  "duration": 72779,
  "status": "passed"
});
formatter.uri("02_BackBround_test.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Background"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User has to perform this before every scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Also do this before every step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef02_Background.user_has_to_perform_this_before_every_scenario()"
});
formatter.result({
  "duration": 109169,
  "status": "passed"
});
formatter.match({
  "location": "StepDef02_Background.also_do_this_before_every_step()"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Background verification test 1",
  "description": "",
  "id": "title-of-your-feature;background-verification-test-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Scenario 1 in backgraound feature",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef02_Background.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 73712,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User has to perform this before every scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Also do this before every step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef02_Background.user_has_to_perform_this_before_every_scenario()"
});
formatter.result({
  "duration": 88174,
  "status": "passed"
});
formatter.match({
  "location": "StepDef02_Background.also_do_this_before_every_step()"
});
formatter.result({
  "duration": 69980,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Background verification test 2",
  "description": "",
  "id": "title-of-your-feature;background-verification-test-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Scenario 2 in backgraound feature",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef02_Background.i_want_to_write_2_step_with_precondition()"
});
formatter.result({
  "duration": 82577,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User has to perform this before every scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Also do this before every step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef02_Background.user_has_to_perform_this_before_every_scenario()"
});
formatter.result({
  "duration": 546776,
  "status": "passed"
});
formatter.match({
  "location": "StepDef02_Background.also_do_this_before_every_step()"
});
formatter.result({
  "duration": 81643,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Background verification test 3",
  "description": "",
  "id": "title-of-your-feature;background-verification-test-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Scenario 3 in backgraound feature",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef02_Background.i_want_to_write_3_step_with_precondition()"
});
formatter.result({
  "duration": 81177,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User has to perform this before every scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Also do this before every step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef02_Background.user_has_to_perform_this_before_every_scenario()"
});
formatter.result({
  "duration": 110101,
  "status": "passed"
});
formatter.match({
  "location": "StepDef02_Background.also_do_this_before_every_step()"
});
formatter.result({
  "duration": 151623,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Background verification test 4",
  "description": "",
  "id": "title-of-your-feature;background-verification-test-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Scenario 4 in backgraound feature",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef02_Background.i_want_to_write_4_step_with_precondition()"
});
formatter.result({
  "duration": 124098,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User has to perform this before every scenario",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Also do this before every step",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef02_Background.user_has_to_perform_this_before_every_scenario()"
});
formatter.result({
  "duration": 102170,
  "status": "passed"
});
formatter.match({
  "location": "StepDef02_Background.also_do_this_before_every_step()"
});
formatter.result({
  "duration": 75579,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Background verification test 5",
  "description": "",
  "id": "title-of-your-feature;background-verification-test-5",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Scenario 5 in backgraound feature",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef02_Background.i_want_to_write_5_step_with_precondition()"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.uri("03_ScenarioOutline_test.feature");
formatter.feature({
  "line": 1,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \"\u003cstatus\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 10,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 11,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 12,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;3"
    },
    {
      "cells": [
        "name3",
        "11",
        "Fail"
      ],
      "line": 13,
      "id": "title-of-your-feature;title-of-your-scenario-outline;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check for the 5 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \"success\" in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 29
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_want_to_write_a_step_with_name(String)"
});
formatter.result({
  "duration": 2623779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 1368807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 14
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_verify_the_success_in_step(String)"
});
formatter.result({
  "duration": 261258,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with \"name2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check for the 7 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \"Fail\" in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name2",
      "offset": 29
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_want_to_write_a_step_with_name(String)"
});
formatter.result({
  "duration": 293449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 16
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 177749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 14
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_verify_the_success_in_step(String)"
});
formatter.result({
  "duration": 110568,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Title of your scenario outline",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I want to write a step with \"name3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I check for the 11 in step",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify the \"Fail\" in step",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "name3",
      "offset": 29
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_want_to_write_a_step_with_name(String)"
});
formatter.result({
  "duration": 117099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_check_for_the_in_step(int)"
});
formatter.result({
  "duration": 142293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fail",
      "offset": 14
    }
  ],
  "location": "StepDef03_ScenarioOutline.i_verify_the_success_in_step(String)"
});
formatter.result({
  "duration": 145092,
  "status": "passed"
});
formatter.uri("04_Basic_Star_test.feature");
formatter.feature({
  "line": 2,
  "name": "Feature to test * for replacing Gherkin keywords",
  "description": "I want to use this template for my feature file",
  "id": "feature-to-test-*-for-replacing-gherkin-keywords",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Star usage test scenario",
  "description": "",
  "id": "feature-to-test-*-for-replacing-gherkin-keywords;star-usage-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to write a step with precondition",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "some other precondition",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "I complete action",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "some other action",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "yet another action",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "I validate the outcomes",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "check more outcomes",
  "keyword": "* "
});
formatter.match({
  "location": "StepDef01_Basic.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 104969,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.some_other_precondition()"
});
formatter.result({
  "duration": 144625,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.i_complete_action()"
});
formatter.result({
  "duration": 94706,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.some_other_action()"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.yet_another_action()"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 135761,
  "status": "passed"
});
formatter.match({
  "location": "StepDef01_Basic.check_more_outcomes()"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.uri("05_DataTable_test.feature");
formatter.feature({
  "line": 1,
  "name": "Data Table learning feature",
  "description": "",
  "id": "data-table-learning-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "The sum of a list of numbers should be calculated",
  "description": "",
  "id": "data-table-learning-feature;the-sum-of-a-list-of-numbers-should-be-calculated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a list of numbers",
  "rows": [
    {
      "cells": [
        "17"
      ],
      "line": 5
    },
    {
      "cells": [
        "42"
      ],
      "line": 6
    },
    {
      "cells": [
        "4711"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I summarize them",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "should I get 4770",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef05_DataTable.a_list_of_numbers(DataTable)"
});
formatter.result({
  "duration": 1685116,
  "status": "passed"
});
formatter.match({
  "location": "StepDef05_DataTable.i_summarize_them()"
});
formatter.result({
  "duration": 184747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4770",
      "offset": 13
    }
  ],
  "location": "StepDef05_DataTable.should_I_get(int)"
});
formatter.result({
  "duration": 1776556,
  "status": "passed"
});
formatter.uri("06_Regex_test.feature");
formatter.feature({
  "line": 2,
  "name": "RegEx Features",
  "description": "In order to learn Regex features\nAs a user\nI want to verify how regex are written in feature files",
  "id": "regex-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regex"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Regex features in various types",
  "description": "",
  "id": "regex-features;regex-features-in-various-types",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I only have 1000 rupees in my account with \"HDFC\" bank",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have 2000 rupees in my account with \"X\" bank",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I withdraw 600 rupees",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I have a balance of 400 rupees",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I have account in \"CITY, ICICI, HDFC\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I close \"ICICI\" account",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I have left with \"CITY, HDFC\" account",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 12
    },
    {
      "val": "HDFC",
      "offset": 44
    }
  ],
  "location": "StepDef06_RegEx.i_have_rupees_in_my_account_with_bank(int,String)"
});
formatter.result({
  "duration": 505255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 7
    },
    {
      "val": "X",
      "offset": 39
    }
  ],
  "location": "StepDef07_AmbigousMethods.i_have_rupees_in_my_account_with_bank(int,String)"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.And I have 2000 rupees in my account with \"X\" bank(06_Regex_test.feature:9) matches more than one step definition:\n  ^I have (\\d+) rupees in my account with \"([^\"]*)\" bank$ in StepDef07_AmbigousMethods.i_have_rupees_in_my_account_with_bank(int,String)\n  ^I have 2000 rupees in my account with \"([^\"]*)\" bank$ in StepDef07_AmbigousMethods.rupees_in_my_account_with_bank(int,String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:265)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:344)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:269)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:240)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:184)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 11
    }
  ],
  "location": "StepDef06_RegEx.i_withdraw_rupees(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 20
    }
  ],
  "location": "StepDef06_RegEx.i_have_a_balance_of_rupees(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CITY, ICICI, HDFC",
      "offset": 19
    }
  ],
  "location": "StepDef06_RegEx.i_have_account_in(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ICICI",
      "offset": 9
    }
  ],
  "location": "StepDef06_RegEx.i_close_account(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CITY, HDFC",
      "offset": 18
    }
  ],
  "location": "StepDef06_RegEx.i_have_left_with_account(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("07_AmbigousMethod_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Ambiguous feature exploration in cucumber",
  "description": "In order to learn cucumber steps definitions\nAs a user\nI want to verify ambigugous keyword exception",
  "id": "ambiguous-feature-exploration-in-cucumber",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Ambiguous keyword scenario",
  "description": "",
  "id": "ambiguous-feature-exploration-in-cucumber;ambiguous-keyword-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have 1000 rupees in my account with \"HDFC\" bank",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have 2000 rupees in my account with \"X\" bank",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 7
    },
    {
      "val": "HDFC",
      "offset": 39
    }
  ],
  "location": "StepDef07_AmbigousMethods.i_have_rupees_in_my_account_with_bank(int,String)"
});
formatter.result({
  "duration": 841625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 7
    },
    {
      "val": "X",
      "offset": 39
    }
  ],
  "location": "StepDef07_AmbigousMethods.i_have_rupees_in_my_account_with_bank(int,String)"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When I have 2000 rupees in my account with \"X\" bank(07_AmbigousMethod_Test.feature:8) matches more than one step definition:\n  ^I have (\\d+) rupees in my account with \"([^\"]*)\" bank$ in StepDef07_AmbigousMethods.i_have_rupees_in_my_account_with_bank(int,String)\n  ^I have 2000 rupees in my account with \"([^\"]*)\" bank$ in StepDef07_AmbigousMethods.rupees_in_my_account_with_bank(int,String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:265)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:344)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:269)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:240)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:184)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:286)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:240)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.uri("08_String_to_Date_conversion_test.feature");
formatter.feature({
  "line": 2,
  "name": "String to Date",
  "description": "In order to test String conversion\nAs a user\nI want to verify string to date with examples",
  "id": "string-to-date",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@date"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Passing string as date date",
  "description": "",
  "id": "string-to-date;passing-string-as-date-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "date of project release is \"25-11-2016\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "25-11-2016",
      "offset": 28
    }
  ],
  "location": "StepDef08_DateConversion.date_of_project_release_is(Date)"
});
formatter.result({
  "duration": 5328269,
  "status": "passed"
});
formatter.uri("09_capture_non_capture_group.feature");
formatter.feature({
  "line": 2,
  "name": "Capture and Non Capture Group",
  "description": "In order to test Capture and Non Capture Group\nAs a user\nI want to verify these with examples",
  "id": "capture-and-non-capture-group",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@capture"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Capture Group",
  "description": "",
  "id": "capture-and-non-capture-group;capture-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on empty given statement",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I find salary in my account",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I donot find salary in my account",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef09_CaptureGroup.i_am_on_empty_given_statement()"
});
formatter.result({
  "duration": 4441856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "find",
      "offset": 2
    }
  ],
  "location": "StepDef09_CaptureGroup.i_find_salary_in_my_account(String)"
});
formatter.result({
  "duration": 205741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "donot find",
      "offset": 2
    }
  ],
  "location": "StepDef09_CaptureGroup.i_find_salary_in_my_account(String)"
});
formatter.result({
  "duration": 89108,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Non Capture Group",
  "description": "",
  "id": "capture-and-non-capture-group;non-capture-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have some money in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User has some money in my account",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "He has some money in my account",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef09_CaptureGroup.i_have_some_money_in_my_account()"
});
formatter.result({
  "duration": 134828,
  "status": "passed"
});
formatter.match({
  "location": "StepDef09_CaptureGroup.i_have_some_money_in_my_account()"
});
formatter.result({
  "duration": 56450,
  "status": "passed"
});
formatter.match({
  "location": "StepDef09_CaptureGroup.i_have_some_money_in_my_account()"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.uri("11_Doc_String_test.feature");
formatter.feature({
  "line": 2,
  "name": "Doc String",
  "description": "In order to test Doc String\nAs a user\nI want to verify doc string with examples",
  "id": "doc-string",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@docstring"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Doc String",
  "description": "",
  "id": "doc-string;doc-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "one letter \"O\" is missing from following alphabets",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 9,
    "value": "A B C D E F\nG H I J K L\nM N P Q R \nS T U V W X\nY Z"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "O",
      "offset": 12
    }
  ],
  "location": "StepDef11_DocString.one_letter_is_missing_from_following_alphabets(String,String)"
});
formatter.result({
  "duration": 293916,
  "status": "passed"
});
formatter.uri("12_tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Tags",
  "description": "In order to test tags in cucumber\nAs a user\nI want to verify these with examples",
  "id": "tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tags"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "Two",
  "description": "",
  "id": "tags;two",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@two"
    },
    {
      "line": 11,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am running scenario two",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef12_Tagging.i_am_running_scenario_two()"
});
formatter.result({
  "duration": 200609,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "work in progress",
  "description": "",
  "id": "tags;work-in-progress",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am running scenario wip",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef12_Tagging.i_am_running_scenario_wip()"
});
formatter.result({
  "duration": 85376,
  "status": "passed"
});
formatter.uri("13_hooks.feature");
formatter.feature({
  "line": 2,
  "name": "Hooks",
  "description": "In order to test tags in cucumber\nAs a user\nI want to verify these with examples",
  "id": "hooks",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@hooks"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "H1",
  "description": "",
  "id": "hooks;h1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@h1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am testing hook one",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef13_Hooks.i_am_testing_hook_one()"
});
formatter.result({
  "duration": 165619,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "H2",
  "description": "",
  "id": "hooks;h2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@h2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am testing hook two",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef13_Hooks.i_am_testing_hook_two()"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
});