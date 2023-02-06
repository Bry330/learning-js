
(async function () {
    let getData = await fetch('https://rickandmortyapi.com/api')
    const data = await getData.json()
    console.log(data)
}());

console.log(fres())
console.log(fres())