
//setting up global variables
let dateEl = $('#current-Date');
let CurrentHour = moment().hour();
const btn = $('.save-Btn');
const clearBtn = $('.clear-Btn');

//Sets todays Date
dateEl.text(moment().format("MMM Do YYYY"));
// populates the input area with saved locale data corresponding to the id of the element
function populatePlans(){
    $("#plan1").val(localStorage.getItem(9));
    $("#plan2").val(localStorage.getItem(10));
    $("#plan3").val(localStorage.getItem(11));
    $("#plan4").val(localStorage.getItem(12));
    $("#plan5").val(localStorage.getItem(13));
    $("#plan6").val(localStorage.getItem(14));
    $("#plan7").val(localStorage.getItem(15));
    $("#plan8").val(localStorage.getItem(16));
    $("#plan9").val(localStorage.getItem(17));
}
/// sets the correct background color according to the time
function colorBoxTime(){

    /// loops through each element with the class "plans"
    $(".plans").each(function(){
        //checks parent id of element - turns the id of parent element into a number
        var timeNum = parseInt($(this).parent().attr("id"));


        if(timeNum < CurrentHour){
            $(this).addClass("past");
            $(this).removeClass("currentTime");
            $(this).removeClass("future");
            
        }

        if(timeNum > CurrentHour){
            $(this).addClass("future");
            $(this).removeClass("currentTime");
            $(this).removeClass("past");
            
        }


        if(timeNum === CurrentHour){
            $(this).addClass("currentTime");  
            $(this).removeClass("past");
            $(this).removeClass("future");
            
        }
    })


}


/// Main function for applicaiton
///runs function when  document loads
$(document).ready(function(){


    
//saves value in corresponding input area and local storage

    btn.click(function(){
        var plansText = $(this).siblings().eq(1).val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, plansText);
    
    })

    // clears value from local storage
    clearBtn.click(function(){
        $(this).siblings().eq(1).val(" ");
        var plansText =  " ";
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plansText);

    })
    
    populatePlans();
    colorBoxTime();

})





