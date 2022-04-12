const assert = require('assert');
const { expect } = require('chai');
const { addNumbers, subtraction, multiplication, division} = require("../calculator")

describe("The add fucntion", () => {
    it("Should add 2 numbers together", () => {
        const result = addNumbers(2,2);
        expect(result).to.be.eq(4);
    });
    // it("Should be able to handle 1 number", () => {
    //     const result = addNumbers(2);
    //     expect(result).to.be.eq(2);
    // });
});

describe("The Subtraction function", () => {
    it("Should subtract 2 numbers", () => {
        const result = subtraction(10,7);
        expect(result).to.be.eq(3);
    });
});

describe("The Multiplication function", () => {
    it("Should multiply 2 numbers", () => {
        const result = multiplication(10,7);
        expect(result).to.be.eq(70);
    });
});

describe("The Division function", () => {
    it("Should divide 2 numbers", () => {
        const result = division(8,2);
        expect(result).to.be.eq(4);
    });
});