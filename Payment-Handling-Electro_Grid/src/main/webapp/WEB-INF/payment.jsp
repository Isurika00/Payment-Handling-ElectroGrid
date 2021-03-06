<%@page import="model.pay"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Details</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/payment.js"></script>

</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-8">

				<h1 class="m-3">Payments Details</h1>

				<form id="formPayments" name="formPayments" method="post"
					action="payment.jsp">

					<!-- Account Number -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Account
								Number: </span>
						</div>
						<input type="text" id="acntNumber" name="acntNumber">
					</div>

					<!-- Bill ID -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Bill ID: </span>
						</div>
						<input type="text" id="billID" name="billID">
					</div>

					<!-- Pay Amount -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Pay Amount: </span>
						</div>
						<input type="text" id="payAmount" name="payAmount">
					</div>


					<!-- Card Number -->
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">Card Number: </span>
						</div>
						<input type="text" id="cardNumber" name="cardNumber">
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



					<input type="button" id="btnSave" name="btnSave" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidPaymentSave" name="hidPaymentSave" value="">

				</form>

				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
			</div>
		</div>

		<br>

		<div id="divPaymentsGrid">
			<%
			pay cardObj = new pay();
			out.print(cardObj.displayPayments());
			%>
		</div>

	</div>

</body>
</html>