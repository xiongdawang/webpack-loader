export default class Animal {
    constructor(name) {
        this.name = name
    }

    sayName() {
        console.log(`Hi, I'm ${this.name}`)
    }
}
