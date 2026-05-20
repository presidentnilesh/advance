function createToaster(config){
    return function(notification){
        let div= document.createElement("div")
        div.className= `fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-5 ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}` ; 
        div.textContent = notification ; 
        document.body.appendChild(div) ;
    };
}

let toster = createToaster({
    positionX : "right" ,
    positionY : "top" ,
    theme : "dark" ,
    duration :3 ,
    })

toster("this is an dummy notification !")