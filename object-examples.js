let aboutMe = {
  hometown: 'London',
  hair: 'brown',
};

// let myHair = aboutMe['hair'];

// let myProperty = 'hair';

// let myHair = aboutMe['myProperty'];

// aboutMe.hair = 'blue';

// aboutMe.gender = 'Male';

// delete aboutMe.gender;

console.dir( aboutMe );

/*----*/



let user = {
  name : 'Luke',
  age: 30,
}

let objKeys = Object.keys( user );
console.log( objKeys );

let objValues = Object.values( user );
console.log ( objValues );

let objEntries = Object.entries( user );
console.log( objEntries );

// Loop over values // for of 
for ( let value of Object.values( user ) ) {
  console.log( value );
}

for ( let value of Object.keys( user ) ) {
  console.log( value );
}

/*----*/

let barkleyTheDog = {

  age: 3,

  furColour: 'white',

  bark() {
    console.log(' bark bark ');
  },

  eat( food ) {
    console.log( 'Yum, I love ' + food );
  },

  sleep( numMinutes ) {
    for (let i = 0; i < numMinutes; i++) {
      console.log('z');
    }
  },

};

barkleyTheDog.eat('brown mushy stuff');
barkleyTheDog.sleep( 10 );
barkleyTheDog.bark();