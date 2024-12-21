
function scrollToSection(id) {
  const section = document.getElementById(id);
  
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element with id "${id}" not found.`);
  }
}

export default scrollToSection;