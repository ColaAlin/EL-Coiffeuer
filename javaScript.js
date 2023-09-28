document.addEventListener("pointerdown", function (event) {
  if (event.target.matches(".dropdown-toggle.click-dropdown")) {
    handleDropdown.call(event.target);
  }
});

let dropdownToggles = document.querySelectorAll(".dropdown-toggle");
let dropdownContainers = document.querySelectorAll(".dropdown-container");
let dropdownMenus = document.querySelectorAll(".dropdown-menu");
let home = document.getElementById("content");

function dropDownFunc(dropDown) {
  if (dropDown.classList.contains("click-dropdown")) {
    dropDown.addEventListener("pointerdown", handleDropdown);
  }
}

function handleDropdown() {
  let nextElementSibling = this.nextElementSibling;
  let parentElement = this.parentElement;

  if (nextElementSibling.classList.contains("dropdown-active")) {
    parentElement.classList.remove("dropdown-open");
    nextElementSibling.classList.remove("dropdown-active");
  } else {
    closeDropdown();

    parentElement.classList.add("dropdown-open");
    nextElementSibling.classList.add("dropdown-active");
  }
}

function closeDropdown() {
  dropdownContainers.forEach(function (container) {
    container.classList.remove("dropdown-open");

    if (!container.hasEventListener) {
      container.addEventListener("pointerup", handlePointerUp);

      container.hasEventListener = true;
    }
  });

  dropdownMenus.forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });
}

function handlePointerUp(event) {
  event.stopPropagation();

  if (home.classList.contains("closed")) {
    home.classList.remove("closed");
  } else {
    while (home.hasChildNodes()) {
      home.removeChild(home.firstChild);
    }
    home.classList.add("closed");
  }
}

dropdownToggles.forEach(dropDownFunc);
dropdownMenus.forEach(function (dropDownList) {
  dropDownList.addEventListener("pointerup", closeDropdown);
});

document.addEventListener("pointerdown", function (event) {
  if (event.target.matches(".nav")) {
    event.preventDefault();
    window.location.href = event.target.getAttribute("href");
  }
});

const url = "extern/preisMen.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => appendData(data));
function appendData(data) {
  const home = document.querySelector("#content");
  document.querySelector("#man").addEventListener("pointerdown", () => {
    while (home.hasChildNodes()) {
      home.removeChild(home.firstChild);
    }
    data.forEach(myFunction);
    function myFunction(item) {
      home.insertAdjacentHTML(
        "afterbegin",
        "<li>" + item.hair + "  " + "<br>" + item.preis + "</li>" + "<br>"
      );
    }
  });
}

const frau = "extern/preisWoman.json";

fetch(frau)
  .then((response) => response.json())
  .then((data) => appendDataFrau(data));

function appendDataFrau(data) {
  const home2 = document.querySelector("#content");
  document.querySelector("#frau").addEventListener("pointerdown", () => {
    while (home2.hasChildNodes()) {
      home2.removeChild(home2.firstChild);
    }
    data.forEach(myFunction);
    function myFunction(item) {
      home2.insertAdjacentHTML(
        "afterbegin",
        "<li>" + item.hair + "  " + "<br>" + item.preis + "</li>" + "<br>"
      );
    }
  });
}

const kid = "extern/preisKids.json";

fetch(kid)
  .then((response) => response.json())
  .then((data) => appendDataKid(data));

function appendDataKid(data) {
  const home3 = document.querySelector("#content");
  document.querySelector("#kind").addEventListener("pointerdown", () => {
    while (home3.hasChildNodes()) {
      home3.removeChild(home3.firstChild);
    }
    data.forEach(myFunction);
    function myFunction(item) {
      home3.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          item.geschlecht +
          "<br>" +
          "<br>" +
          item.alter +
          "<br>" +
          item.preis +
          "<br>" +
          "<br>" +
          item.alter2 +
          "<br>" +
          item.preis2 +
          "<br>" +
          "<br>" +
          item.sonnst +
          "</li>" +
          "<br>"
      );
    }
  });
}

const cosmetics = "extern/preisCosmetics.json";
fetch(cosmetics)
  .then((response) => response.json())
  .then((data) => appendDataCosmetics(data));
function appendDataCosmetics(data) {
  const behaEins = data.behandlungEins;
  const behaZwei = data.behandlungZwei;
  const product = data.text;
  const extra = data.beautyExtras;

  const home4 = document.querySelector("#content");
  document.querySelector("#cosmo").addEventListener("pointerdown", () => {
    while (home4.hasChildNodes()) {
      home4.removeChild(home4.firstChild);
    }
    for (i of product) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<p>" + i.product + "</p>" + "<br>"
      );
    }

    behaEins.forEach(oneFunction);

    function oneFunction(item) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          item.name +
          "<br>" +
          "<br>" +
          item.description +
          "<br>" +
          "<br>" +
          item.preis +
          "</li>" +
          "<br>"
      );
    }
    behaZwei.forEach(twoFunction);
    function twoFunction(item) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.name +
          "<br>" +
          "<br>" +
          item.description +
          "<br>" +
          "<br>" +
          item.preis +
          "</li>" +
          "<br>"
      );
    }
    extra.forEach(extraFunction);
    function extraFunction(item) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.description +
          "<br>" +
          "<br>" +
          item.aquapeeling +
          "<br>" +
          item.aquapeelingPreis +
          "<br>" +
          "<br>" +
          item.microneedling +
          "<br>" +
          item.microneedlingPreis +
          "<br>" +
          "<br>" +
          item.radiofrequenz +
          "<br>" +
          item.radiofrequenzPreis +
          "<br>" +
          "<br>" +
          item.ionenlifting +
          "<br>" +
          item.ionenliftingPreis +
          "<br>" +
          "<br>" +
          item.ultraschall +
          "<br>" +
          item.ultraschallPreis +
          "<br>" +
          "</li>" +
          "<br>"
      );
    }
  });
}

