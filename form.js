let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementById("submitBtn");
let btnText = document.getElementById("btnText");
let spinner = document.getElementById("spinner");

async function addForm() {
  try {
    btnText.classList.add("d-none");
    spinner.classList.remove("d-none");
    const { error } = await supabase
      .from("Form_User")
      .insert({ Name: name.value, Email: email.value, Message: message.value });
    if (error) throw error;
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.log(error);
  } finally {
    btnText.classList.remove("d-none");
    spinner.classList.add("d-none");
    btnText.innerText = "Thank You!";
  }
}

submitBtn.addEventListener("click", addForm);
