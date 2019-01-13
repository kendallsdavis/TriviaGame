
$(document).ready(function() { 


        var number = 60;
        var intervalId;
        var correct = 0;
        var incorrect = 0;
        var guesses = ["", "", "", "", "", ""];
        var answers = ["Ostrich", "Hummingbird", "Smell", "A pod", "A pandemonium", "The unicorn"];

// When the start button is clicked, the run function will execute.
// The setInterval function will kick off the decrement function, and the timer count down and the guessing function will be executed.
// The guessing function collects the user radio button selections, and pushes them into an array

// Per the decrement function, once the countdown reaches 0 the stop function will execute. The stop function clears the interval countdown
// disables the radio buttons, and performs a comparison of the array of guesses vs the array of answers. It then displays the count of
// correct and incorrect guesses

// If the "Done" button is pressed anytime during the countdown, the stop function executes the above mentioned steps.

        $("#done").on("click", stop);    
        $("#start").on("click", run);

// Define functions for run, stop, decrement, and guessing
        function run() {
          status = "started";
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
          guessing();
          }

        function stop() {
            clearInterval(intervalId);
            $("input[type=radio]").attr('disabled', true);

                for(var i = 0; i < 6; i++){
                    if(guesses[i] === answers[i]){
                    correct++
                    } else {
                        incorrect++
                    };
                    $("#questions").html("<h2>All Done!<br/><br/></h2>  <h4>Correct Answers:</h4>  " + correct + "<h4><br/> Incorrect Answers: <br/></h4> " + incorrect + "<h4><br/>Refresh to Try Again!<br/><br/></h4>" );
                };
            };
          

        function decrement() {    
          number--;
          $("#timer").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
          }
        }

        function guessing(){
            $("#questions").click(function(){    
                guesses[0] = ($('input[name="eyes"]:radio:checked').val());
                guesses[1] = ($('input[name="backwards"]:radio:checked').val());
                guesses[2] = ($('input[name="dolphins"]:radio:checked').val());
                guesses[3] = ($('input[name="whales"]:radio:checked').val());
                guesses[4] = ($('input[name="parrots"]:radio:checked').val());
                guesses[5] = ($('input[name="scotland"]:radio:checked').val());
                });
            };

    })