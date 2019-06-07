const myMap: Map<string, any> = new Map([['key1', 'value1'], ['key2', 'value2']])

console.log('A', myMap.size, myMap)
for (let key of myMap.keys()) {
    console.log('B', key)
}
for (let [key, value] of myMap) {
    console.log('C', key, value)
}
myMap.forEach((_, key) => {
    console.log('D', key)
});
console.log('E', myMap.size, myMap)