const permanent = "extern/permanentMakeup.json";

fetch(permanent)
  .then((response) => response.json())
  .then((data) => appendDataCosmeticsExtra(data));

function appendDataCosmeticsExtra(data) {
  const makeUp = data.permanentMakeup;

  const home4 = document.querySelector("#content");
  document.querySelector("#makeup").addEventListener("pointerdown", () => {
    while (home4.hasChildNodes()) {
      home4.removeChild(home4.firstChild);
    }
    makeUp.forEach(myFunction);

    function myFunction(item) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.description +
          "<br>" +
          "<br>" +
          item.powder +
          "<br>" +
          item.powderPreis +
          "<br>" +
          item.oneYear +
          "<br>" +
          item.oneYearPreis +
          "<br>" +
          "</li>" +
          "<br>"
      );

      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.lidstrich +
          "<br>" +
          item.lidstrichPreis +
          "<br>" +
          item.oneYear4 +
          "<br>" +
          item.oneYearPreis4 +
          "</li>" +
          "<br>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.shading +
          "<br>" +
          item.shadingPreis +
          "<br>" +
          item.oneYear5 +
          "<br>" +
          item.oneYearPreis5 +
          "</li>" +
          "<br>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.wimpern +
          "<br>" +
          item.wimpernPreis +
          "<br>" +
          item.oneYear6 +
          "<br>" +
          item.oneYearPreis6 +
          "</li>" +
          "<br>"
      );
    }
  });
}
const eyesMakeup = "extern/shoeneAugen.json";
fetch(eyesMakeup)
  .then((response) => response.json())
  .then((data) => appendDataEyes(data));

function appendDataEyes(data) {
  const eyesmakeup = data.shoeneAugen;

  const home4 = document.querySelector("#content");
  document.querySelector("#eyes").addEventListener("pointerdown", () => {
    while (home4.hasChildNodes()) {
      home4.removeChild(home4.firstChild);
    }
    eyesmakeup.forEach(eyeFunction);

    function eyeFunction(item) {
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.description +
          "<br>" +
          "<br>" +
          item.brow +
          "<br>" +
          item.browPreis +
          "</li>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" + "<br>" + item.lash + "<br>" + item.lashPreis + "</li>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" + "<br>" + item.wimpern + "<br>" + item.wimpernPreis + "</li>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" + "<br>" + item.augen + "<br>" + item.augenPreis + "</li>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.augenKorrektur +
          "<br>" +
          item.augenKorrekturPreis +
          "</li>"
      );
    }
  });
}

function currentTime() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let day = today.getDay();

  let hourString = ("0" + hour).slice(-2);
  let minutesString = ("0" + minutes).slice(-2);

  let dayString;
  switch (day) {
    case 0:
      dayString = "Sonntag";
      break;
    case 1:
      dayString = "Montag";
      break;
    case 2:
      dayString = "Dienstag";
      break;
    case 3:
      dayString = "Mittwoch";
      break;
    case 4:
      dayString = "Donnerstag";
      break;
    case 5:
      dayString = "Freitag";
      break;
    case 6:
      dayString = "Samstag";
      break;
    default:
      dayString = "";
  }

  let dateOptions = { year: "numeric", month: "long", day: "numeric" };
  let dateString = today.toLocaleDateString("de-DE", dateOptions);

  document.getElementById("time").textContent =
    dateString + " " + dayString + " " + hourString + ":" + minutesString;

  let nowElement = document.getElementById("now");

  let openingDays = ["Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
  let closedDays = ["Sonntag", "Montag"];
  let halfDay = ["Samstag"];

  if (closedDays.includes(dayString)) {
    nowElement.textContent = "Wir haben geschlossen";
    nowElement.style.color = "red";
    nowElement.style.fontWeight = "bold";
  } else if (
    (halfDay.includes(dayString) && hour >= 9 && hour < 14) ||
    (openingDays.includes(dayString) && hour >= 9 && hour < 19) ||
    (dayString === "Samstag" && hour === 14 && minutes === 0)
  ) {
    nowElement.textContent = "Wir haben geöffnet";
    nowElement.style.color = "rgb(6, 189, 6)";
    nowElement.style.fontWeight = "bold";
  } else {
    nowElement.textContent = "Wir haben geschlossen";
    nowElement.style.color = "red";
    nowElement.style.fontWeight = "bold";
  }
}
currentTime();

const smallImages = document.getElementsByClassName("small");
const overlay = document.getElementById("overlay");
const largeImage = document.getElementById("largeImage");

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener("click", function () {
    const imageUrl = this.src;
    largeImage.src = imageUrl;
    overlay.style.display = "flex";
  });
}

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
});

/// Video start

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function autoplayVideo() {
  let video = document.getElementById("video");

  if (video && isMobileDevice()) {
    video.autoplay = true;
    video.load();
  }
}
function displayFallbackImage() {
  let video = document.getElementById("video");
  let fallbackImage = document.getElementById("fallback-image");

  if (video && fallbackImage) {
    video.addEventListener("error", function () {
      video.style.display = "none";
      fallbackImage.style.display = "block";
    });
  }
}

// function stopVideoAfterPlay() {
//   let video = document.getElementById("video");

//   if (video) {
//     video.addEventListener("ended", function handleEnded() {
//       video.pause();
//       video.currentTime = 0;
//     });
//   }
// }

window.onload = function () {
  autoplayVideo();
  // stopVideoAfterPlay();
  displayFallbackImage();
};

let video = document.getElementById("video");

function handleUserInteraction() {
  video.play();
}

video.addEventListener("pointerdown", handleUserInteraction);

////// Video end
