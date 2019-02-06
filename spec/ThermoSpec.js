describe('Thermo', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermo
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increase the temperature with an up function', function(){
    thermostat.up();
    expect(thermostat.def_temp).toBeGreaterThan(20);
  });

  it('decrease the temperature with a down function', function(){
    thermostat.down();
    expect(thermostat.def_temp).toBeLessThan(20);
  });

  it('minimum temperature is 10 degrees', function(){
    expect(thermostat.min_temp).toEqual(10);
  });

  it('power saving mode is on, the maximum temperature is 25 degrees', function(){
    for (var i of Array(7).keys()){
      thermostat.up();
    };
    expect(thermostat.max_temp).toEqual(25);
  });

  it('power saving mode is off, the maximum temperature is 32 degrees', function(){
    thermostat.powersaving_on();
    thermostat.powersaving_off();
    expect(thermostat.max_temp).toEqual(32);
  });

  it('Power saving mode is on by default',function(){
    expect(thermostat.max_temp).toEqual(25);
  });

  it('resets the temperature to 20 with a reset function',function(){
    thermostat.reset();
    expect(thermostat.def_temp).toEqual(20);
  });

  it("thermostat's current energy usage", function(){
    thermostat.def_temp = 17;
    expect(thermostat.usage()).toEqual('green');
    thermostat.def_temp = 24;
    expect(thermostat.usage()).toEqual('black');
    thermostat.def_temp = 26;
    expect(thermostat.usage()).toEqual('red');
  });

});
