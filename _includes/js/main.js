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

/**
 * 1. Delegate event handler on closest h2
 * 2. Toggle 'hidden' class on next sibling
 *
 * */

const components = document.getElementById('quote__components')

components.addEventListener('click', e => {
  const container = e.target.nextElementSibling
  container.toggleAttribute('hidden')
})
