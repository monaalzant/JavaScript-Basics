// By ID
let hobbielist = document.getElementById('hobby-list');

// by Tag Name
let hobbies = document.getElementsByTagName('li');

// By Class Name
let alsoHobbies = document.getElementsByClassName('hobby');

// By CSS Query
let firstHobby = document.querySelector('ul li.hobby');

let againAlsoHobbies = document.querySelectorAll('ul li.hobby');



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

// console.log( pageNode.innerHTML );

let body = document.body;
// let newImg = document.createElement('img');
//     newImg.src = 'https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80';
//     newImg.style.border = '1px solid black';
//     newImg.style.width = '400px';
//     body.appendChild( newImg );

// Class Exercise

// 1 . Create a new paragraph
// 2. Create a text node with some text in it
// 3. add the text to the paragraph node
// 4. add the paragraph to the body