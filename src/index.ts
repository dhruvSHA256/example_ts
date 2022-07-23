// dont use any

const id: number = 10
const Name: string = "Dhruv"
const male: boolean = true
const edu: any = 10
// console.log(id)

const arr: number[] = [1, 2, 3]
console.log(arr)
arr.forEach((v, i, a) => console.log(v, i, a))

const person: [number, string, boolean] = [id, Name, male]
console.log(person)

let idd: number | string = 22;
idd = 10
idd = "root"

enum state {
    start,
    stop,
    exit,
}
// console.log(state.start)

enum dir {
    x = 1,
    y = 2,
    z = 3
}
// console.log(dir.y)

// objects
const User: {
    name: string,
    age: number
} = { name: Name, age: 10 }


// interfaces
interface UserInterface {
    name: string
    readonly id: number // cant change
    age?: number // optional
}
const MyUser: UserInterface = {
    name: Name, id: 10
}

// functions
const addnum = (a: number, b: number): number => {
    return a + b;
}

interface Mathfunc {
    (x: number, y: number): number
}

const subnum: Mathfunc = (a, b) => {
    return a - b;
}

subnum(10, 10)

// classes
interface PersonInterface {
    id: number
    name: string
    register(): boolean
}

class Person implements PersonInterface {
    readonly id: number
    readonly name: string
    constructor(name: string, id: number) {
        console.log(123);
        this.name = name
        this.id = id
    }
    register(): boolean {
        return true;
    }
    getname() {
        return this.name;
    }
    getid() {
        return this.id;
    }
}

const me = new Person("dhruv", 1)

console.log(me.getname(), me.getid())

class Friend extends Person {
    friendshiplevel: number
    constructor(name: string, id: number, friendshiplevel: number) {
        super(name, id)
        this.friendshiplevel = friendshiplevel
    }
}
