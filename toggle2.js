function createToaster(config){
    return function(str){
        let div = document.createElement("div");
        div.textContent=str ; 
        div.className = `inline-block relative ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} top-5 right-5 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg pointer-events-none`
        
        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top"){
            document.querySelector(".parent").className += 
            ` ${config.positionX==="right" ? "right-5" : "left-5"} 
            ${config.positionY==="bottom" ? "bottom-5" : " top-5" }` ; 
        }
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    }
};

let toster = createToaster({
    positionX : "right" ,
    positionY : "bottom" ,
    duration : 3,
    theme : "light" ,
});

toster("Downloading") 
setTimeout(() => {
    toster("download done !")
}, 2000);
setTimeout(() => {
    toster("Nilesh has accepted your request !")
}, 3000);
