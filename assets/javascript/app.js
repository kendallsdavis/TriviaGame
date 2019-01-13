


var number = 10;

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

$("input[name='radioName']:checked").val()

