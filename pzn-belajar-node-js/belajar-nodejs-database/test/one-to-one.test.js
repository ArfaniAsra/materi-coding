import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => { 
    it("should can create one-to-one relation", async () => { 
        const wallet = await prismaClient.wallet.create({
            data: {
                id: "arfani",
                customer_id: "arfani",
                balance: 1500000
            },
            include: {
                customer: true
            }
        });

        console.info(wallet);
    });

    it("should can create one-to-one with relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "joko2",
                name: "Joko 2",
                email: "joko2@pzn.com",
                phone: "029819291984",
                wallet: {
                    create: {
                        id: "joko2",
                        balance: 550000
                    }
                }
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it("should can find one-to-one with relation", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "eko"
            },
            include: {
                wallet: true
            }
        });

        console.info(customer);
    });

    it("should be able to find many one-to-one with relation filter", async () => {
        const customers = await prismaClient.customer.findMany({
            where: {
                wallet: {
                    isNot: null
                }
            },
            include: {
                wallet: true
            }
        });


        console.info(customers);
    });
});