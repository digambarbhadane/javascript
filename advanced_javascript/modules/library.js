export let message = "Es6 Modules";

export function user(name) {
  //   console.log(`Hello ${name}`);
  return `hello ${name}`;
}

class test {
  constructor() {
    console.log("constructor method");
  }
}

export { test };
