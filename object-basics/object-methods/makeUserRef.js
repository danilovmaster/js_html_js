"use strict"
function makeUserRef() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUserRef();

console.log( user.ref.name );
