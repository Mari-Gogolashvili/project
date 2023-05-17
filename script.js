  function change() {
    var image = document.querySelector(".menu");
    if (image.src.endsWith("icon-menu.svg")) {
      image.src = "./images/icon-menu-close.svg";
    } else if (image.src.endsWith("icon-menu-close.svg")) {
      image.src = "./images/icon-menu.svg";
    }
  }
