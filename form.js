// variables

let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let userMessage = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
let btnText = document.getElementById("btnText");
let spinner = document.getElementById("spinner");

// Regex

var emailRegex = /^\S+@\S+\.\S+$/;

var nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
var messageRegex = /^\w+.*$/;

// functions

async function addForm() {
  if (nameRegex.test(userName.value)) {
    if (emailRegex.test(userEmail.value)) {
      if (messageRegex.test(userMessage.value)) {
        try {
          btnText.classList.add("d-none");
          spinner.classList.remove("d-none");
          const { error } = await supabase.from("Form_User").insert({
            Name: userName.value,
            Email: userEmail.value,
            Message: userMessage.value,
          });
          if (error) throw error;
          userName.value = "";
          userEmail.value = "";
          userMessage.value = "";
        } catch (error) {
          console.log(error);
        } finally {
          btnText.classList.remove("d-none");
          spinner.classList.add("d-none");
          btnText.innerText = "Thank You!";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Empty Message Box",
          text: "Please enter your message",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Email",
        text: "Please Enter Valid Email",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops",
      text: "Please enter your name",
    });
  }
}

submitBtn.addEventListener("click", addForm);
