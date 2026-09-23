function selectitems(item){
    let price=0
    switch(item){
        case "coffee":
            price=20
            break
        case "biscut":
            price=10
            break
        case "coconut milkk and appam":
            price=60
            break
        default:
            return `we are not elling these item`
        
    }
    return `the item is ${item} it's price is ${price}`
}
console.log(selectitems("biscut"))