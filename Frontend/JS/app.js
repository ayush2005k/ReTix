/**
 * ReTix UI Logic
 * Focus: Interactivity & Form Handling
 */
console.log("ReTix app.js is officially linked and running!");
// alert("JS is working!"); // Uncomment this if you want a popup
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. VERIFICATION CODE GENERATOR (upload.html) ---
    const codeContainer = document.getElementById('rtx-code');
    if (codeContainer) {
        const randomCode = "RTX-" + Math.random().toString(36).substring(2, 8).toUpperCase();
        codeContainer.innerText = randomCode;
        
        // Update the instruction text in step 3 to match the code
        const step3Hint = document.querySelector('.upload-step:last-of-type small');
        if (step3Hint) {
            step3Hint.innerHTML = `Write "<strong>${randomCode}</strong>" on paper and place it next to your ticket.`;
        }
    }

    // --- 2. IMAGE UPLOAD PREVIEW ---
    // This gives feedback when a user selects a file
    const uploadInputs = document.querySelectorAll('input[type="file"]');
    uploadInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const button = e.target.previousElementSibling;
            if (e.target.files.length > 0) {
                button.innerText = "✓ Selected: " + e.target.files[0].name;
                button.style.borderColor = "#10B981";
                button.style.color = "#10B981";
            }
        });
    });

    // --- 3. BROWSE SEARCH FILTERING ---
    const searchBar = document.querySelector('input[placeholder*="Search"]');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.event-card');
            
            cards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                card.style.display = title.includes(query) ? 'block' : 'none';
            });
        });
    }

    // --- 4. FORM SUBMISSION (upload.html) ---
    const uploadFormBtn = document.querySelector('.form-card .btn-signup');
    if (uploadFormBtn) {
        uploadFormBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Show loading state
            uploadFormBtn.innerText = "Processing...";
            uploadFormBtn.disabled = true;

            // In a real scenario, you would bundle this into FormData
            // const formData = new FormData(document.getElementById('yourFormId'));
            
            // Mocking a successful submission
            setTimeout(() => {
                alert("Ticket submitted successfully! Please wait 24 hours for verification.");
                window.location.href = 'dashboard.html';
            }, 1500);
        });
    }
});

// Helper function for the custom upload buttons
function triggerUpload(inputId) {
    document.getElementById(inputId).click();
}