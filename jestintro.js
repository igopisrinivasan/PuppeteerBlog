describe("First test suite", () => {
    test("First test scenario", () => {
        expect(2 + 2).toBe(4);
    });

    test("verify array of data", () => {
        const data = { one: 1 };
        data['two'] = 2;
        expect(data).toEqual({ one: 1, two: 2 });
    })

    test("async test", async () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
    });


})