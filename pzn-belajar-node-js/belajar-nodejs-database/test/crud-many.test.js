import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    
    it("should can create many records", async () => {
        const { count } = await prismaClient.customer.createMany({
            data: [
                {
                    id: "eko",
                    email: "eko@pzn.com",
                    phone: "344657672812",
                    name: "Eko"
                },
                {
                    id: "budi",
                    email: "budi@pzn.com",
                    phone: "4873897387439",
                    name: "Budi"
                }
            ]
        });

        expect(count).toBe(2);
    });
    
    it("should can update many records", async () => {
        const { count } = await prismaClient.customer.updateMany({
            data: {
                email: "budilagi@pzn.com"
            },
            where: {
                name: "Budi"
            }
        });

        expect(count).toBe(1);
    });

    it("should can delete many records", async () => { 
        const { count } = await prismaClient.customer.deleteMany({
            where: {
                name: "Tidak Ada"
            }
        })

        expect(count).toBe(0);
    });

    it("should be able to read many records", async () => {
        const customers = await prismaClient.customer.findMany({});
        console.info(customers);
        expect(customers.length).toBe(5);
    });
});