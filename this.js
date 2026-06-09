// this keyword is a special keyword , because jaishe ke baaki saare keyword ka nature and value same rahta hai .. this keyword ka nature or value badal jaata hai iss baat par ke aap ushe kaha use kar rahe ho 

// this method or global scope 
console.log(this)   // ya return kar raha hai pura window because ya global main declare and call hhua hai 

// In JavaScript, this is a keyword that refers to the object that is currently executing the code

// function ka andar 
function abcd(){
    console.log(this) ; // window means pradhan mantri (supreme) //. ya return kar raha hai , pura window object (global object) , kyuki function ke andar this ka value global hota hai (window)
};
abcd()  

// method ka andar 
let obj = {
    name: "nilesh " ,
    roll : 254 ,
    sayName : function () { // agar hamlog yaha par ==> (arrowfunction) use kar de to fir this fir sha "global" ho jayega 
        console.log(this) ;    // this means pura obj (object jisne us method ko call kiya hai)
    }
}
obj.sayName() ; // ya return kar raha hai , object ka andar ka method ka sara data (name , roll , sayName)

// event handler ka andar 
document.querySelector("h1").addEventListener("click" , function(){
   console.log(this.style.color = "red");
} )

// class ka andar this ka jo bhi value hai wo black space hoota hai 
class Abcd {
    constructor(){
        console.log("heyheyhey");
        this.a = 12 
        this.b = 30 
    }
};

let val = new Abcd() ;

            // summary 
        // Global space and fiction main "this" ka valur global hoota hai and method main hamesha "object" hoota hai and eventListener main hamesha uska barabar hoota hai jiska barabar hamne likha hai . and class main hamesha "blank object" hoota hai .