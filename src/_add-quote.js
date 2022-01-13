// Add a quote to the Mongodb collection
const quoteForm = document.getElementById('form__quote-add')
const quoteSubmit = quoteForm.getElementsByTagName('button')[1]

quoteSubmit.addEventListener('click', e => {
  e.preventDefault()
  validateForm(quoteForm.elements)
})

const validateForm = form => {
  const quoteObject = {}
  // Use a for loop instead of forEach, since `form.elements` is an object, not an array.
  for (let i = 0; i < form.length; i++)
  {
    const element = form[i];

    // If the form element has a name property (which buttons do not) sanitize, trim and add to the object.
    if (element.name)
    {
      // DomSanitize here
      quoteObject[element.name] = element.value.trim()
    }
  }
  console.log('quoteObject', quoteObject)
  return false
}
// Show success message when form is submitted.
quoteForm.addEventListener('submit', e => {
  e.preventDefault()
  if (!validateForm()) return
  quoteForm.submit()
  // sendForm(quoteForm.action, { quoteDocument })
  quoteForm.nextElementSibling.textContent = `Your quote has been successfully submitted.`
})


// Get all field values into a JSON object
// @See https://docs.atlas.mongodb.com/api/data-api-resources/#insert-a-single-document
// const quoteDocument = {
//   "text": quoteForm.text,
//   "author": quoteForm.author,
//   "title": quoteForm.title,
//   "type": quoteForm.refType,
//   "page": quoteForm.page,
//   "link": quoteForm.link,
//   "subject": [quoteForm.tags],
//   "date_added": Date.now(),
// }

// Insert object into collection via axios

// Submit object via quote.js
