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



});
