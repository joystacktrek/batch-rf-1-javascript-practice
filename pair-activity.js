const ITRelatedJobs = [
    'Web Developer'
    , 'Fullstack Developer'
    , 'QA'
    , 'UI/UX Designer'
    , 'IT Support'
]

function greet(name, age, occupation) {
    let greeting = ''
    // string concatenation
        // greeting = 'You are still a minor, ' + name
        // template literals -> much better way
        if(checkIfMinor(age)) {
            greeting = `You are still a minor, ${name}. `
        } 

        if (checkITRelated(occupation)) {
            // greeting = greeting + `Hello ${name}`
            // short way to do :
            greeting += `Hello ${name}`
        } else {
            greeting += `Welcome ${name}`
        }

    return greeting
}

function checkIfMinor(age) {
    // flowcharts
    if (age < 18) {
        return true
    }
    return false
}

function checkITRelated(occupation) {
    // OPTION 1: initialization; condition; iteration
    // for (let i=0; i < ITRelatedJobs.length; i++) {
    //     if(ITRelatedJobs[i] === occupation) {
    //         // console.log("It is an IT JOB")
    //         return true
    //     }
    // }

    // OPTION 2: name the item, in/of,call the array
    // for (item of ITRelatedJobs) {
    //     if(item === occupation) {
    //         return true
    //     }
    //     console.log(item)
    // }

    // OPTION 3:
    if (ITRelatedJobs.includes(occupation)) {
       return true
    }
    return false
}

console.log(greet('Melissa', 24, 'Web Developer'))
console.log('------------')
console.log(greet('Alex', 17, 'QA'))
console.log('------------')
console.log(greet('Karla', 24, 'UI/UX Designer'))
console.log('------------')
console.log(greet('Rommel', 16, 'Student'))
console.log('------------')