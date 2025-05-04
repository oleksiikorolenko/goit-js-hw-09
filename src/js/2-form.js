const STORAGE_KEY = "feedback-form-state";
let formData = { email: "", message: "",};
const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const emailInput = form.elements.email;




const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
    emailInput.value = savedData.email || " ";
    textarea.value = savedData.message || " ";
}

form.addEventListener('input', handleFormInput);

function handleFormInput(e) {
    formData.email = emailInput.value.trim();
    formData.message = textarea.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

form.addEventListener('submit', handleFormSubmit)
function handleFormSubmit(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const message = textarea.value.trim();
    if (!email || !message) {
        
        alert("Fill please all fields");
        return;
    
    }
    const form = e.currentTarget;
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
form.reset()
}
