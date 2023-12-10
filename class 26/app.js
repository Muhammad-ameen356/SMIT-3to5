var farasat = {
    name: "Farasat",
    id: 1,
    userAge: 18,
    greet: function () {
        console.log("Hello Class I am " + this.name)
    },
    "ameen": "ameen",
    1: "ameen"
}

// console.log(farasat)

// let arr = [1, 2]
// console.log(arr)

// farasat.email = "abc@gmail.com"

// delete farasat.id

// console.log(farasat.greet())


// function User(name, email) {
//     this.name = name;
//     this.email = email;
// }

// User.prototype.greet = function () {
//     console.log("Hello" + this.email)
// }


// const farasat1 = new User("Farasat", "abc@gmail.com")
// const farasat2 = new User("Farasat2", "abc2@gmail.com")
// console.log(farasat1.greet())
// console.log(farasat2)

// console.log(farasat["userAge"])

// for (var key in farasat) {
//     let sumUp = `${key}: ${farasat[key]}`
//     console.log(sumUp)
// }



// for (let objKey in farasat) {
//     // console.log(farasat[objKey], typeof (objKey))
//     console.log(farasat[objKey])

// }

// Primitive & Non Primitive

// Number, string, boolean, object, undefined, null, Symbol

// Primitive

// Number, string, boolean, undefined, null, Symbol

// Non-Primitive

// object

// Primitive
// let a = true
// let b = a

// b = false
// // b++
// console.log(a)
// console.log(b)

// // Non Primitive
// let aObj = { num: true }
// let bObj = aObj

// bObj.num = false
// // bObj.num++

// console.log(aObj)
// console.log(bObj)