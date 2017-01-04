/* tslint:disable:no-unused-variable */
"use strict";
var stringCalculator_service_1 = require('./stringCalculator.service.js');
describe('StringCalculator', function () {
    var stringCalculator;
    beforeEach(function () {
        stringCalculator = new stringCalculator_service_1.StringCalculatorService();
    });
    describe('Basic functionality', function () {
        it('#add should return 0 on empty string', function () {
            expect(stringCalculator.add('')).toBe(0);
        });
        it('#add should return the correct sum for simple input values', function () {
            expect(stringCalculator.add('1')).toBe(1);
            expect(stringCalculator.add('1,2')).toBe(3);
        });
        it('#add should return the correct sum for an arbitrary number of input values', function () {
            expect(stringCalculator.add('1,2,3,4')).toBe(10);
        });
    });
    describe('New line handling', function () {
        it('#add should consider new line characters as well as commas as delimiters', function () {
            expect(stringCalculator.add('1\n2,3,4')).toBe(10);
        });
    });
    describe('Handling variable delimiters', function () {
        it('#getDelimiter should return the default delimiters if no user-defined delimiter is given', function () {
            expect(stringCalculator.getComponents('1,2,3,4').delimiter.source).toBe(',|\\n');
        });
        it('#getDelimiter should return user-defined delimiters', function () {
            expect(stringCalculator.getComponents('//;\n1;2').delimiter.source).toBe(';');
        });
        it('#add should return the correct sum for user-defined delimiters', function () {
            expect(stringCalculator.add('//;\n1;2')).toBe(3);
        });
    });
    describe('Handling negative input values', function () {
        it('#add should not allow negative values', function () {
            expect(function () { stringCalculator.add('1,-2,3,4'); }).toThrowError('No negative values are allowed: -2');
            expect(stringCalculator.add('1,-2,3,-4')).toThrowError('No negative values are allowed: -2, -4');
        });
    });
});
