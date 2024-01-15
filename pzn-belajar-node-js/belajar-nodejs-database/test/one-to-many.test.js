import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => { 
    it("should can insert and include", async () => {
        const comment = await prismaClient.comment.create({
            data: {
                customer_id: "eko",
                title: "Insert Comment",
                description: "Description Comment"
            },
            include: {
                customer: true
            }
        });

        console.info(comment);
    });

    it("should can insert and many relation", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "alex",
                name: "Alex Wang",
                email: "alex@pzn.com",
                phone: "081234567890",
                comments: {
                    createMany: {
                        data: [
                            {
                                title: "Comment 1",
                                description: "Description Comment 1"
                            },
                            {
                                title: "Comment 2",
                                description: "Description Comment 2"
                            }
                        ]
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(customer);
    });

    it("should can find many with filter relation", async () => {
        const customer = await prismaClient.customer.findMany({
            where: {
                comments: {
                    some: {
                        title: {
                            contains: "Comment"
                        }
                    }
                }
            },
            include: {
                comments: true
            }
        });

        console.info(JSON.stringify(customer));
    });
});