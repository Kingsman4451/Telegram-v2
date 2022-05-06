let elForm = document.querySelector(".form");
let elLabel = document.querySelector(".js-label")
let elInput = document.querySelector("#password");
let elBtn = document.querySelector(".js-btn");




let passwords = [1234, 2022, 2002, 5869, 2000, 2018, 7777, 4451, 3369, 2020, 1984, 2019];

elForm.addEventListener("submit", function(e){
  e.preventDefault();
  for (let i = 0; i < passwords.length; i++) {
    if(elInput.value == passwords[i]){
      window.open("main.html");
      window.location.reload()
    }else{
      elInput.classList.add("red-border");
      let newP = document.createElement("p");
      newP.textContent = "Password wrong!";
      newP.classList.add("position-absolute", "text-warning", "fs-6", "fw-normal");
      elLabel.appendChild(newP);
    }
  }
  elInput.value = ""
})