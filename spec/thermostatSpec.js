'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach( function() {
    thermostat = new Thermostat;
  });

  it('has an initial temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('temperature is increased', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });
});
