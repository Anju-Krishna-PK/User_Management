function open_pop1() {
    var card_1 = document.getElementById("POPUP_1");
    var card_2 = document.getElementById("POPUP_2");
    var card_3 = document.getElementById("POPUP_3");
    var card_4 = document.getElementById("POPUP_4");
    if (card_1.style.display === "none") {
        card_1.style.display = "block";
        card_2.style.display = "none";
        card_3.style.display = "none";
        card_4.style.display = "none";
    }
    else {
        card_1.style.display = "none";
    }
}
function open_pop2() {
    var card_1 = document.getElementById("POPUP_1");
    var card_2 = document.getElementById("POPUP_2");
    var card_3 = document.getElementById("POPUP_3");
    var card_4 = document.getElementById("POPUP_4");
    if (card_2.style.display === "none") {
        card_2.style.display = "block";
        card_1.style.display = "none";
        
        card_3.style.display = "none";
        card_4.style.display = "none";
    }
    else {
        card_2.style.display = "none";
    }
}
function open_pop3() {
    var card_1 = document.getElementById("POPUP_1");
    var card_2 = document.getElementById("POPUP_2");
    var card_3 = document.getElementById("POPUP_3");
    var card_4 = document.getElementById("POPUP_4");
    if (card_3.style.display === "none") {
        card_1.style.display = "none";
        card_2.style.display = "none";
        card_3.style.display = "block";
        card_4.style.display = "none";
    }
    else {
        card_3.style.display = "none";
    }
}
function open_pop4() {
    var card_1 = document.getElementById("POPUP_1");
    var card_2 = document.getElementById("POPUP_2");
    var card_3 = document.getElementById("POPUP_3");
    var card_4 = document.getElementById("POPUP_4");
    if (card_4.style.display === "none") {
        card_1.style.display = "none";
        card_2.style.display = "none";
        card_3.style.display = "none";
        card_4.style.display = "block";
    }
    else {
        card_4.style.display = "none";
    }
}
