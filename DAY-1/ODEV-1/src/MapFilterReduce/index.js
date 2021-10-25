let products = [
    {id:1, name : "Acer Laptop"  , unitPrice:15000},
    {id:2, name : "Asus Laptop"  , unitPrice:16000},
    {id:3, name : "HP Laptop"    , unitPrice:13000},
    {id:4, name : "Dell Laptop"  , unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000}
]
/*
 js framworklerindeki amaç elimizdeki dataya göre
 front-endi şekillendirmektir
 */
/*
map()
arrayın uzerinde gezinmemizi sağlar
herbir ögeye işlem yapma kolaylığı sağlar
*/
console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

products.map(product=>{
    console.log(product)
    document.write(`<li>${product.name} - ${product.unitPrice}</li>`)
})

/*
filter()
elimizdeki arrayi filtreler ve yeni bir array döndürür
0 eleman olsa bile yeni array oluşturup döner
fraworklerde state managementda data değiştiği zaman
 ekran yeniden şekillenir. ekranın yeniden render edilmesi
 için referansın değişmesi gerekir, eğer referans tipse

filter yeni array oluşturur.
slite(), splice() yerine filter tercih ederiz çünkü
filter() referance değiştirir
*/

let filteredProducts = products.filter(product => product.unitPrice > 12000)

console.log(filteredProducts)

/*
reduce()
acumuylator görevi görür
e-ticaret sitesi sepetinde toplam
ödenecek tutarı acc ederiz
*/

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0)

console.log(cartTotal)

let cartTotal2 = products.filter(
                    p=>p.unitPrice>13000
                ).map(p=>{
                    p.unitPrice = p.unitPrice * 1.18
                    return p
                }).reduce((acc, p)=> acc + p.unitPrice,0)

console.log(cartTotal2)            

