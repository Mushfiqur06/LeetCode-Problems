const person = {
    name: "Mushfiqur Rahman",
    age: 28,
    nationality: "Bangladesh"
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`)
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`)
        obj[prop] = value;
        return true
    }
})

personProxy.name = "Niloy"
personProxy.name
personProxy.nationality