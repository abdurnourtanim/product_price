// products price calculator

let check = document.getElementById("check");

    check.addEventListener("click", function (){

        let price = Number(document.getElementById("price").value);
        let tax = Number(document.getElementById("tax").value);
        let resultBox = document.getElementById("resultBox");
        let result = (price / 100 * tax) + price;

        if (tax == "" ){
            resultBox.innerHTML = "Sorry!\nPlease enter your current tax."
        } else if (tax == 0 || tax >= 0) {
            resultBox.innerHTML = "Your current price: " + result +" .TK";
        } else {
            resultBox.innerHTML = "Your current price: " + result +" .TK";
        }

    });

let reset = document.getElementById("reset");

    reset.addEventListener("click", function (){

        let resultBox = document.getElementById("resultBox");
        let price = document.getElementById("price");
        let tax = document.getElementById("tax");
        price.value = "";
        tax.value = "";
        resultBox.innerHTML = "";

    })
