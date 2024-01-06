const inputEl = document.querySelector("input");

// Add your event listener here
document.addEventListener("keyup", fixLength);

// You can also add a maxlength attribute to the field off the bat in the HTML and it will prevent more than 12 characters from existing in the field.
// inputEl.setAttribute('maxlength', '12');

function fixLength() {
    // Your code here
    const fieldValue = inputEl.value;

    if (fieldValue.length > 12) {
        inputEl.value = fieldValue.substring(0, 12);
    }
}