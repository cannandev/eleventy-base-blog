/* Articles Dropdown Menu */
const mainNavToggle = document.getElementById('navDropdownToggle')
const mainNavLinks = mainNavToggle.nextElementSibling
const mainNavCaret = mainNavToggle.querySelector('svg')
let caretRotation = 0

const isMainDropdownHidden = () => {
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

  isMainDropdownHidden() ? showDropdown(e) : hideDropdown(e)
})
