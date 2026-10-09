const obj = {
  // window in browser
  a: this,
  // object itself
  b: function() { return this; },
  // it takes lexical scope - window
  c: () => this,
  // object itself
  d() { return this; },
  // object itself
  e: function() { return this.a; }
};