// Get all the dropdown from document
document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  console.log(dropDown.classList.contains("click-dropdown"));

  if (dropDown.classList.contains("click-dropdown") === true) {
    // Add click event listener
    dropDown.addEventListener("pointerdown", handleDropdown);
  }
}

// Handle dropdown pointer event
function handleDropdown(e) {
  if (this.nextElementSibling.classList.contains("dropdown-active") === true) {
    // Close the clicked dropdown
    this.parentElement.classList.remove("dropdown-open");
    this.nextElementSibling.classList.remove("dropdown-active");
  } else {
    // Close the opened dropdown
    closeDropdown();

    // Add the open and active class (Opening the DropDown)
    this.parentElement.classList.add("dropdown-open");
    this.nextElementSibling.classList.add("dropdown-active");
  }
}
// Listen to the document click
window.addEventListener("pointerup", function (e) {
  // Close the menu if click happens outside menu
  if (e.target.closest(".dropdown-container") === null) {
    // Close the opened dropdown
    closeDropdown();
  }
});

// Close the opened Dropdowns
function closeDropdown() {
  // Remove the open and active class from other opened Dropdown (Closing the opened DropDown)
  document
    .querySelectorAll(".dropdown-container")
    .forEach(function (container) {
      container.classList.remove("dropdown-open");
      // container.classList.remove("touch-open");
    });

  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
    // menu.classList.remove("touch-active");
  });
  const home = document.querySelector("#content");
  document.querySelector(".liste").addEventListener("pointerup", () => {
    while (home.hasChildNodes()) {
      home.removeChild(home.firstChild);
    }
  });
}

document.querySelectorAll(".dropdown-menu").forEach(function (dropDownList) {
  dropDownList.addEventListener("pointerup", closeDropdown);
});
// handle the nav links in dropdown-menu
document.querySelectorAll(".nav").forEach(function (link) {
  link.addEventListener("pointerdown", (e) => {
    console.log(e);
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

//document.getElementById("btn").addEventListener("click", currentTime);

// function handleEvent(event) {
//   if (event instanceof TouchEvent && event.type === "touchstart") {
//     // Touch event
//     console.log("Touch event occurred.");
//   } else if (event.type === "click") {
//     // Click event
//     console.log("Click event occurred.");
//   }
// }

// // Add event listener to the element
// const element = document.querySelector(".dropdown-container");
// element.addEventListener("touchstart", handleEvent);
// element.addEventListener("click", handleEvent);

// function appendInsta(data) {
//   console.log(data);
//   document.querySelector("section").innerHTML = JSON.stringify(data);
// }

// fetch("https://www.instagram.com/el_coiffeure_cosmetics/")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendInsta(data);
//   })
//   .catch(function (error) {
//     console.log("error: " + error);
//   });
