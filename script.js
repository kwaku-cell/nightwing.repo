document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const name = document.querySelector("input[name='name']").value.trim();
            const email = document.querySelector("input[name='email']").value.trim();
            const message = document.querySelector("textarea[name='message']").value.trim();
            
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                event.preventDefault();
                return;
            }
            
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                event.preventDefault();
                return;
            }
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});