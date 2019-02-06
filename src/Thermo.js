function Thermo(){
  this.def_temp = 20;
  this.min_temp = 10;
};

Thermo.prototype.temperature = function(){
  return this.def_temp;
};

Thermo.prototype.up = function(){
  this.def_temp++
};

Thermo.prototype.down = function(){
  this.def_temp -= 1;
};
