let plus = 3;
let plus2 = 2;
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://worldtimeapi.org/api/timezone/Europe/London", false);
xhr.send();
if (xhr.status != 200) {
  console.log(xhr.status + ": " + xhr.statusText);
} else {
  let time = xhr.responseText;
  let z = JSON.parse(time).utc_datetime;
  let time1 = new Date(z).getTime();
  let timestampPlus = time1 + plus * 60 * 60 * 1000;
  let timePlus = new Date(timestampPlus);
  let result = `${timePlus.getUTCHours()}:${timePlus.getUTCMinutes()} `;
  document.querySelector("#moscow").textContent = result;
}

if (xhr.status != 200) {
  console.log(xhr.status + ": " + xhr.statusText);
} else {
  let time = xhr.responseText;
  let z = JSON.parse(time).utc_datetime;
  let time1 = new Date(z).getTime();
  let timestampPlus = time1 + plus2 * 60 * 60 * 1000;
  let timePlus = new Date(timestampPlus);
  let result = `${timePlus.getUTCHours()}:${timePlus.getUTCMinutes()} `;
  document.querySelector("#oslo").textContent = result;
}

const headerBtn = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header-menu");
const headerClose = document.querySelector(".header-menu__close");
headerBtn.addEventListener("click", () => {
  headerMenu.classList.add("header-menu--active");
});
headerClose.addEventListener("click", () => {
  headerMenu.classList.remove("header-menu--active");
});

if (document.querySelector(".top")) {
  const divApp = document.getElementById("app");
  window.token = "x6ykmt-p7sk4a-w23xwa-e8b2ys-hdfs27";
  fetch("https://api.bus-solutions.ru/api/widget/" + window.token).then(
    function (response) {
      response.json().then(function (json) {
        const script = document.createElement("script");
        script.src = json.script;

        const pre_script = document.createElement("script");
        pre_script.src = json.url;
        divApp.appendChild(pre_script);
        divApp.appendChild(script);
      });
    }
  );
}

if (document.querySelector(".questions")) {
  var containers;
  function initDrawers() {
    containers = document.querySelectorAll(".questions__item");
    setHeights();
    wireUpTriggers();
    window.addEventListener("resize", setHeights);
  }

  window.addEventListener("load", initDrawers);

  function setHeights() {
    containers.forEach((container) => {
      let content = container.querySelector(".questions__text");
      content.removeAttribute("aria-hidden");
      let heightOfContent = content.getBoundingClientRect().height;
      container.style.setProperty("--containerHeight", `${heightOfContent}px`);
      setTimeout((e) => {
        container.classList.add("height-is-set");
        content.setAttribute("aria-hidden", "true");
      }, 0);
    });
  }

  function wireUpTriggers() {
    containers.forEach((container) => {
      let btn = container.querySelector(".questions__item-top");
      let content = container.querySelector(".questions__text");
      btn.addEventListener("click", () => {
        container.setAttribute(
          "data-drawer-showing",
          container.getAttribute("data-drawer-showing") === "true"
            ? "false"
            : "true"
        );
        content.setAttribute(
          "aria-hidden",
          content.getAttribute("aria-hidden") === "true" ? "false" : "true"
        );
        btn.classList.toggle("questions__item--active");
      });
    });
  }


  // let acc = document.getElementsByClassName("questions__item-top");
  // let i;
  
  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     let panel = this.nextElementSibling;
  //     if (panel.style.maxHeight){
  //       panel.style.maxHeight = null;
  //       panel.style.paddingTop = '0px'

  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + "px";
  //       panel.style.paddingTop = '20px'
  //     }
  //   });
  // }


}

if (document.querySelector(".info")) {
  const infoBtns = document.querySelectorAll(".info__button");
  const infoTxts = document.querySelectorAll(".info__text");

  infoBtns.forEach((e) => {
    e.addEventListener("click", (n) => {
      infoBtns.forEach((k) => {
        k.classList.remove("info__button--active");
      });
      e.classList.add("info__button--active");
      infoTxts.forEach((r) => {
        r.classList.add("hidden");
      });
      let id = n.target.getAttribute("data-info");
      document.querySelector(`#text-${id}`).classList.remove("hidden");
    });
  });
}
