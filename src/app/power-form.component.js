"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var power_1 = require("./power");
var PowerFormComponent = (function () {
    function PowerFormComponent() {
        this.lastIndex = 20;
        this.powers = [new power_1.Power(1, 'Heat Vision', 'Use the heat rays coming from eyes to burn something from a distance'),
            new power_1.Power(2, 'X-ray Vision', 'Use the X-rays to see through opague objects '),
            new power_1.Power(3, 'Flying', 'The worst super power ever')
        ];
        this.model = new power_1.Power(1, 'Heat Vision', 'Use the heat rays coming from eyes to burn something from a distance');
        this.submitted = false;
    }
    PowerFormComponent.prototype.newPower = function () {
        this.model = new power_1.Power(++this.lastIndex, '', '');
    };
    PowerFormComponent.prototype.AddPower = function () {
        this.powers.push(this.model);
    };
    PowerFormComponent.prototype.initializeForEdit = function (power) {
        this.model = power;
    };
    return PowerFormComponent;
}());
PowerFormComponent = __decorate([
    core_1.Component({
        selector: 'power-form',
        templateUrl: './power-form.component.html',
        styleUrls: ['./forms.css']
    })
], PowerFormComponent);
exports.PowerFormComponent = PowerFormComponent;
//# sourceMappingURL=power-form.component.js.map