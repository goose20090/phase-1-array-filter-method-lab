/*findMatching= function(drivers, name){
    const newArray = [];
    for(let driver of drivers){
        if (driver.toUpperCase() === name.toUpperCase()){
            newArray.push(driver);
        }
    }
    return newArray
}*/

function findMatching(drivers, name){
    
   const newArray = drivers.filter((driver)=>driver.toUpperCase() === name.toUpperCase())

    return newArray;

}

function fuzzyMatch(drivers, string){
    const secondArray = drivers.filter((driver)=>driver.substring(0,2) === string)
    return secondArray;

}

function matchName(drivers, string){
    const thirdArray = drivers.filter((driver)=> driver.name === string);
    return thirdArray;
}