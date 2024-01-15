import { prismaClient } from "../src/prisma-client";

// Mock the prismaClient.customer.create method
// prismaClient.customer.create = jest.fn().mockResolvedValue({
//   id: "Asra",
//   email: "arfani152@gmail.com",
//   name: "Arfani Asra",
//   phone: "082187804774",
// });

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "Asra",
        email: "arfani152@gmail.com",
        name: "Arfani Asra",
        phone: "082187804774",
      },
    });

    expect(customer.id).toBe("Asra");
    expect(customer.email).toBe("arfani152@gmail.com");
    expect(customer.name).toBe("Arfani Asra");
    expect(customer.phone).toBe("082187804774");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Muhammad Arfani Asra",
      },
      where: {
        id: "Asra",
      },
    });

    expect(customer.id).toBe("Asra");
    expect(customer.email).toBe("arfani152@gmail.com");
    expect(customer.name).toBe("Muhammad Arfani Asra");
    expect(customer.phone).toBe("082187804774");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "Asra",
      },
    });

    expect(customer.id).toBe("Asra");
    expect(customer.email).toBe("arfani152@gmail.com");
    expect(customer.name).toBe("Muhammad Arfani Asra");
    expect(customer.phone).toBe("082187804774");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "Asra",
      },
    });

    expect(customer.id).toBe("Asra");
    expect(customer.email).toBe("arfani152@gmail.com");
    expect(customer.name).toBe("Muhammad Arfani Asra");
    expect(customer.phone).toBe("082187804774");
  });
});
