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

        contactForm.reset();
    });
}


/* ================= CONTACT FORM EMAIL ================= */


if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check fields
        if (name === "" || email === "" || message === "") {

            formNote.textContent = "Please fill all fields ❌";
            formNote.style.color = "red";

            return;
        }

        button.disabled = true;
        button.innerText = "Sending...";

        formNote.textContent = "";

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/umairarshad8653@gmail.com",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    body: JSON.stringify({

                        name: name,
                        email: email,
                        message: message,

                        _subject:
                            "New Message From Umair Arshad Portfolio",

                        _replyto: email,

                        _template: "table"

                    })
                }
            );

            const result = await response.json();

            console.log("FormSubmit Response:", result);

            if (response.ok) {

                formNote.textContent =
                    "Message Sent Successfully! ✅";

                formNote.style.color = "#00ff9f";

                contactForm.reset();

            } else {

                formNote.textContent =
                    "Message Send Nahi Hua ❌";

                formNote.style.color = "red";

                console.error(result);

            }

        } catch (error) {

            console.error("Contact Form Error:", error);

            formNote.textContent =
                "Something went wrong ❌";

            formNote.style.color = "red";

        } finally {

            button.disabled = false;
            button.innerText = "Send Message";

        }

    });

}