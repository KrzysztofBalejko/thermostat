function Thermo(){
  this.def_temp = 20;
  this.min_temp = 10;
  this.max_temp = 32;
  this.powersaving_on();
};
// Thermo.prototype = {
//   temperature: function() {
//     //dashfdkhskf
//   },
// }
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
  if (this.def_temp > this.min_temp) {
    this.def_temp -= 1;
  } else {
    return this.def_temp;
  };
};

Thermo.prototype.powersaving_on = function (){
  this.max_temp = 25;
  // return this.max_temp;
};

Thermo.prototype.powersaving_off = function(){
  this.max_temp = 32;
};

Thermo.prototype.reset = function(){
   this.def_temp = 20;
};

Thermo.prototype.usage = function(){
  if (this.def_temp < 18) {
    return 'green';
  } else if (this.def_temp > 18 && this.def_temp < 25 ) {
    return 'black';
  } else if (this.def_temp >= 25) {
    return 'red';
  };
};
