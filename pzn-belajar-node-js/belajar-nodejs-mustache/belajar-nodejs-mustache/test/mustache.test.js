import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello, {{name}}", { name: "Arfani" });
  expect(data).toBe("Hello, Arfani");
});

test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello, {{name}}");

  const data = Mustache.render("Hello, {{name}}", { name: "Arfani" });
  expect(data).toBe("Hello, Arfani");
});

test("Tags", () => {
  const data = Mustache.render("Hello, {{name}}, my hobby is {{{hobby}}}", {
    name: "Arfani",
    hobby: "<b>Programming</b>",
  });
  expect(data).toBe("Hello, Arfani, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
  const data = Mustache.render("Hello, {{person.name}}", {
    person: {
      name: "Arfani",
    },
  });
  expect(data).toBe("Hello, Arfani");
});

test("Mustache File", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Arfani",
  });

  console.info(data);
  expect(data).toContain("Arfani");
});

test("Sections Not Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});

  console.info(data);
  expect(data).not.toContain("Hello Person");
});

test("Mustache Sections Show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Arfani",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person");
});

test("Sections Data", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: {
      name: "Arfani",
    },
  });

  console.info(data);
  expect(data).toContain("Hello Person Arfani!");
});

test("Inverted Sections", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});

  console.info(data);
  expect(data).toContain("Hello Guest");
});

test("List", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["Coding", "Reading", "Gaming"],
  });

  console.info(data);
  expect(data).toContain("Coding");
  expect(data).toContain("Gaming");
  expect(data).toContain("Reading");
});

test("List Object", async () => {
  const helloTemplate = await fs
    .readFile("./templates/students.mustache")
        .then((data) => data.toString());
    
    const data = Mustache.render(helloTemplate, {
        students: [
            { name: "Arfani", value: 100 },
            { name: "Eko", value: 95 }
        ]
    });

    console.info(data);
    expect(data).toContain("Arfani");
    expect(data).toContain("Eko");
    expect(data).toContain("100");
    expect(data).toContain("95");
});

test("Functions", async () => { 
    const parameter = {
        name: "Arfani",
        upper: () => {
            return (text, render) => {
                return render(text).toUpperCase();
            }
        }
    }

    const data = Mustache.render("Hello, {{#upper}}{{name}}{{/upper}}", parameter);
    console.info(data);
    expect(data).toBe("Hello, ARFANI");
});

test("Comment", async () => {
    const helloTemplate = await fs.readFile("./templates/comment.mustache")
        .then(data => data.toString());
    
    const data = Mustache.render(helloTemplate, {
        title: "Arfani"
    });

    console.info(data);
    expect(data).toContain("Arfani");
    expect(data).not.toContain("Komentar");
});

test("Partials", async () => { 
    const headerTemplate = await fs.readFile("./templates/header.mustache").then(data => data.toString());
    const footerTemplate = await fs.readFile("./templates/footer.mustache").then(data => data.toString());
    const contentTemplate = await fs.readFile("./templates/content.mustache").then(data => data.toString());

    const data = Mustache.render(contentTemplate, {
        title: "Belajar Partials",
        content: "Muhammad Arfani Asra"
    }, {
        header: headerTemplate,
        footer: footerTemplate
    });

    console.info(data);
    expect(data).toContain("Belajar Partials");
    expect(data).toContain("Muhammad Arfani Asra");
    expect(data).toContain("Programmer Zaman Now");
});