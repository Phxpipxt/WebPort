var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidebar = document.getElementById("sidemenu");

function openmenu() {
  sidebar.style.right = "0";
}
function closemenu() {
  sidebar.style.right = "-200px";
}

const scriptURL =
  "<https://script.google.com/macros/s/AKfycbwQjW3WrfqhtWLbVdEL2SDvoNsUoIY_qC9jUU6YEw_Jy7k-e5uLSil_Q24DSAbc4EVnOg/exec>";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thanks for contacting me!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
}) <
  script >
  function zoomImage(img) {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.7)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.onclick = function () {
      modal.remove();
    };
    var imgZoom = document.createElement("img");
    imgZoom.src = img.src;
    imgZoom.style.maxWidth = "80%";
    imgZoom.style.maxHeight = "80%";
    modal.appendChild(imgZoom);
    document.body.appendChild(modal);
  };
