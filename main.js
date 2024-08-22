let el = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
})

