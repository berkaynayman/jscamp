function addToCart(productName = "Elma", quantity){
    console.log(`sepete eklendi : ürün : ${productName} - Adet : ${quantity}`)
}

addToCart("Laptop",2)

let sayHello = () =>{
    console.log("helloo")
}

sayHello()

let sayHello2 = function(){
    console.log("hello world 2 ")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){

}
addToCart2('Elma', 5, 10)
addToCart2('Limon', 2, 5)

function addToCart3(product){
    console.log(`Ürün Adı : ${product.productName} Ürün Fiyat : ${product.unitPrice}
    Ürün Adet : ${product.quantity}`)
}
let product1 = {
    productName: "Elma",
    unitPrice  : 10,
    quantity   : 5 
}

addToCart3(product1)

let product2 = {
    productName: "Elma",
    unitPrice  : 10,
    quantity   : 5
}

let product3 = {
    productName: "Elma",
    unitPrice  : 10,
    quantity   : 5
}

product2 = product3
product2.productName = "KARPUZ" //product3.productName=karpuz


let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1) // 20

//scope kavramı
function addToCart4(x){
    console.log(product1)  
}
addToCart4(product3)


//rest
function add(...numbers){
    let total = 0
    console.log(numbers)
    for(let i=0 ; i < numbers.length ; i++){
        total = total + numbers[i]
    }
    console.log(total)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)
add()

//spread
let numbers = [30, 10, 50, 200, 130]
console.log(Math.max(...numbers))

//destructuring
let [icAnadolu, marmara, karadeniz,[icAnadolusehirler, marmaraSehirler, karadenizSehirler]] = [
    {name: "İç anadolu", population:"20M"},
    {name: "Marmara"   , population:"30M"},
    {name: "Karadeniz" , population:"10M"},
    [
        ["Ankara", "Konya"],
        ["istanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]
console.log(karadenizSehirler)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} =
     {productName:"Elma", unitPrice:10, quantity:5})
    
console.log(newQuantity)