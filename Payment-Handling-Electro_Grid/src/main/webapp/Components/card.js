$(document).ready(function(){
    $("#alertSuccess").hide();
    $("#alertError").hide();
});

// SAVE Card============================================
$(document).on("click", "#btnSave", function(event) {
    // Clear status messages
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide();

    // Form validation
    var status = validateCardForm();

    // If not valid
    if (status != true) {
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return;
    }
    
    // If valid
    // Generate the card and append
    var card = getUserCard(  $("#acntNumber").val().trim(), 
    								$("#billID").val().trim(),
    								$("#payAmount").val().trim(),
    								$("#cardNumber").val().trim(),
    								$("#expiry").val().trim()
    								$("#CVC").val().trim()
                                   
                                ); 

    $("#colCard").append(card);

    //success alert
    $("#alertSuccess").text("Saved successfully.");
    $("#alertSuccess").show(); 

    //clearing the form 
    $("#formCard")[0].reset();
    
});

// REMOVE ============================================
$(document).on("click",".remove",function(event){
    //identifying the card containing the remove button and remove it
    $(this).closest(".card").remove();

    //show alert
    $("#alertSuccess").text("Removed successfully");
    $("#alertSuccess").show();

})

// FORM VALIDATION ============================================
function validateCardForm() {
	
	//Card Number
    if ($("#cardNumber").val().trim() == "") {
        return "Insert Card Number";
    }
    

    //Account Number
    if ($("#acntNumber").val().trim() == "") {
        return "Insert Account Number";
    }
    

    //Expiry date
    if ($("#expiry").val().trim() == "") {
        return "Insert Expiry date";
    }
    
    //CVC
    if ($("#CVC").val().trim() == "") {
        return "Insert CVC";
    }


    return true
}

// DISPLAY CARD ============================================
function getUserCards(cardNumber,acntNumber,expiry,CVC) { 
    var card = ""; 

  

    //Generate cards 
    
    card += "<div class=\"payment card bg-light m-2\" style=\"max-width: 10rem;  float: left;\">"; 
    card += "<div class=\"card-body\">";
    card += title + " " + cardNumber + ","; 
    card += "<br>";  
    card += title + " " + acntNumber + ","; 
    card += "<br>"; 
    card += title + " " + expiry + ",";
    card += "<br>"; 
    card += title + " " + CVC + ","; 
    card += "</div>"; 
    card += "<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">"; 
    card += "</div>";
 
    return card; 
} 

