const clock = document.querySelector("#clock");

function writeTime() {
    return setInterval(() => {
        const now = new Date().toLocaleTimeString();
        clock.innerHTML = `<h1>${now}</h1>`;
    }, 1000);
}

writeTime();