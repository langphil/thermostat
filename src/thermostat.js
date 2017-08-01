'use strict';

var Thermostat = function(){
  this.temperature = 20;
  this.MIN_TEMP = 10;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.up = function() {
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
  this.temperature = 20
};
