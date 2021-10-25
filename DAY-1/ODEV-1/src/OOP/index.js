//ecmaScript ile class da yazabiliriz
// jsde class içerisinde değerleri atamak için prototype denilen yapıdan yararlanır
// dışarıdan Customer classını çağırmak için kullanıcak isek export diye başına eklemek gerekir
// class lar arkaplanda fonksiyona dönüşür çünkü saf js de class yoktur 
class Customer{
    constructor(id,customerNumber){
        // instance id ve customer değerler ekledim
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")
//prototyping - bir nesneye başka bir özellik eklemek
// bu instance yapılan prototyping
customer.name = "Berkay Nayman"
console.log(customer.customerNumber)
console.log(customer.name)

// bu classa yapılan prototyping
Customer.bisey = "Bişey"
console.log(Customer.bisey)


// bireysel musteri
class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        //super() Customer e demek
        super(id, customerNumber)
        this.firstName = firstName
    }
}
// kurumsal musteri
class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}