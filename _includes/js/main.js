// Desktop Menu - Articles Dropdown Menu
const mainNavToggle = document.getElementById('navDropdownToggle')
const mainNavLinks = mainNavToggle.nextElementSibling
const mainNavCaret = mainNavToggle.querySelector('svg')
let caretRotation = 0

const isMenuOpen = _ => {
  return mainNavLinks.classList.contains('hidden')
}

const rotateCaret = () => {
  caretRotation += 180
  if (caretRotation === 360) {
    caretRotation = 0
  }

  mainNavCaret.style.transform = `rotate(${caretRotation}deg)`
}

const showDropdown = e => {
  e.target.closest('button').setAttribute('aria-expanded', true)
  rotateCaret()
}

const hideDropdown = e => {
  e.target.closest('button').setAttribute('aria-expanded', false)
  rotateCaret()
}

mainNavToggle.addEventListener('click', e => {
  mainNavLinks.classList.toggle('hidden')
  isMenuOpen() ? showDropdown(e) : hideDropdown(e)
})

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
