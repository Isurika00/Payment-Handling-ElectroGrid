$(document).ready(function() {
    if ($('#alertSuccess').text().trim() == "") {
        $('#alertSuccess').hide();
    }

    $('#alertError').hide();
})

// SAVE
$(document).on("click","#btnSave", function(event) {
    // Clear alerts
    $("#alertSuccess").text(""); 
    $("#alertSuccess").hide(); 
    $("#alertError").text(""); 
    $("#alertError").hide();

    // Form validation
    var status = validatePaymentForm(); 
    if (status != true) 
    { 
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return; 
    } 

    // if hidPaymentSave value is null set as POST else set as PUT
    var type = ($("#hidPaymentSave").val() == "") ? "POST" : "PUT";

    // ajax communication
    $.ajax({
        url: "PayAPI",
        type: type,
        data: $("#formPayments").serialize(),
        dataType: "text",
        complete: function(response, status) {
            onPaymentSaveComplete(response.responseText, status);
        }
    });
});

// after completing save request
function onPaymentSaveComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully saved");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divPaymentsGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while saving");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while saving");
        $("#alertError").show();
    } 

    //resetting the form
    $("#hidPaymentSave").val("");
    $("#formPayments")[0].reset();
}



// VALIDATION
function validateCardForm() { 
	
	// account number 
    if ($("#acntNumber").val().trim() == "") 
    { 
        return "Insert account number."; 
    } 
    
    // bill id
    if ($("#billID").val().trim() == "") 
    { 
        return "Insert bill ID."; 
    } 
    
    // payamount
    if ($("#payAmount").val().trim() == "") 
    { 
        return "Insert pay amount."; 
    } 
    
    
    //is numeric
     var tmpAmount = $("#payAmount").val().trim(); 
    if (!$.isNumeric(tmpAmount)) 
    { 
        return "Insert a numerical value for Pay Amount."; 
    } 
    
    // convert to decimal price 
    $("#payAmount").val(parseDouble(tmpAmount).toFixed(2)); 
    
    // card number
    if ($("#cardNumber").val().trim() == "") 
    { 
        return "Insert card number."; 
    } 
    
    
    // expiry
    if ($("#expiry").val().trim() == "") 
    { 
        return "Insert expiry date."; 
    } 
    
    // CVC
    if ($("#CVC").val().trim() == "") 
    { 
        return "Insert CVC."; 
    } 
    
    
    
    return true; 
} 
 