// alert("Hello Wolrd")


// function Car1(name, model, color) {
//     this.name = name
//     this.model = model
//     this.color = color
// }
// const alto = new Car1("alto", 2019, "black")
// console.log(alto)


// class Car {
//     constructor(name, model, color) {
//         this.name = name
//         this.model = model
//         this.color = color
//     }
// }


// const mehran = new Car("mehran", "1990", "black")
// const mehran1 = new Car("mehran", "1990", "black")
// console.log(mehran)
// console.log(mehran1)
// class Shape {
//     constructor(id, x, y) {
//         this.id = id
//         this.x = x
//         this.y = y
//     }

//     static move(a) {
//         console.log("Moving", a)
//     }
// }


// const abc = new Shape(1, 2, 4)

// Shape.move(1)

// class Circle extends Shape {
//     constructor(id, x, y, width, height) {
//         super(id, x, y)
//         this.width = width
//         this.height = height
//     }
// }

// Circle.move(1)

// const abc = new Circle(1, 12, 12, 200, 200)

let a = 1
const greeting = () => {
    console.log(a)
    ++a
}

// const promt = prompt("Yes or No")



// let a = setTimeout(greeting, 3000)

const abc = setInterval(greeting, 1000, 12, 32)

const stop = () => {
    clearInterval(abc)
}

// console.log("a")