<%@page import="model.pay"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%
//Save---------------------------------
if (request.getParameter("cardNumber") != null) {
	pay cardObj = new pay();
	String stsMsg = "";
	
	//Insert--------------------------
	if (request.getParameter("hidCardSave") == "") {
		stsMsg = cardObj.createCard(request.getParameter("cardNumber"), request.getParameter("acntNumber"),
		request.getParameter("expiry"), request.getParameter("CVC"));
	} 
	
	else//Update----------------------
	{
		stsMsg = cardObj.updateCard(request.getParameter("hidCardSave"), 
		request.getParameter("acntNumber"), request.getParameter("expiry"), request.getParameter("CVC"));
	}
	session.setAttribute("statusMsg", stsMsg);
}
//Delete-----------------------------
if (request.getParameter("hidCardDelete") != null) {
	pay cardObj = new pay();
	String stsMsg = cardObj.deleteCard(request.getParameter("hidCardDelete"));
	session.setAttribute("statusMsg", stsMsg);
}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/card.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">

				<h1 class="m-3">Card Details</h1>

				<form id="formCard" name="formCard" method="post" action="card.jsp">

					<!-- Card Number -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Card Number: </span>
						</div>
						<input type="text" id="cardNumber" name="cardNumber">
					</div>

					<!-- Account Number -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Account
								Number: </span>
						</div>
						<input type="text" id="acntNumber" name="acntNumber">
					</div>

					<!-- Expiry Date-->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Expiry Date: </span>
						</div>
						<input type="text" id="expiry" name="expiry">
					</div>

					<!-- CVC -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">CVC: </span>
						</div>
						<input type="text" id="CVC" name="CVC">
					</div>


					<div id="alertSuccess" class="alert alert-success"></div>
					<div id="alertError" class="alert alert-danger"></div>
					<input type="button" id="btnSave" name="btnSave" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidCardSave" name="hidCardSave" value="">

				</form>
			</div>
		</div>

		<br>

		<div class="row">
			<div class="col-12" id="colCard"></div>
		</div>
	</div>

</body>
</html>