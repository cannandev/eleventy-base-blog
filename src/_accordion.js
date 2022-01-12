// Accordion used in Ship Quotes Components section

const accordion = document.getElementById('quote__components')

if (accordion)
{
  accordion.addEventListener('click', e => {
    const accordionHeader = e.target.closest('H2')

    if (!accordionHeader) return

    const container = accordionHeader.nextElementSibling
    // console.log(accordionHeader.textContent + " is toggled")
    container.toggleAttribute('hidden')
  })
}
