// By ID
let hobbielist = document.getElementById('hobby-list');
// console.log(hobbielist);

// by Tag Name
let hobbies = document.getElementsByTagName('li');
// console.log(hobbies);

// By Class Name
let alsoHobbies = document.getElementsByClassName('hobby');
// console.log(alsoHobbies);

// By CSS Query
let firstHobby = document.querySelector('ul li.hobby');
// console.log(firstHobby);

let againAlsoHobbies = document.querySelectorAll('ul li.hobby');
// console.log(againAlsoHobbies);

// document.getElementById( id );
// document.getElementsByTagName( tagName );
// document.getElementsByClassName( className );

// document.querySelector( cssQuery );
// document.querySelectorAll( cssQuery );


// Returning element vs Array of Elements

// let firstHobbyItem = alsoHobbies[0];

// console.log(firstHobbyItem);


// let uxDesignImage = document.getElementById('ux-design');
// let oldImageSource = uxDesignImage.src;

//     uxDesignImage.src = 'https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80';

// uxDesignImage.className = 'border';

// Manipulating a DOM Node's Styles

// let pageNode = document.body;
// pageNode.style.color = 'red';
// pageNode.style.backgroundColor = 'pink';
// pageNode.style.paddingTop = '10px';
// pageNode.innerHTML = "<h1>oh, no! Everything is gone! </h1>";

// pageNode.innerHTML += "p.s. Please do write back.";
// console.log( pageNode.innerHTML );


// let logo = document.querySelector('.logo');

//     logo.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

let body = document.body;
// let newImg = document.createElement('img');
//     newImg.src = 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80';
//     newImg.style.border = '10px solid orange';
//     newImg.style.width = '400px';
//     body.appendChild( newImg );

// Class Exercise

// 1 . Create a new paragraph
let newParagraph = document.createElement('p');

// 2. Create a text node with some text in it
let newText = document.createTextNode('Hello world');

// 3. add the text to the paragraph node
newParagraph.appendChild( newText );

// 4. add the paragraph to the body
body.appendChild( newParagraph );