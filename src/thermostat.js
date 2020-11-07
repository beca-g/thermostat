'use strict';

class Thermostat {
    constructor() {
      this.DEFAULT_TEMPERATURE = 20;
      this.temperature = this.DEFAULT_TEMPERATURE;
      this.MIN_TEMP = 10;
      this.MAX_LIMIT_PSM_ON = 25;
      this.MAX_LIMIT_PSM_OFF = 32;
      this.powerSavingMode = true;
      this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
      this.HIGH_ENERGY_USAGE_LIMIT = 25;
    }

    currentTemp() {
      return this.temperature;
    }

    isMinTemp() {
      return this.temperature === this.MIN_TEMP;
    }

    isMaxTemp() {
      if (this.isPowerSavingModeOn() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
      }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    }

    isPowerSavingModeOn() {
      return this.powerSavingMode === true;
    }

    turnOffPowerSavingMode() {
      return this.powerSavingMode = false;
    }

    turnOnPowerSavingMode() {
      return this.powerSavingMode = true;
    }

    up() {
      if (this.isMaxTemp()) {
        return;
      }
      this.temperature += 1;
    }

    down() {
      if (this.isMinTemp()) {
        return;
      }
      this.temperature -= 1;
    }

    reset() {
      this.temperature = this.DEFAULT_TEMPERATURE;
    };

    energyUsage() {
      if (this.temperature <= 18) {
        return 'low-usage';
      } 
      if (this.temperature <= 25) {
        return 'medium-usage';
      } 
      return 'high-usage';
    };
};