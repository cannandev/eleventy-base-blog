// Mobile Menu
const mobileToggle = document.getElementById('mobileToggle')
const mobileMenu = document.getElementById('mobile-menu')

mobileToggle.addEventListener('click', e => {
  const icons = mobileToggle.querySelectorAll('svg')
  mobileMenu.classList.toggle('hidden')
  icons.forEach(icon => {
    icon.classList.contains('block') ? icon.classList.replace('block', 'hidden') : icon.classList.replace('hidden', 'block')
  })
})

// Quotes components accordion

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
