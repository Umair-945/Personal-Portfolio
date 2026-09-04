let close_btn = document.querySelector("#close");
let side = document.getElementById("sidebar");
let menu = document.getElementById("ham_burger");



side.style.transition = "0.6s"


menu.addEventListener("click", function () {
    if (window.innerWidth <= 425) {
        side.style.width = "70%";
    } else {
        sidebar.style.width = "40%";
    }

    close_btn.addEventListener("click", function () {
        side.style.width = "0%"
    })

});
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function () {
        side.style.width = "0";
    });
});
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('#sidebar').classList.remove('active');
    });
});

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        formNote.textContent = "Thanks! Please message me on WhatsApp for a faster reply.";

        // Form clear
        contactForm.reset();
    });
}
