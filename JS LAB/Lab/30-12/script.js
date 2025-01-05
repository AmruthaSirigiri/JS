function coffeSimulator(){
    let timer;
    function prepareCoffee(){
        timer = setTimeout(()=>{
            console.log("Coffee is preparing");
            ready();
        },3000);
    }

    function ready(){
        timer = setTimeout(()=>{
            console.log("coffee is ready");
            
        },2000)
    }
    prepareCoffee();
    return function cancel(){
        clearTimeout(timer);
        console.log("cancelled");
        
    }
}

coffeSimulator();

let cancel =   coffeSimulator();




// function counter(){
//     let number = 10;
//     let interval 
//    function countdown(){
//      interval =  setInterval(()=>{

//         if(number === 0){
//             return;
//         }
//             console.log(number--);
            
//         },1000)
//    }

//    countdown();

//     return function clear(){
       
//             clearInterval(interval)
//             console.log("interval cleared");
            
      
//     }
  
// }

// // let cle = counter()

// // counter()
