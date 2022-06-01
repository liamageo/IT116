console.dir(document);

// Gives the domain of the web page.
console.log(document.domain);
// Gives the URL of the web page.
console.log(document.url);

// THE DOCUMENT ATTRIBUTE CAN ACCESS DIFFERENT ELEMENTS.

// console.log(document.title);

// console.log(document.doctype);

// console.log(document.head);

// consolde.log(document.body);

// console.log(document.all);

// console.log(document.all[10]);

// document.all[10].textContent = "I am changing the header";

// console.log(documents.forms);

// console.log(document.links);
// console.log(document.images);

////////////////////////////
//GetElementByID

// console.log(document.getElementById('header-title'));

// Creating the variable
// let headerTitle= document.getElementById('header-title');

// console.log(headerTitle);

// headerTitle.textContent = "Changed the Title again."
// headerTitle.innerText = "Hello Changed You Again"

// headerTitle.style.color ="hotpink";

///////////////////////////////////
/////////GetElementByClassName

var items = document.getElementsByClassName('list-group-item');

console.log(items);

//Referencing the items by their index
// items[1].style.backgroundColor ='yellow';
// items[1].style.fontWeight = 'bold';
// items[1].textContent = 'Hello'
// items[1].style.color = 'blue';

// items[0].style.backgroundColor ='pink';
// items[0].style.fontWeight = 'bold';
// items[0].textContent = 'Malo'
// items[0].style.color = 'green';

// items[2].style.backgroundColor ='black';
// items[2].style.fontWeight = 'bold';
// items[2].textContent = 'Talofa'
// items[2].style.color = 'beige';


// Creating a For Loop while working with arrays; Helps with running the same code constantly, with a different value.
// for (let i= 1; i <=10; i++) {
//     console.log(i);
// }

// // For Loop;Counting twice over using i+=2
// for (let i = 1; i <=20; i+=2) {
    
//     console.log(1);
// }

// // For Loop;Counting twice under using i-=2
// for (let i = 100; i>=0; i-=2) {

//     console.log(i);
// }

// // 
// const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky','Nibbles','Kibbles'];
// for (let i = 0; i < myDiamonds.length; i++) {
//     console.log(i, myDiamonds[i]);
// }

// Add comments
// for(var i=0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "Changing the List Items";
//     items[i].style.color = 'white';
// }

//////////////////////GetElementsByTagName

// Calls all the 
var li = document.getElementsByTagName('li');

console.log(li);
console.log(li[1]);

li[1].textContent = "Hello 2 Now";
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor ='green';
li[1].style.color = 'white';
