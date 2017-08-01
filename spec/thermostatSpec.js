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

  it('temperature is decreased', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for(var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  })
});
