describe('Thermo', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermo
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });



});
