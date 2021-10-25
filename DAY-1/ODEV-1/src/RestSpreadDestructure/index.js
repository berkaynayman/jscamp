/*
ÖNEMLİ KONU
ARRAYLER VE OBJELERÜZERİNDE ÇALIŞABİLECEĞİMİZ
REST , SPREAD, DESTRUCTURE KONULARI
*/

/*
02:02
rest(...) parametre - geriye kalan parametreler
parametreye istediğimiz kadar parametre göderiyoruz ve array olarak tutar
*/
// js de değişkene function atayabiliriz ve bunu çok fazla yaparız
let showProducts = function(id, ...products){
    console.log(id)
    console.log(products[0][1])
}

//console.log(typeof showProducts) // function
//showProducts(10,"Elma", "Armut", "Muz")
//showProducts(10,["Elma", "Armut", "Muz"])

//spread - elimizdeki arrayı ayrıştırırz
let points = [1,23,24,5,54,65,435,4456]
console.log(...points)

console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H") //ABC ve EFG yi ayırır

/*
DESTRUCTURING elimizdeki arrayın değerlerini
değişkene atama yöntemi, parçalamak da diyebiliriz
*/
// arrayler için DESTRUCTURING
let populations = [10000, 20000, 30000, [40000, 10000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

//bize populationsun gönderileceğini var sayalım

function someFunction([small1,medium1]){
    console.log(small1,medium1)
}
//someFunction() // populations göndermek zorunlu olduğu için hata verir
someFunction(populations)


// OBJECT LER İÇİN DESTRUCTURING

let category = {
    id:1,
    name:"içeçek"
}

console.log(category.id)
console.log(category["name"])

let {id ,name1} = category
console.log(id)
console.log(name1)