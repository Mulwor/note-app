// ! =======================================================
let a = { "text": "Hello world", "color": 'red' }
let b = { "fontSize": "24px", __proto__: a }

console.log(a);
console.log(b);
console.log(b.text);
a.text = "Change hello world on hi"
console.log(b.text);

// ! =======================================================
let c = {
  "text": "Hello world", 
  "color": 'red',
  "show": function() {
    console.log(this.color);
  }
}
let d = { "fontSize": "24px", __proto__: c }
console.log(d);
d.show();             // red
d.color = "green";
d.show();             // green

// ! =======================================================
let e = {
  "text": "Hello world", 
  "color": 'red',
  "show": function() {
    console.log(this.fontSize);
  }
}

let f = { "fontSize": "24px", __proto__: e }

console.log(f);
f.show();             // "fontSize": "24px"
e.show();             // undefined

// ! =======================================================
let g = {
  "text": "Hello world", 
  "color": 'red',
  "bold": true,
  "show": function() {
    console.log(this.fontSize);
  }
}
let h = { "fontSize": "24px", __proto__: g }
let i = { "fontFamily": "Verdana", __proto__: h }

console.log(i)
console.log(i.bold)

// ! =======================================================
let j = {
  "text": "Hello world", 
  "color": 'red',
  "bold": true,
  "show": function() {
    console.log(this.fontSize);
  }
}

let k = { "fontSize": "24px", __proto__: j }
k = 5
let l = { "fontFamily": "Verdana", __proto__: k }

console.log(i)
console.log(i.bold)                             // undefined
console.log(i.hasOwnProperty("fontFamily"))     // true
console.log(i.hasOwnProperty("bold"))           // undefined