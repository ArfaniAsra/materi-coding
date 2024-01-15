import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Muhammad\n");
writer.write("Arfani\n");
writer.write("Asra");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
