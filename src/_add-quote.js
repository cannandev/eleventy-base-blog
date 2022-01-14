import DOMPurify from 'dompurify'

// Add a quote to the Mongodb collection
const quoteForm = document.getElementById('form__quote-add')
const quoteSubmit = quoteForm.getElementsByTagName('button')[1]

const validateForm = form => {
  const quoteObject = {}
  // TODO: check if form.text && form.author are not empty required)
  // Use a for loop instead of forEach, since `form.elements` is an object, not an array.
  for (let i = 0; i < form.length; i++) {
    const element = form[i];

    // If the form element has a name property (which buttons do not) sanitize, trim and add to the object.
    if (element.name) {
      // TODO: Check that at least quote text and author have values
      quoteObject[element.name] = DOMPurify.sanitize(element.value.trim())
    }
  }
  console.log('quoteObject', quoteObject)
  if (Object.keys(quoteObject).length === 0) return false
  return true
}
// Show success message when form is submitted.
quoteForm.addEventListener('submit', e => {
  e.preventDefault()
  if (!validateForm(quoteForm.elements)) return
  quoteForm.submit()
  // TODO: sendForm(quoteForm.action, { quoteDocument })
  quoteForm.nextElementSibling.textContent = `Your quote has been successfully submitted.`
  // TODO: reset form here
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
//   "subjects": [quoteForm.tags],
//   "date_added": Date.now(),
// }

// Insert object into collection via axios

// Submit object via quote.js
