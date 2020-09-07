var cards;

window.addEventListener("load", function () {
    cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.addEventListener("mouseenter", function (event) {
            addShadowOnHover(event);
        }, false);
        card.addEventListener("mouseleave", function (event) {
            removeShadow(event);
        });
    });
});

function addShadowOnHover(event) {
    event.target.classList.add('shadow')

}

function removeShadow(event) {
    event.target.classList.remove('shadow')
}