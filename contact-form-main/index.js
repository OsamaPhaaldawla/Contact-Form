let myform = document.forms[0];
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let genQuery = document.querySelector("#gen-query");
let suppQuery = document.querySelector("#supp-query");
let message = document.querySelector("#message");
let consent = document.querySelector("#consent");
let spans = document.querySelectorAll("span");
let popup = document.querySelector(".pop-up");

consent.addEventListener("click", () => {
    document.querySelector(".consent-box").classList.toggle("checked");
});

genQuery.addEventListener("click", () => {
    document.querySelector(".query:first-of-type").classList.add("checked");
    document.querySelector(".query:last-of-type").classList.remove("checked");
});
suppQuery.addEventListener("click", () => {
    document.querySelector(".query:last-of-type").classList.add("checked");
    document.querySelector(".query:first-of-type").classList.remove("checked");
});

let clear = true;
myform.addEventListener("submit", (e) => {
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.remove("show");
    }

    if (firstName.value == "") {
        e.preventDefault();
        spans[0].classList.add("show");
        clear = false;
    }
    if (lastName.value == "") {
        e.preventDefault();
        spans[1].classList.add("show");
        clear = false;
    }
    if (email.value == "" || emailValidation() == "Not valid") {
        e.preventDefault();
        spans[2].classList.add("show");
        clear = false;
    }
    if (genQuery.checked == false && suppQuery.checked == false) {
        e.preventDefault();
        spans[3].classList.add("show");
        clear = false;
    }
    if (message.value == "") {
        e.preventDefault();
        spans[4].classList.add("show");
        clear = false;
    }
    if (consent.checked == false) {
        e.preventDefault();
        spans[5].classList.add("show");
        clear = false;
    }
    if (clear) {
        e.preventDefault();
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
            myform.submit();
        }, 3000);
    }
});

function emailValidation() {
    if (email.value.match(/^\d/g)) {
        return "Not valid";
    } else if (email.value.match(/\w+@\w+\.com/g) == null) {
        return "Not valid";
    } else {
        return "Valid";
    }
}