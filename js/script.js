const p = document.querySelector(".mode");
p.addEventListener(
    "click",
    function (e) {
        const body = document.querySelector("body");
        if (e.target.tagName === "BUTTON") {
            body.classList.toggle("light");
        }
    },
    false
);
