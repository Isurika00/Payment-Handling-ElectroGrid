$(document).ready(function(){
    $("#alertSuccess").hide();
    $("#alertError").hide();
});

// SAVE Payemnt============================================
$(document).on("click", "#btnSave", function(event) {
    // Clear status messages
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide();

    // Form validation
    var status = validatePaymentForm();

    // If not valid
    if (status != true) {
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return;
    }
    
    // If valid
    // Generate the card and append
    var payments = getPaymentCard(  $("#acntNumber").val().trim(), 
    								$("#billID").val().trim(),
    								$("#payAmount").val().trim(),
    								$("#cardNumber").val().trim(),
    								$("#expiry").val().trim()
    								$("#CVC").val().trim()
                                   
                                ); 

    $("#colPayments").append(payments);

    //success alert
    $("#alertSuccess").text("Saved successfully.");
    $("#alertSuccess").show(); 

    //clearing the form 
    $("#formPayments")[0].reset();
    
});

// REMOVE ============================================
$(document).on("click",".remove",function(event){
    //identifying the card containing the remove button and remove it
    $(this).closest(".payments").remove();

    //show alert
    $("#alertSuccess").text("Removed successfully");
    $("#alertSuccess").show();

})

// FORM VALIDATION ============================================
function validatePaymentForm() {

    //Account Number
    if ($("#acntNumber").val().trim() == "") {
        return "Insert Account Number";
    }
    
    //Bill ID
    if ($("#billID").val().trim() == "") {
        return "Insert Bill ID";
    }
       
    //Pay Amount
    if ($("#payAmount").val().trim() == "") {
        return "Insert Pay Amount";
    }
    
    //Card Number
    if ($("#cardNumber").val().trim() == "") {
        return "Insert Card Number";
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
function getPaymentCards(acntNumber,billID,payAmount,cardNumber) { 
    var payments = ""; 

  

    //Generate cards 
    
    payments += "<div class=\"payment card bg-light m-2\" style=\"max-width: 10rem;  float: left;\">"; 
    payments += "<div class=\"card-body\">"; 
    payments += title + " " + acntNumber + ","; 
    payments += "<br>"; 
    payments += title + " " + billID + ",";
    payments += "<br>"; 
    payments += title + " " + payAmount + ","; 
    payments += "<br>"; 
    payments += title + " " + cardNumber + ","; 
    payments += "</div>"; 
    payments += "<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">"; 
    payments += "</div>";
 
    return payments; 
} 

