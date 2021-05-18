document.addEventListener("DOMContentLoaded", () => {
  const featureLinkElems = document.querySelectorAll(".feature__link");
  const featureSubElems = document.querySelectorAll(".feature-sub");

  //Перебираем элементы с помощью цикла for

  //   for (let i = 0; i < featureLinkElems.length; i++) {
  //     featureLinkElems[i].addEventListener("click", () => {
  //       featureSubElems[i].classList.toggle("hidden");
  //       featureLinkElems[i].classList.toggle("feature__link_active");
  //     });
  //   }

  //Перебираем элементы с помощью forEach

  featureLinkElems.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      featureSubElems.forEach((featureSubElem) => {
        featureSubElem.classList.add("hidden");
      });
      featureLinkElems.forEach((featureLinkElem) => {
        featureLinkElem.classList.remove("feature__link_active");
      });
      featureSubElems[index].classList.remove("hidden");
      btn.classList.add("feature__link_active");
    });
  });
});
