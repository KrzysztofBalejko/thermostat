function Thermo(){
  this.def_temp = 20;
  this.min_temp = 10;
  this.max_temp = 32;
  this.powersaving_on();
};

Thermo.prototype.temperature = function(){
  return this.def_temp;
};

Thermo.prototype.up = function(){
  if (this.def_temp < this.max_temp ) {
    this.def_temp++
  } else {
    return this.def_temp;
  };
};

Thermo.prototype.down = function(){
  this.def_temp -= 1;
};

Thermo.prototype.powersaving_on = function (){
  this.max_temp = 25;
  return this.max_temp;
};

Thermo.prototype.powersaving_off = function(){
  this.max_temp = 32;
  return this.max_temp;
};
