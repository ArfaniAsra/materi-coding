import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
    
    // Sequential Transaction
    it("should can execute sequential transaction", async () => {
        const [eko, kurniawan] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: "eko",
                    email: "eko@pzn.com",
                    name: "Eko",
                    phone: "25334534543"
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: "kurniawan",
                    email: "kurniawan@pzn.com",
                    name: "Kurniawan",
                    phone: "3453453543"
                }
            }),
        ]);

        expect(eko.name).toBe("Eko");
        expect(kurniawan.name).toBe("Kurniawan");
    });
    
    // Interactive Transaction
    it("should can execute interactive transaction", async () => {
        const [eko, kurniawan] = await prismaClient.$transaction(async(prisma) => {
            const eko = await prisma.customer.create({
                data: {
                    id: "eko1",
                    email: "eko1@pzn.com",
                    name: "Eko",
                    phone: "2533453454322"
                }
            })
            const kurniawan = await prisma.customer.create({
                data: {
                    id: "kurniawan1",
                    email: "kurniawan1@pzn.com",
                    name: "Kurniawan",
                    phone: "345345354344"
                }
            })

            return [eko, kurniawan];
        });

        expect(eko.name).toBe("Eko");
        expect(kurniawan.name).toBe("Kurniawan");
    });
});