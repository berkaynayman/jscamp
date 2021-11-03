/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
*/

function asalCheck(...numbers){
    numbers.map( (item) => {
        let check = 0
        for(let i = 2; i < item/2 ; i++){
            if(item % i == 0){
                check++
            }
        }
        if(check == 0){
            console.log(`${item} sayısı ASALDIR`)
        }else{
            console.log(`${item} sayısı ASAL DEĞİLDİR`)
        }
    })
}

//asalCheck(12,34,33,7,11)

/*
2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
*/

function friendNumbers(nmbr1, nmbr2){
    let nmbr1BolenTotaly 
    let nmbr2BolenTotaly

    function bolenler(nmbr){
        let  nmbrTotaly = 0
        for(let i = 1 ; i <= nmbr/2 ; i++){
            if(nmbr % i == 0){
                nmbrTotaly = nmbrTotaly + i
            }
        }
        return nmbrTotaly
    }

    nmbr1BolenTotaly = bolenler(nmbr1)
    nmbr2BolenTotaly = bolenler(nmbr2)
    console.log("nmbr1BolenTotaly", nmbr1BolenTotaly , "nmbr2BolenTotaly", nmbr2BolenTotaly)

    if(nmbr1 == nmbr2BolenTotaly && nmbr2 == nmbr1BolenTotaly ){
        console.log("ARKADAŞ SAYILARDIR")
    }else{
        console.log("ARKADAŞ SAYI DEĞİLLERDİR")
    }

}
//friendNumbers(66928, 669922)

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

for( let i=1 ; i < 1000; i++ ){
    let iTotaly = 0
    for( let x = 1 ; x <= i ; x++){
        if(i % x == 0){
            iTotaly = iTotaly + x
        }
    }
    if( iTotaly == i*2){
        console.log(`${i} bir Mühemmel Sayıdır`)
        iTotaly = 0
    }
}


//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for( let item = 2 ; item < 1000 ; item++){
    let check = 0
    for(let i = 2; i <= item/2 ; i++){
        if(item % i == 0){
            check++
        }
    }
    if(check == 0){
        console.log(`${item} sayısı ASALDIR`)
    }else{
        console.log(`${item} sayısı ASAL DEĞİLDİR`)
    }
}