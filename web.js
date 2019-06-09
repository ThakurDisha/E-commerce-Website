

//New Tab Opener

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




//Show Cart

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}



//Add items to cart

(function() {
    var product = document.querySelectorAll('.cart-item');
    product.forEach(function(btn){
      btn.addEventListener('click',function(event){

        let productName = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        console.log(productName);

        let pprice = event.target.parentElement.previousElementSibling.textContent;
        var productPrice = pprice.slice(2);
        console.log(productPrice);


        var tbl = document.getElementById('cart-table');
      	var newRow = tbl.insertRow(1);
      	var productCell = newRow.insertCell(0);
        var priceCell = newRow.insertCell(1);
        let newProduct = document.createTextNode(productName);
        let newPrice = document.createTextNode(productPrice);
        productCell.appendChild(newProduct);
        priceCell.appendChild(newPrice);
        priceCell.className  = "cart-item-price";
        showTotals();
      });
    });
    function showTotals(){
      const totalPrice = [];
      const cartItems = document.querySelectorAll(".cart-item-price");
      cartItems.forEach(function(item){
        totalPrice.push(parseInt(item.textContent));
      });

      const TotalMoney = totalPrice.reduce(function(totalPrice, item){
        totalPrice += item;
        return totalPrice;
      }, 0);

      console.log(TotalMoney);
      document.getElementById("total").textContent = TotalMoney;
    }
  })();
