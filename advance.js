

function count (){
    let c = 0 ;
    return function(){
        c++ ;
        console.log(c);

    }
    
}

let func = count();
func();
func();
func();

let fun2 = count();
fun2();
fun2();
fun2();

    //

function clickTimes(){
    let click = 0 ;
    return function(){
    if (click <6){
            click++ ;
            console.log(`you have clicked ${click} times `)
        }
    
    else {
        console.error("You have exceeded the limit .")
    }
}}

let click = clickTimes();
click();
click();
click();
click();
click();
click();
click();