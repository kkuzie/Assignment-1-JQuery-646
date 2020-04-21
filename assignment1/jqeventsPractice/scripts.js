$(document).ready(function(){

    //STEP 1 DONE
    // Create a button on a web page. Use the .click() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

$("#btnStep1").click(function(){
    alert("you clicked me");
});

//STEP 2
// Create a button on a web page. Attach the click event using the .bind() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

    // $('#btnStep2').on('click', function(){
    //     //We must preserve the button's context
    //     bluezy();
    //     function bluezy(){
    //       //We're saying, "I want to do fun things with <<that>> button object, 
    //      //not <<this>> window object you keep giving me
    //       $(this).css("background-color", "blue"); 
    //     }.bind(this);   
    //  });  

    $("#btnStep2").bind("click",function(){ 
        alert("You clicked Step 2");  
    }); 

//STEP 3 DONE
// Create a button on a web page. Attach the click event using the .on() method to display an alert message to the user indicating that the button has been clicked when the button is actually clicked. 

 $("#btnStep3").on('click', function(){
    alert('Step 3 button has been clicked');    
});

//STEP 4 DONE
// Create two buttons on a web page. Attach the click event to both buttons using a single handler using the .on() method. Again, an alert message should be displayed to the user indicating that a button has been clicked when either of the buttons are actually clicked. 
$(".btnStep4").on('click', function(){
    alert('Step 4 button has been clicked');    
});

//STEP 5 DONE
// Create a div on a web page. Use jQuery to set the div element to 400px wide and 400px high. Attach the click, mouseenter, and mouseleave events using the .on() method. Display an alert message to the user indicating that the div was either clicked on, the mouse entered it, or the mouse left it. 

$("#divStep5").css({height:"400px", width:"400px"}).on('mouseenter', function() {
      alert("You have entered the square");
    }).on('mouseleave', function() {
        alert("You have left the square");
    }).on('click', function () {
      alert("You clicked the square");
    });

//STEP 6 DONE
// Rewrite the code from number 5. This time add a span tag to the web page. Display three different messages within the span tag when the user enters the div, leaves the div, or clicks on the div.

$('#divStep6').css({width: "400px", height: '400px'});

    $('#divStep6').on({
            mouseenter: function () {
                $('#divin').replaceWith('You have entered the square <br>');
            },
            mouseleave: function () {
                $('#divout').replaceWith('You have left the square <br>');
            },
            click: function () {
                $('#divclick').replaceWith('You clicked the square');
            }
    });

//STEP 7
// Create a link within the web page and set it’s href attribute to browse to modulemedia.com. 
// When the user clicks the link, first, prevent it from redirecting to that web site. 
// Second, programmatically style the link so that its color changes to red. 
// Third, display the name of the node that triggered the event within an alert box.

$('#btnStep7').click(function (e) {
    e.preventDefault();
    $('#btnStep7').css({color:  "red"});
    alert(e.target.nodeName + " is the node triggered");
});

//STEP 8 DONE
// Create a div tag within the web page. 
// As the user resizes the browser, display the width and height of the browser window within the div tag.

$(window).resize(function () {
    $('#w span').text($(window).width() + "px");
    $('#h span').text($(window).height() + "px");
});

//*****TO DO WHEN HAVE TIME
//do another version where JS adds the span tag with the w/h

//STEP 9
// Create a text field using the <input> tag. 
// When the input has focus, set the background to a light gray color. 
// When the input does not have focus, reset the background back to a white color.

$("#step9").focus(function () { //***WHY DOESNT ARROW FUNC WORK HERE */
    $('#step9').css({backgroundColor: "lightgrey"});
});
$("#step9").focusout(function () {
    $(this).css({backgroundColor: "white"});//this refers to "#step9" line 93
});

//STEP 10
// Add a form tag within a web page complete with 2 input fields: one that collects name and a second that collects an email. 
// Add a submit button. 
// When the user submits the form, if any one of the two fields is left empty, display an alert box to the user indicating that the fields are required. 
// Give the field that the user left empty a red border. If both fields have values in them, set their borders to green.

$("#text10").focus(function(){
    $(this).css({border: "5px solid orange"}); 
});
$("#text10").focusout(function(){
    $(this).css({border: "none"}); 
});

$("#email10").focus(function(){
    $(this).css({border: "5px solid orange"}); 
});
$("#email10").focusout(function(){
    $(this).css({border: "none"}); 
});


// $('#btnStep10').click(function (e) {
//     e.preventDefault();
//         if ($("input[name='text']") == ''){
//             alert(" is the node triggered");
//             $("input[name='text']").css({border: '5px solid red'});
//         } else {
//             $("input[name='text']").css({border: "5px solid limegreen"});
//         }
//         if ($("input[name='email']") == ''){
//             alert(" empty");
//             $("input[name='email']").css({border: '5px solid red'});
//         }else {
//             $("input[name='email']").css({border: "5px solid limegreen"});
//         }
// });
// if ($('#addInput input[name="text"]') == ''){
// $('input[name="text"]').css({border: '5px solid red'});
// }

// $('#btnStep10').click(function () {
//     // e.preventDefault();
//         if($('#addInput input[name="text"]') == ''){
//             // console.log($('#addInput input[name="text"'));
//             // alert(" empty input");
//             // $('input[name="text"]').css({border: '5px solid red'});
//         }
//     });
    
$('#btnStep10').click(function(e) {
    e.preventDefault();
    console.log("button clicked");
    let text = $('input#text10').val();
    let email = $('input#email10').val()
    console.log(text);
    console.log(email);
    if (text == ""){
        alert('complete text field');
        $('input#text10').css({border: "5px solid crimson"});
    } else {
        $('input#text10').css({border: "5px solid limegreen"});
    }
    if (email ==""){
        alert('complete email field');
        $('input#email10').css({border: "5px solid crimson"});
    } else {
        $('input#email10').css({border: "5px solid limegreen"});
    }
    $('#addInput')[0].reset()
    })



});//closing for line 1 document ready