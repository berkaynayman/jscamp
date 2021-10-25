// javascript is file-base

// javascript is not type-safe
var sayi1 = 10
sayi1 = "Berkay Nayman"
//console.log(sayi1)

let sayi2 = 20
//let sayi2 = "Berkay"
//console.log(sayi2)  2 kere tanımlama hatası verir

let sayi3 = 10
sayi3 = "Nayman"
let student = {id:1, name:"Berkay"}
//console.log(student) // let kullanmaz isek studend is not defined

//function
function save(ogrenci, puan=10){
    console.log(`${ogrenci.name} : ${puan}`)
}
//save(student , 100)

//array
let students = ["Berkay Nayman", "Dursun Durmasın", "Temel Yeşil", "Fadime Çay"]

//console.log(students)

//array içine object ekledik
let students2 = [student, {id:2, name:"Temel"}, "Ankara", {city:"İstanbul"}]
//console.log(students2)

/* backendden bize gelen datalar genellikle
    array içerisinde eklenmiş objectler halinde gelecektir
    https://jsonplaceholder.typicode.com/users
*/ 