import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => { 
    it("should be able to aggregate", async () => { 
        const result = await prismaClient.product.aggregate({
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
        });

        console.info(result);
    });

    it("should be able do aggregate function with group by", async () => { 
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
        });

        console.info(result);
    });

    it("should be able do aggregate function with group by and having", async () => { 
        const result = await prismaClient.product.groupBy({
            by: ["category"],
            _min: {
                price: true,
                stock: true
            },
            _max: {
                price: true,
                stock: true
            },
            _avg: {
                price: true,
                stock: true
            },
            having: {
                price: {
                    _avg: {
                        gt: 2000
                    }
                }
            }
        });

        console.info(result);
    });
});