// narrowing types in union types


type cat = {
    name: string,
    whiskers: number

    TYPE: "CAT"
    // one thing to remember here here it si TYPE: "CAT" not TYPE: string because if we use string then it can be any string and it will not help us to narrow down the type to cat or dog 
}


// for this the same structural object will failed to assing, as it will deal it as TYPE: string
// eg
// let cat1 = {
//     name: "tom", 
//     whiskers: 123,
//     TYPE: "CAT"
// }

// invalid statement below, due to type: string instead of type 
// let cat2: cat = cat1;

// the error will resolved if

// let cat1 : cat= {
//     name: "tom", 
//     whiskers: 123,
//     TYPE: "CAT"
// }
// let cat2: cat = cat1;
// valid know

// or another solution to declate TYPE: "CAT" as const, this way it will be treated as a literal type and it will not be widened to string

type dog = {
    name: string,
    obedient: boolean,


    TYPE: "DOG"
}

let animal1: cat | dog = null as any;


// we could only access the shared property not the others
animal1.name = "Tom";

// solution to that sandbox style
if("obedient" in animal1){
    // ts deals it as a dog
}else{
    // it cat
    animal1.whiskers = 5;
}

// but with more complicated types it becomes difficult to use this approach and it can lead to errors if we are not careful

// so the solution to that is to use type guards and type assertions but it can be a bit verbose and not very elegant

// by this

if(animal1.TYPE === "DOG"){
    // ts knows that it is a dog
}else{
    // ts knows that it is a cat
}



// for non primitive types

let a : string | number =  Math.random() > 0.5 ? "hello" : 123;

if(typeof a === "string"){
    // ts knows that it is a string
}else{
    // ts knows that it is a number
}

// similarly for classes we could check as if(instanceof) to narrow down the type

