// Sync 

// for (let i = 0; i < 50000; i++) {
//     console.log(i)
// }

// console.log("Hello World")


// Async 

// function wait() {
//     setTimeout(function () {
//         console.log("ABCD")
//     }, 1000)
// }


// wait()
// console.log("Hello World")


// function wait(dd, val) {
//     setTimeout(function () {
//         console.log("ABCD")
//         let result = val + 10
//         dd(result)
//     }, 1000)
// }




// wait(function (resultValue) {
//     wait(function (resultValue2) {
//         wait(function (resultValue3) {
//             console.log(resultValue3)
//         }, resultValue2)
//     }, resultValue)
// }, 10)



function wait(val) {
    new Promise((resolve, reject) => {
        setTimeout(function () {
            let result = val + 10
            if (val === 10) {
                resolve(result)
            } else {
                reject("This value is not allowed")
            }
        }, 1000)
    })


}


// (async function () {
//     try {
//         const data = await wait(10);
//         console.log(data)

//     } catch (err) {
//         console.log(err)
//     }

// }())

// wait(20)
//     .then(function (result) {
//         console.log(result)
//     }).catch(function (err) {
//         console.log(err)
//     })



// fetch('https://jsonplaceholder.typicode.com/todos', { method: "" })
//     .then(response => response.json())
//     .then(json => console.log(json))

// localStorage.setItem("name", "ameen")

// sessionStorage.setItem("myName", "Ameen")

// let a = localStorage.getItem("name")
// localStorage.clear()
// console.log(a)



