function createToaster(config) {
    return function (notification) {
        let div = document.createElement("div")
        div.className = `fixed ${config.theme === "dark" ? "bg-gray-500 text-white" : "bg-black text-white"} p-4 rounded shadow-lg z-50 ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;
        div.textContent = notification;
        document.body.appendChild(div);

        setTimeout(() => {
            document.body.removeChild(div)
         }, config.duration * 1000 )
    };
}

let toster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
})

toster("this is an dummy notification !")