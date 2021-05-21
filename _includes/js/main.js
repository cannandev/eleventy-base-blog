/* Articles Dropdown Menu */
const mainNavToggle = document.getElementById("navDropdownToggle");
const mainNavLinks = mainNavToggle.nextElementSibling;
const mainNavCaret = mainNavToggle.querySelector("svg");
let angle = 0;

const isMainDropdownHidden = () => {
  return mainNavLinks.classList.contains("hidden");
}

const rotateCaret = () => {
  angle += 180;
  if (angle == 360) {
    rotation = 0;
  }

  mainNavCaret.style.transform = `rotate(${angle}deg)`;
}

const showDropdown = e => {
  e.target.closest("button").setAttribute("aria-expanded", true);
  rotateCaret();
}

const hideDropdown = e => {
  e.target.closest("button").setAttribute("aria-expanded", false);
  rotateCaret();
}

mainNavToggle.addEventListener('click', e => {
  mainNavLinks.classList.toggle('hidden');

  isMainDropdownHidden() ?  showDropdown(e) : hideDropdown(e);
})
