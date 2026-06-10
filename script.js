document.addEventListener("DOMContentLoaded", () => {

    // Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const text = link.textContent.trim();

            switch (text) {
                case "Find Coaches":
                    document.querySelector("section").scrollIntoView({
                        behavior: "smooth"
                    });
                    break;

                case "Library":
                    alert("Training Library page coming soon!");
                    break;

                case "About":
                    alert("About page coming soon!");
                    break;

                case "Pricing":
                    alert("Pricing page coming soon!");
                    break;
            }
        });
    });

    // Join Buttons
    const athleteBtn = document.querySelector("button:nth-of-type(1)");
    const coachBtn = document.querySelector("button:nth-of-type(2)");

    if (athleteBtn) {
        athleteBtn.addEventListener("click", () => {
            alert("Athlete Registration Page");
            // window.location.href = "athlete-register.html";
        });
    }

    if (coachBtn) {
        coachBtn.addEventListener("click", () => {
            alert("Coach Registration Page");
            // window.location.href = "coach-register.html";
        });
    }

    // Book Coach Buttons
    document.querySelectorAll("button").forEach(btn => {
        if (btn.textContent.includes("Book Now")) {
            btn.addEventListener("click", () => {
                const coachName =
                    btn.closest(".p-stack-md").querySelector("h3").textContent;

                alert(`Booking session with ${coachName}`);
            });
        }
    });

    // Contact Form
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name =
                contactForm.querySelector('input[type="text"]').value;
            const email =
                contactForm.querySelector('input[type="email"]').value;
            const message =
                contactForm.querySelector("textarea").value;

            if (!name || !email || !message) {
                alert("Please fill all fields.");
                return;
            }

            alert("Message sent successfully!");

            console.log({
                name,
                email,
                message
            });

            contactForm.reset();
        });
    }

    // View All Coaches Button
    const viewAllBtn = document.querySelector(
        "button.text-primary.font-semibold"
    );

    if (viewAllBtn) {
        viewAllBtn.addEventListener("click", () => {
            alert("Redirecting to all coaches...");
            // window.location.href = "coaches.html";
        });
    }

    // Footer Links
    document.querySelectorAll("footer a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`${link.textContent} page coming soon!`);
        });
    });

    console.log("Athlete Coach Connect Loaded Successfully");
});
