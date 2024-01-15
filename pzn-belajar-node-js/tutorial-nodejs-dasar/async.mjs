function samplePromise() {
    return Promise.resolve("Arfani")
}

const name = await samplePromise()
console.info(name)
