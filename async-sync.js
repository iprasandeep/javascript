// Synchronous JS

// console.log(" I  ")
// console.log("eat ")
// console.log(" ice ")
// console.log(" with a")
// console.log(" spoon.")


// Asynchronous

// console.log(" I  ")
// console.log("eat ")
// console.log(" ice ")
// setTimeout(()=>{
//     console.log(" with a")

// }, 3000)
// console.log(" spoon.")
// callback

// function one(call_two){

//     console.log("step 1 complete. please call step 2");
//     call_two()
// }
// function two()
// {
//     console.log("step 2");
// }
// one(two);

// realtime example

// let order = (call_production)=>{
//     console.log("order placed, pelase call production!");
//     call_production();
// };


// let production = ()=>{
//     console.log("order recieved, starting production");
// };
// order(production);

// let stocks ={
//     Fruits: ["Banana", "Grapes", "Orange"]
// }
// let fruit  = stocks.Fruits[2];
// console.log(fruit)

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chocolates", "penuts"]
};


// stocks.Fruits[]

let order = (Fruit_name, call_production)=>{
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected!`);
        
    }, 2000);
    call_production();

};

let production = () => {};
    setTimeout(() => {
        console.log("production has started!")
        setTimeout(() => {
            console.log("Fruit has been chopped!");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                
            }, 1000);
            
            setTimeout(() => {
                console.log("the machine was started!")
                setTimeout(() => {
                    console.log(`Ice was placed on ${stocks.holder[0]}`);
                }, 2000);
                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} was added as toppings!`)
                    }, 3000);
                    setTimeout(() => {
                        console.log("serve ice cream");
                    }, 2000);
            }, 1000);
            
        }, 2000);
        
    }, 1000);
order(0,production);
