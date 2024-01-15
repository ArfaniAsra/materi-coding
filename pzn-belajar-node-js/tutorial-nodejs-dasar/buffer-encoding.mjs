const buffer = Buffer.from("Muhammad Arfani Asra", "utf-8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("TXVoYW1tYWQgQXJmYW5pIEFzcmE=", "base64");
console.info(bufferBase64.toString("utf-8"))
