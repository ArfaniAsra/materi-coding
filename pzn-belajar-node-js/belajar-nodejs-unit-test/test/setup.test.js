import { sum } from "../src/sum";

beforeAll( async () => {            // tinggal tambahkan keyword async jika function nya asynchronous
    console.info("Before All");
})

afterAll( async () => {
    console.info("After All");
})

beforeEach(() => {
    console.info("Before Each");
});

afterEach(() => {
    console.info("After Each");
});

test("first test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("First Test");
})

test("second test", () => {
    expect(sum(10, 10)).toBe(20);
    console.info("Second Test");
})