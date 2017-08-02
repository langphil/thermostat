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
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemperature()).toEqual(10);
  })

  it('can reset the temperature to default', function() {
    thermostat.resetTemperature();
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('can turn off power saving mode', function() {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.isPowerSavingOn()).toBe(false);
  });

  it('can turn off then on power saving mode', function() {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.isPowerSavingOn()).toBe(false);
    thermostat.turnOnPowerSavingMode();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a max temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(25);
    });
  });
});
