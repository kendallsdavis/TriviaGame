
$(document).ready(function() { 


        var number = 10;
        var intervalId;
        var correct = 0;
        var incorrect = 0;
        var guesses = ["", "", "", "", "", ""];
        var answers = ["Ostrich", "Hummingbird", "Smell", "A pod", "A pandemonium", "The unicorn"];
    
        $("#done").on("click", stop);    
        $("#start").on("click", run);

// Define functions for run, reset, stop, decrement, and guessing
        function run() {
          status = "started";
          clearInterval(intervalId);
          intervalId = setInterval(decrement, 1000);
          guessing();
          }

        function reset () {
            number = 5;
            correct = 0;
            incorrect = 0;
            guesses = ["", "", "", "", "", ""];
            run();
        }

        function stop() {
            clearInterval(intervalId);
            $("input[type=radio]").attr('disabled', true);
            // function compare() {
                for(var i = 0; i < 6; i++){
                    if(guesses[i] === answers[i]){
                    correct++
                    } else {
                        incorrect++
                    };
                        console.log(correct);
                        console.log(incorrect);
                        number = 10;
                    $("#questionbox").html("");
                    $("#questionbox").html("<h2>All Done!<br/></h2> < <h3>Correct Answers:</h3><br/>  " + correct + "<h3> Incorrect Answers: </h3> " + incorrect);
                };
            };
          

        function decrement() {    
          number--;
          $("#timer").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                console.log("Time Up!");
                status = "done"
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
                console.log(guesses);
                });
            };



        if(status === "started"){
            $(function(){
            $("#questions").click(function(){    
                guesses[0] = ($('input[name="eyes"]:radio:checked').val());
                guesses[1] = ($('input[name="backwards"]:radio:checked').val());
                guesses[2] = ($('input[name="dolphins"]:radio:checked').val());
                guesses[3] = ($('input[name="whales"]:radio:checked').val());
                guesses[4] = ($('input[name="parrots"]:radio:checked').val());
                guesses[5] = ($('input[name="scotland"]:radio:checked').val());
                console.log(guesses);
                });
            });
            };
        console.log(correct);
        console.log(incorrect);
    })