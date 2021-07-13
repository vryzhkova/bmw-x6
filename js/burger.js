export default function burger() {
    const menuElem = document.querySelector(".menu");
    const hamburgerElem = document.querySelector(".humburger-menu");

  const handlerMenu = (event) => {
    const target = event.target;
    const parent = target.closest(".menu-list__link");
    if (
      (!parent && target !== hamburgerElem) ||
      target.classList.contains(".menu-list__link")
    ) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    menuElem.classList.toggle("menu-active");
    hamburgerElem.classList.toggle("humburger-menu-active");

    if (menuElem.classList.contains("menu-active")) {
      document.addEventListener("click", handlerMenu);
    } else {
      document.removeEventListener("click", handlerMenu);
    }
  };

  hamburgerElem.addEventListener("click", toggleMenu);
  }
