const emailCollector = document.querySelector('#email-collector')

emailCollector.addEventListener('submit', e => {
	// Prevent weird default stuff from happening
	e.preventDefault()

	// Target the data we enter in form and store it in object variable
	let ourFormData = new FormData(e.target)
	let userFirstName = ourFormData.get('firstName')

	// Send user customize message after clicking submit using their first name.

	// Changes the HTML we want to use
	let updatedHtmlContent = `<h2>Congratulations, ${userFirstName}</h2>
  <p>You're on your way to becoming a BBQ master !</p>

  <p class="fine-print">
    We'll never share your information without your permission
  </p>
  `
	// give the main-content section an id to use for script and store it in a variable to update the html
	let mainInfo = document.querySelector('#main-info')
	mainInfo.innerHTML = updatedHtmlContent
})
