
$(document).ready(function() { 

var QuizQuestions = [{
    question: "Which bird has eyes that are larger than it's brain?",
    choices: ["Blue Bird", "Owl", "Ostrich", "Canary" ],
    validAnswer: 2
}, {
    question:"What is the only bird known to fly backwards?",
    choices: ["Hummingbird", "Swan", "Parakeet", "Finch"],
    validAnswer: 0    
}, {
    question:"Which of the 5 senses do dolphins not possess? ",
    choices: ["Sound", "Touch", "Smell", "Sight"],
    validAnswer: 2        
}, {
    question:"What is a group of whales called? ",
    choices: ["A lark", "A squad", "A corpus", "A pod"],
    validAnswer: 3       
}, {
    question:"What is the proper term for a group of parrots?",
    choices: ["A pandemonium", "A flight", "A parliament", "A swarm"],
    validAnswer: 0
}, {
    question:"What is the national animal of Scotland? ",
    choices: ["The gopher", "The cat", "The unicorn", "The bison"],
    validAnswer: 2   
}];

var number = 10;
var guesses = []

Interval = setInterval(decrement, 1000)

function decrement() {
    if(number > 1){
    //  Decrease number by one.
    number = number - 1;
    //  Show the number in the #timer tag.
    $("#timer").html("<h2>" + number + " seconds remaining" + "</h2>");
    } else { 
        number = "Time's Up!!";
        $("#timer").html(number);
    }
}


// var $Question1 = $('input[name="eyes"]');
//         // $Question1.change(function() {
//         //     var selected = $Question1.filter(':checked');
//         //     });
//             // Output the value of the checked radio
//             console.log($Question1.filter(':checked').val());

        



$(function(){
    $("#Q1").click(function(){      
       guess1 = ($('input[name="eyes"]:radio:checked').val());
       console.log(guess1);
   });
  });

  $(function(){
    $("#Q2").click(function(){      
       guess2 = ($('input[name="backwards"]:radio:checked').val());
       console.log(guess2);
   });
  });

  $(function(){
    $("#Q3").click(function(){      
       guess3 = ($('input[name="dolphins"]:radio:checked').val());
       console.log(guess3);
   });
  });

  $(function(){
    $("#Q4").click(function(){      
       guess4 = ($('input[name="whales"]:radio:checked').val());
       console.log(guess4);
   });
  });

  $(function(){
    $("#Q5").click(function(){      
       guess5 = ($('input[name="parrots"]:radio:checked').val());
       console.log(guess5);
   });
  });

  $(function(){
    $("#Q6").click(function(){      
       guess6 = ($('input[name="scotland"]:radio:checked').val());
       console.log(guess6);
   });
  });

        });
 