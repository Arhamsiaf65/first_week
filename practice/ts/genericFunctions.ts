// i am practicing it via a basic example that takes a key value and returns the pair


// for int key and string value
function getIntKeyValuePair(key: number, value: string): { key: number; value: string } {
    return { key, value };
}


console.log(getIntKeyValuePair(1, "Arham"));


// for string key and number value
function getStringKeyValuePair(key: string, value: number): { key: string; value: number } {
    return { key, value };
}

// but generic types helps us to create a single function that can work with any type of key and value

function getKeyValuePair<K, V>(key: K, value: V): {key: K; value: V}{
    return { key: key, value: value };
}
console.log(getKeyValuePair("name", "Arham"));
