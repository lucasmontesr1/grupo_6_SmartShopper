var itemId;
var cartButton;
var deleteButton;

window.addEventListener("load", function () {
    var pathArray = window.location.href.split("/")
    itemId = pathArray[pathArray.length - 1]
    cartButton = document.getElementById("addItem");
    if (cartButton) {
        cartButton.addEventListener("click", function (event) {
            addItem(event);
        });
    }
    var eraseButtons = document.querySelectorAll('.erase-button');
    if (eraseButtons) {
        eraseButtons.forEach(function (e) {
            e.addEventListener('click', function (event) {
                eraseCookie(event);
            });
        });
    }
});

function addItem(event) {
    var cart = [];
    var item = {};
    var tempCart;
    var quantity = parseInt(document.getElementById('quantity').value)
    console.log(quantity);
    if (!quantity) {
        quantity = 1;
    }
    item.id = parseInt(itemId);
    item.quantity = quantity;
    tempCart = getCookie('cart');

    if (!tempCart) {
        cart.push(item)
    } else {
        tempCart = JSON.parse(tempCart);
        let i = tempCart.findIndex(e => e.id == item.id)
        if (i != -1) {
            tempCart[i].quantity += item.quantity;
        } else {
            tempCart.push(item)
        }
        cart = tempCart;
    }
    setCookie('cart', JSON.stringify(cart));
}

function removeShadow(event) {
    event.target.classList.remove('shadow')
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function eraseCookie(event) {
    let toBeErasedId = parseInt(event.target.value);
        console.log(toBeErasedId)

    let cart = JSON.parse(getCookie('cart'));
    console.log(cart)
    let cartIndexToBeDeteled = cart.findIndex(e => {
        return e.id == toBeErasedId;
    });
    console.log(cartIndexToBeDeteled)
    if (cartIndexToBeDeteled > -1) {
        cart.splice(cartIndexToBeDeteled, 1);
    }
    setCookie('cart', JSON.stringify(cart));
    window.location.href = '/carrito';
}