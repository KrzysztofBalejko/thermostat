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
    expect(thermostat.powersaving_on()).toBeLessThan(26);
  });




});
