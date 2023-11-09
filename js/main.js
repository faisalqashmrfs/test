// this code for 
    window.onload = function() {
      clicked(1);
      showSection(1);
      blocked(1);
  };

    function showSection(sectionNumber) {
    let buttons = document.getElementsByClassName("fq-button");
    let sections = document.getElementsByClassName("fq-section");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("fq-active");
    }
    for (let i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    buttons[sectionNumber - 1].classList.add("fq-active");
    sections[sectionNumber - 1].style.display = "block";
  }

  function clicked(divNumber) {
    let divs = document.getElementsByClassName("x");
    for (let i = 0; i < divs.length; i++) {
      divs[i].classList.remove("fq-activ22");
    }
    divs[divNumber - 1].classList.add("fq-activ22");

  }
  function blocked(blocknum) {
    let blocked = document.getElementsByClassName("y");
    console.log(blocked)
    for (let i = 0; i < blocked.length; i++) {
      blocked[i].classList.remove("fq-blockedone");
    }
    blocked[blocknum - 1].classList.add("fq-blockedone");

  }

function Motherfunc(params) {
  clicked(params);
  showSection(params);
  blocked(params);
}