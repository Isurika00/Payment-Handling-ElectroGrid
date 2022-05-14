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
    var status = validateCardForm(); 
    if (status != true) 
    { 
        $("#alertError").text(status); 
        $("#alertError").show(); 
        return; 
    } 

    // if hidCardSave value is null set as POST else set as PUT
    var type = ($("#hidCardSave").val() == "") ? "POST" : "PUT";

    // ajax communication
    $.ajax({
        url: "PayAPI",
        type: type,
        data: $("#formCard").serialize(),
        dataType: "text",
        complete: function(response, status) {
            onCardSaveComplete(response.responseText, status);
        }
    });
});

// after completing save request
function onCardSaveComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully saved");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divCardGrid").html(resultSet.data);

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
    $("#hidCardSave").val("");
    $("#formCard")[0].reset();
}

// UPDATE
//to identify the update button we didn't use an id we used a class
$(document).on("click", ".btnUpdate", function(event) 
{ 
    //get item id from the data-itemid attribute in update button
    $("#hidCardSave").val($(this).data('cardNumber')); 
    //get data from <td> element
    $("#acntNumber").val($(this).closest("tr").find('td:eq(0)').text()); 
    $("#expiry").val($(this).closest("tr").find('td:eq(1)').text()); 
    $("#CVC").val($(this).closest("tr").find('td:eq(2)').text()); 
    
}); 

// DELETE
$(document).on("click",".btnRemove", function(event) {
    // ajax communication
    $.ajax({
        url: "PayAPI",
        type: "DELETE",
        data: "cardNumber=" + $(this).data("cardNumber"),
        dataType: "text",
        complete: function(response, status) {
            onCardDeleteComplete(response.responseText, status);
        }
    });
});

// after completing delete request
function onCardDeleteComplete(response, status) {

    if (status == "success") { //if the response status is success
        var resultSet = JSON.parse(response);

        if (resultSet.status.trim() === "success") { //if the json status is success
            //display success alert
            $("#alertSuccess").text("Successfully deleted");
            $("#alertSuccess").show();
    
            //load data in json to html
            $("#divCardGrid").html(resultSet.data);

        } else if (resultSet.status.trim() === "error") { //if the json status is error
            //display error alert
            $("#alertError").text(resultSet.data);
            $("#alertError").show();
        }
    } else if (status == "error") { 
        //if the response status is error
        $("#alertError").text("Error while deleting");
        $("#alertError").show();
    } else { 
        //if an unknown error occurred
        $("#alertError").text("Unknown error occurred while deleting");
        $("#alertError").show();
    } 
}


// VALIDATION
function validateCardForm() { 
    // card number
    if ($("#cardNumber").val().trim() == "") 
    { 
        return "Insert card number."; 
    } 
    
    // account number 
    if ($("#acntNumber").val().trim() == "") 
    { 
        return "Insert account number."; 
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


 