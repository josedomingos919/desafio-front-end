const url = "../src/img/";
const vetIMG = [
  `${url}Camada 344.png`,
  `${url}slide2.jpg`,
  `${url}slide3.jpg`,
  `${url}slide4.jpg`,
  `${url}slide5.jpg`,
];
var index = 0;

$(document).ready(() => {
  const imgSlide = $("#imgSlide").get(0);
  const vetBetn = $(".btn-slide").get();
  var iterval = () => {};

  vetBetn.forEach((e, i) => {
    e.onclick = () => {
      imgSlide.setAttribute("src", vetIMG[i]);
      changeBtnState(i);
      restarSlide(i + 1);
    };
  });

  function restarSlide(i = 0) {
    index = i;
    clearInterval(iterval);
    iterval = setInterval(() => {
      imgSlide.setAttribute("src", vetIMG[index]);
      changeBtnState(index);
      index = index < vetIMG.length - 1 ? index + 1 : 0;
    }, 4000);
  }

  function changeBtnState(key = index) {
    vetBetn.forEach((e, i) => {
      i === key
        ? e.setAttribute("class", "btn-slide active")
        : e.setAttribute("class", "btn-slide");
    });
  }

  restarSlide();
});
