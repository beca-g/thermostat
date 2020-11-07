'use strict';

describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
      thermostat = new Thermostat();
  })

  it('it has a default temp of 20', function() {
    expect(thermostat.currentTemp()).toEqual(20)
  })

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10)
  })

  it('can increase the temperature', function() {
    for (var i = 0; i < 2; i++) {
      thermostat.up();
    }
    expect(thermostat.currentTemp()).toEqual(22)
  })

  it('can decrease the temperature', function() {
    for (var i = 0; i < 2; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(18)
  })

  it('has a power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can turn off the power saving mode', function() {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  })

  it('can turn the power saving mode back on', function() {
    thermostat.turnOffPowerSavingMode();
    expect(thermostat.turnOffPowerSavingMode()).toBe(false);
    thermostat.turnOnPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  })

  it('can reset the temperature to 20 degrees', function() {
    thermostat.reset();
    expect(thermostat.currentTemp()).toEqual(20);
  })

  describe('displaying energy usage levers', function() {
    it('can return energy usage when below 18 degrees', function() {
      for (var i = 0; i < 2; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    })

    it('can return the energy usage as medium-usage when between 18-25 degrees', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })

    it('can return the energy usage as high-usage when more than 25 degrees', function() {
      thermostat.turnOffPowerSavingMode();
      for (var i = 0; i < 10; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })

  describe('when power saving mode is on', function() {
    it('will have a maximum temperature of 25 degrees when power saving mode is ON', function() {
      thermostat.turnOnPowerSavingMode();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(25);
    })
  })

  describe('when power saving mode is off', function() {
    it('when the power saving mode is off it has a max temp of 32 degrees', function() {
      thermostat.turnOffPowerSavingMode();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(32);
    })
  })
})