var countDownDate = new Date("Nov 30, 2023 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + " Days " + hours + " Hrs "
    + minutes + " Min " + seconds + " Sec ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 0);

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}



$(document).ready(function() {  
    $("#label9").toggle($("#input8").is(":checked"));  
    $("#input8").change(function() {   
    $("#label9").toggle($(this).is(":checked"));
    });
  });
  
  $(document).ready(function() {
    $("#label12").hide();
    $("#label13").hide();

    $("#gender").change(function() {
        if ($(this).val() == "MAN") {
            $("#label12").show();
            $("#label13").hide();
        } else {
            $("#label12").hide();
            $("#label13").hide();
        }
    });

    $("#done").change(function() {
        if ($(this).val() == "YES") {
            $("#label13").show();
        } else {
            $("#label13").hide();
        }
    });
});


