document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    // Function to validate password
    function validatePassword() {
        const passwordValue = password.value;
        const confirmValue = confirmPassword.value;
        
        // Reset previous error states
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        password.nextElementSibling.textContent = '';
        confirmPassword.nextElementSibling.textContent = '';
        
        let isValid = true;
        
        // Password requirements
        if (passwordValue.length < 8) {
            password.classList.add('error');
            password.nextElementSibling.textContent = 'Password must be at least 8 characters long';
            isValid = false;
        }
        
        // Password match validation
        if (passwordValue !== confirmValue) {
            confirmPassword.classList.add('error');
            confirmPassword.nextElementSibling.textContent = 'Passwords do not match';
            isValid = false;
        }
        
        return isValid;
    }
    
    // Real-time password validation
    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validatePassword()) {
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Optional: Show success message
            alert('Account created successfully!');
            form.reset();
        }
    });
    
    // Add focus/blur effects for form fields
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
});