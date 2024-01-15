import { prismaClient } from "../src/prisma-client";

// Mock the prismaClient.$executeRaw method
// prismaClient.$executeRaw = jest.fn().mockResolvedValue(1);

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "Muhammad Arfani Asra";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name});`;
    expect(impacted).toBe(1);

    // Verify that the mock function was called with the correct SQL query
    // expect(prismaClient.$executeRaw).toHaveBeenCalledWith(
    //   ["INSERT INTO sample(id, name) VALUES (", ", ", ");"],
    //   id,
    //   name
    // );
  });
});
