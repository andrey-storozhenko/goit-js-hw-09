console.log("Form");



const formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");

const savedInfo = localStorage.getItem("feedback-form-state");

if (savedInfo) {
  try {
    const parsed = JSON.parse(savedInfo);

    formData.email = parsed.email ?? "";
    formData.message = parsed.message ?? "";

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } catch (err) {
    console.error("Error:", err);
  }
}

form.addEventListener("input", (event) => {

  formData[event.target.name] = event.target.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem("feedback-form-state");

  formData.email = "";
  formData.message = "";

  form.reset();
});
