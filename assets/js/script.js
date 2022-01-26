// Card Validation
function orderval() {
  var card_number = "678901234567";
  var card_cvc = "123";
  if (
    document.getElementById("card_number").value == card_number &&
    document.getElementById("card_cvc").value == card_cvc
  ) {
    alert("Placed order successfully!");
    window.location.href = "index.html";
  } else alert("Invalid Card Number or CVC!");
}
