

interface person{
    id: string,
    name: string
}

interface player extends person{
    team: string
}

interface softwareEngineer extends person{
    company: string
}

async function getSimilar(item: person) : Promise<person[]>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [item, item]
}

let player1 : player = {
    id: "1",
    name: "Arham",
    team: "Pakistan"
}

// its returning an array of person but we know that it will return an array of player so we can use type assertion to tell TypeScript that the return type is player[]
getSimilar(player1).then(result => console.log(result));

async function getSimilarTyped<T>(params: T ): Promise<T[]>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [params, params]
}

// here it should accept only persons children but it can accept any type because we are using generics and we are not restricting the type to be a person or its children
getSimilarTyped(12).then(result => console.log(result));


// so the solution comes here is 
async function getSimilarTypedRestricted<T extends person>(params: T ): Promise<T[]>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [params, params]
}
getSimilarTypedRestricted(player1).then(result => console.log(result));
