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

  describe('when power saving mode is off', function() {
    it('has a max temp of 32 degrees', function() {
      thermostat.turnOffPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemperature()).toEqual(32);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.modePowerSaving = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
