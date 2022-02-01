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
  if (Object.keys(quoteObject).length === 0) return false
  return quoteObject
}
// Show success message when form is submitted.
quoteForm.addEventListener('submit', e => {
  e.preventDefault()
  const form = validateForm(quoteForm.elements)
  if (form) {
    // TODO: does this actually happen? quoteForm.submit()
    console.log('sending quote: ', form)
    sendForm(form)
    quoteForm.nextElementSibling.textContent = `Your quote has been successfully submitted.`
    // TODO: reset form here
  }
  else {
    quoteForm.nextElementSibling.textContent = `There was a problem with your quote.`
  }
})

/**
 * Insert single quote object into mongodb collection via axios
 * @See https://docs.atlas.mongodb.com/api/data-api-resources/#insert-a-single-document
 * */
const sendForm = quoteObject => {
  let data = JSON.stringify({
    "collection": "quotes",
    "database": "bookclub",
    "dataSource": "Cluster0",
    "document": quoteObject
  });

  let config = {
    method: 'post',
    url: `https://data.mongodb-api.com/app/data-lxyfy/endpoint/data/beta/action/insertOne`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': "cuNbRsFdKK3NU1MKeXyHb1bNLe0yR9zPCY80bf24vbl2eJU7a36m9RLoRU4ank4O"
    },
    data: data
  };

  return axios(config)
    .then(function (response) {
      console.log('inserted data: ', JSON.stringify(resonse.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
