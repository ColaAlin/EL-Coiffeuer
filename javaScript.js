// Get all the dropdown from document
//document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);
document.querySelectorAll(".touch-dropdown").forEach(touchDownFunc);

const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

// Get all the dropdown from document
document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  if (isTouchDevice) {
    console.log("touch");
    // Add touchstart event listener for touch devices
    dropDown.addEventListener("touchstart", touchDownFunc);
  } else {
    // Add click event listener for PC devices
    console.log("click");
    dropDown.addEventListener("click", handleDropdown);
  }

  // Rest of your code...
}

/////////////////////////////////
// Dropdown Open and Close function
// function dropDownFunc(dropDown) {
//   console.log(dropDown.classList.contains("click-dropdown"));

//   if (dropDown.classList.contains("click-dropdown") === true) {
//     // Add click event listener
//     dropDown.addEventListener("click", handleDropdown);
//   }
// ////////////////////////////////////////////////
//   // if (dropDown.classList.contains("hover-dropdown") === true) {
//   //   // Add mouseover and mouseout event listeners
//   //   dropDown.addEventListener("mouseover", dropdownHover);
//   //   dropDown.addEventListener("mouseout", dropdownHover);

//   //   function dropdownHover(e) {
//   //     if (e.type === "mouseover") {
//   //       // Close the opened dropdown
//   //       closeDropdown();

//   //       // Add the open and active class (Opening the DropDown)
//   //       this.parentElement.classList.add("dropdown-open");
//   //       this.nextElementSibling.classList.add("dropdown-active");
//   //     }
//   //   }
//   // }
// }

// Handle dropdown click event
function handleDropdown(e) {
  e.preventDefault();

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

function touchDownFunc(touchDown) {
  console.log(touchDown.classList.contains("touch-dropdown"));

  if (touchDown.classList.contains("touch-dropdown") === true) {
    touchDown.addEventListener("touchstart", handleTouchStart);
  }
}
// Handle touchstart event
function handleTouchStart(event) {
  console.log("touch");
  event.preventDefault();
  if (this.nextElementSibling.classList.contains("touch-active") === true) {
    this.parentElement.classList.remove("touch-open");
    this.nextElementSibling.classList.remove("touch-active");
  } else {
    closeDropdown();

    this.parentElement.classList.add("touch-open");
    this.nextElementSibling.classList.add("touch-active");
  }
}

// Listen to the document click
window.addEventListener("click", function (e) {
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
      container.classList.remove("touch-open");
    });

  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
    menu.classList.remove("touch-active");
  });
  const home = document.querySelector("#content");
  document.querySelector(".liste").addEventListener("click", () => {
    while (home.hasChildNodes()) {
      home.removeChild(home.firstChild);
    }
  });
}

// Close the dropdown on mouseout from the dropdown list
document.querySelectorAll(".dropdown-menu").forEach(function (dropDownList) {
  // Close the dropdown after the user leaves the list
  dropDownList.addEventListener("click", closeDropdown);
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
  document.querySelector("#man").addEventListener("click", () => {
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
  document.querySelector("#frau").addEventListener("click", () => {
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
  document.querySelector("#kind").addEventListener("click", () => {
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
  document.querySelector("#cosmo").addEventListener("click", () => {
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
  document.querySelector("#makeup").addEventListener("click", () => {
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
  document.querySelector("#eyes").addEventListener("click", () => {
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
