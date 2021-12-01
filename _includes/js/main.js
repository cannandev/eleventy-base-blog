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
