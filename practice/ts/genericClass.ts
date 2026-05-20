class GenericClass<T1, T2> {
    p1: T1;
    p2: T2;
    constructor(p1: T1, p2: T2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    display(): void {
        console.log(`p1: ${this.p1}, p2: ${this.p2}`);
    }
}


// explicitly specifying the types for the generic class
let x = new GenericClass<string, number>("Arham", 58);
x.display();
let y = new GenericClass<number, string>(58, "Arham");
y.display();

// implicit method let TypeScript determine the types based on the arguments passed to the constructor
let z = new GenericClass("Arham", "Saif");
z.display();