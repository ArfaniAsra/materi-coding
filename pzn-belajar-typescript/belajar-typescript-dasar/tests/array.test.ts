describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ["Muhammad", "Arfani", "Asra"]
        const values: number[] = [1, 2, 3]

        console.info(names)
        console.info(values)
    })

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ["Coding", "Reading", "Writing"]
        console.info(hobbies)
        console.info(hobbies[0])
        console.info(hobbies[1])

        // hobbies[0] = "Main Game";
    })

    it('should support tuple', function () {
        const person: readonly [string, string, number] = ["Muhammad", "Arfani", 23]

        console.info(person)
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])

        // person[1] = "Budi"
    })
})