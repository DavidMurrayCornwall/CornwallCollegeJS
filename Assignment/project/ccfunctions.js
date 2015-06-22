//ccfunctions.js

/*
 * Generate HTML to display the questions.
 * Install the HTML into the <div> element
 * to hold the questions.
 */
function showQuestions() {

 var testHtml = "<form>"
 testHtml += "<table width='50%'>"
 for ( var q=0; q < questions.length; q++ ) {
  testHtml += "<tr>"
  testHtml += "<td width='5%'>" + (q+1) + "</td>"
  testHtml += "<td width='95%'>" + questions[q].text + "</td>"
  for ( a = 0; a < questions[q].answers.length; a++ ) {
   var answerName = "ans" + q;
   testHtml += "<tr>"
   testHtml += "<td>&nbsp;</td>"
   testHtml += "<td><input type='radio' name=" 
                + answerName + " value='" + a + "' />"
                + questions[q].answers[a]
                + "</td>"
   testHtml += "</tr>"
  }
  testHtml += "<tr>"
  testHtml += "<td>&nbsp;</td>"
  testHtml += "</tr>"
 }
 testHtml += "</table>"
 testHtml += "<input type='button' value='Submit Test' onclick='markTest(questions)' />"
 testHtml += "</form>"

 var qDiv = document.getElementById("questions")
 qDiv.innerHTML = testHtml

}


/*
 * Mark the test for the user, show the results on the page.
 */
function markTest() {

if (document.getElementsByName("NameOfQuizee")[0].value==="") {
    alert("name is missing! Please enter name");
    return;
}
 var totalCorrect = 0;

 // Scan through all questions
 for ( q = 0; q < questions.length; q++ ) {

 // The name used for the radio button group 
 // is "ans<num>" e.g. ans1
  var answerName = "ans" + q;


  // Retrieve the radio button group
  var ans = document.getElementsByName(answerName);

  /*
   * Find which radio button (if any) was checked.
   * If it is the one corresponding to the 
   * "correct" index for the question,    
   * increment the "totalCorrect" counter
   */

    
   // *** TODO ***
   for (var i=0;i<ans.length;i++) {
       if (ans[i].checked) {
           if (i===questions[q].correct) {
               totalCorrect += 1;
           }
       }
   }
    
 }

 showResults(totalCorrect, questions.length)

}


/*
 * Show the results in the appropriate place on the page.
 */
function showResults( nCorrect, nQuestions) {

var resultsHtml = "You got " + nCorrect + " correct out of " + nQuestions + " questions.";

 var rDiv = document.getElementById("results");
 rDiv.innerHTML = resultsHtml;
   
}
