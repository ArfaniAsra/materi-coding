function samplePromise() {
    return Promise.resolve("Arfani")
}

async function run() {
    const name = await samplePromise()
    console.info(name)
}

run()
