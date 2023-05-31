document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);

function dropDownFunc(dropDown) {
  if (dropDown.classList.contains("click-dropdown") === true) {
    dropDown.addEventListener("pointerdown", handleDropdown);
  }
}

function handleDropdown() {
  if (this.nextElementSibling.classList.contains("dropdown-active") === true) {
    this.parentElement.classList.remove("dropdown-open");
    this.nextElementSibling.classList.remove("dropdown-active");
  } else {
    closeDropdown();

    this.parentElement.classList.add("dropdown-open");
    this.nextElementSibling.classList.add("dropdown-active");
  }
}

function closeDropdown() {
  const dropdownContainers = document.querySelectorAll(".dropdown-container");

  dropdownContainers.forEach(function (container) {
    container.classList.remove("dropdown-open");

    if (!container.hasEventListener) {
      container.addEventListener("pointerup", function (event) {
        event.stopPropagation();
        const home = document.getElementById("content");

        if (home.classList.contains("closed")) {
          home.classList.remove("closed");
        } else {
          while (home.hasChildNodes()) {
            home.removeChild(home.firstChild);
          }
          home.classList.add("closed");
        }
      });

      container.hasEventListener = true;
    }
  });

  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });
}

document.querySelectorAll(".dropdown-menu").forEach(function (dropDownList) {
  dropDownList.addEventListener("pointerup", closeDropdown);
});

document.querySelectorAll(".nav").forEach(function (link) {
  link.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    window.location.href = link.getAttribute("href");
  });
});

const url = "extern/preisMen.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  });

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
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataFrau(data);
  });

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
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataKid(data);
  });
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
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataCosmetics(data);
  });

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
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataCosmeticsExtra(data);
  });

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
          item.microblading +
          "<br>" +
          item.microPreis +
          "<br>" +
          item.oneYear2 +
          "<br>" +
          item.oneYearPreis2 +
          "</li>" +
          "<br>"
      );
      home4.insertAdjacentHTML(
        "afterbegin",
        "<li>" +
          "<br>" +
          item.lips +
          "<br>" +
          item.lipsPreis +
          "<br>" +
          item.oneYear3 +
          "<br>" +
          item.oneYearPreis3 +
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
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendDataEyes(data);
  });

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
  let openingDays = [0, 1, 2, 3, 4, 5, 6];

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
    dateString + " " + dayString + " " + hourString + ":" + minutesString; // Display the hour

  let nowElement = document.getElementById("now");

  if (
    (day === 6 && hour >= 9 && hour < 14) ||
    (day !== 0 &&
      day !== 1 &&
      hour >= 9 &&
      hour < 19 &&
      openingDays.includes(day))
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

let userFeed = new Instafeed({
  get: "user",
  userId: "el_coiffeure_cosmetics",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken:
    "IGQVJWREN3TlhhNHJIMVctcFlfR1RrVlUxQnZACLUIyWl9fRlkyYkExMnlOT1BvT3g5WlFOWkY0UEZAFVkxIRVUwYlZAKVjBxQkhOdXR6US1PNzlGbXBoYk95M1JpNTJNQzJpWVNHVm05TmlIN3B4ZAzFrdQZDZD",
  limit: 12,
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
userFeed.run();
