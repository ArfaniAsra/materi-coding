export const sayHello = (name) => {
    return `Hello ${name}`;
}

export const sum = (numbers) => {
    let total = 0;
    for (const value of numbers) {
        total += value;
    }
    return total;
}