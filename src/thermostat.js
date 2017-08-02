'use strict';

var Thermostat = function(){
  this.MIN_TEMP = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.temperature = 20;
  this.modePowerSaving = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.isPowerSavingOn = function() {
  return this.modePowerSaving === true;
};

Thermostat.prototype.turnOffPowerSavingMode = function() {
  return this.modePowerSaving = false;
};

Thermostat.prototype.turnOnPowerSavingMode = function() {
  return this.modePowerSaving = true;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return
  }
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinimum()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimum = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.isMaximumTemperature = function() {
  debugger;
  if (this.isPowerSavingOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage'
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
