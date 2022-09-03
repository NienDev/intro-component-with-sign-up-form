const log = console.log
const form = document.querySelector('form')

function foundError(e){
  e.classList.add('error')
  const errorIcon = e.parentElement.querySelector('.error-icon')
  errorIcon.classList.remove('hidden')
  const errorMessage = e.parentElement.querySelector('.error-message')
  errorMessage.classList.remove('hidden')
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
  if (firstName.innerHTML == ""){
    foundError(firstName)
  }
  if (lastName.innerHTML == ""){
    foundError(lastName)
  }
  if (password.innerHTML == ""){
    foundError(password)
  }
  if (!validateEmail(email.innerHTML)){
    foundError(email)
  }
})