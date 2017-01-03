"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StringCalculatorService = (function () {
    function StringCalculatorService() {
    }
    StringCalculatorService.prototype.add = function (numbers) {
        var components = this.getComponents(numbers);
        var delimiter = components.delimiter;
        numbers = components.numbers;
        var values = numbers.split(delimiter);
        var sum = 0;
        var invalidValues = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            var numberValue = parseInt(value);
            if (numberValue < 0) {
                invalidValues.push(numberValue);
            }
            else {
                sum += numberValue;
            }
        }
        if (invalidValues.length) {
            throw new Error('No negative values are allowed: ' + invalidValues.join(', '));
        }
        return sum || 0;
    };
    StringCalculatorService.prototype.getComponents = function (input) {
        var delimiter = /,|\n/;
        var numbers = input;
        if (input.startsWith('//')) {
            delimiter = new RegExp(input.split('\n').shift().substr(2));
            numbers = input.replace(/^\/\/.\n/, '');
        }
        return new NumberComponents(delimiter, numbers);
    };
    StringCalculatorService = __decorate([
        core_1.Injectable()
    ], StringCalculatorService);
    return StringCalculatorService;
}());
exports.StringCalculatorService = StringCalculatorService;
var NumberComponents = (function () {
    function NumberComponents(delimiter, numbers) {
        this.delimiter = delimiter;
        this.numbers = numbers;
    }
    return NumberComponents;
}());
