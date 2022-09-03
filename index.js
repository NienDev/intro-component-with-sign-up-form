const log = console.log
const form = document.querySelector('form')

function foundError(e){
  e.classList.add('error')
  const errorIcon = e.parentElement.querySelector('.error-icon')
  errorIcon.classList.remove('hidden')
  const errorMessage = e.parentElement.querySelector('.error-message')
  errorMessage.classList.remove('hidden')
}

function valid(e){
  e.classList.remove('error')
  const errorIcon = e.parentElement.querySelector('.error-icon')
  errorIcon.classList.add('hidden')
  const errorMessage = e.parentElement.querySelector('.error-message')
  errorMessage.classList.add('hidden')
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener('submit', e=>{
  e.preventDefault()
  const firstName = document.querySelector('#firstName')
  const lastName = document.querySelector('#lastName')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')

  var ok = true;

  if (firstName.value == ""){
    foundError(firstName)
    ok = false
  }else{
    // log('vo')
    valid(firstName)
  }
  if (lastName.value == ""){
    foundError(lastName)
    ok = false
  }else{
    valid(lastName)
  }
  if (password.value == ""){
    foundError(password)
    ok = false
  }else{
    valid(password)
  }
  if (!validateEmail(email.value)){
    foundError(email)
    ok = false
  }else{
    valid(email)
  }

  if (ok){
    alert("Succesfully Sign Up")
    location.reload();
  }
})