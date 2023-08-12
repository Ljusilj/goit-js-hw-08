import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
let formData = {};

form.addEventListener("input", throttle (event => {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    console.log(formData);
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}, 500))


window.addEventListener("load", () => {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if(savedFormData) {
        formData = savedFormData;
        populateFormFields(formData);  
    }
}),

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = {};
    form.reset();
});

function populateFormFields(data) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            form.elements[key].value = data[key];
        }
    }
}












