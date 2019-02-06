function Thermo(){
  this.def_temp = 20;
};

Thermo.prototype.temperature = function(){
  return this.def_temp;
};
