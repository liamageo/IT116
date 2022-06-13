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

// var items = document.getElementsByClassName('list-group-item');

// console.log(items);

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

// 
// const myDiamonds = ['Snacky','Scary','Lily','IttyBitty','Pinchie','Piggy','Lanky','Nibbles','Kibbles'];
// for (let i = 0; i < myDiamonds.length; i++) {
//     console.log(i, myDiamonds[i]);
// }

// Using a for loop, we were able to change the style of listed items;Similar to CSS, but more convenient in my opinion.
// for(var i=0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "Changing the List Items";
//     items[i].style.color = 'white';
// }

//////////////////////GetElementsByTagName

// Changing styles of listed items using JS DOM
// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = "Hello 2 Now";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor ='green';
// li[1].style.color = 'white';

// for(var i = 0; i <li.length; i++) {
    
//     // No need to put 1, because the "i" represents all the listed items.
//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent= "I changed The Items From the DOM";
//     li[i].style.color= 'White';

// }


/////////////////////////////////////////////////////////////////////
///////////////////////////Query Selector:

// Creating another variable object, using the document class
// var header =document.querySelector('#main-header');
// header.style.borderBottom ='solid 4px hotpink';
// //
// var input = document.querySelector('input');
// input.value = "I just changed the text value in the input box.";

// // Using an attribute
// var submit = document.querySelector ('input[type="submit"]');
// submit.value = "HELLO BUTTON";

// // Example of calling the last child, on the webpage item 8 will be in blue because it's the last child 
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// // Example of nth-child and calling a specific number in our list group items. When we save and refresh our webpage, item list 2 will be displayed in a coral color.
// var otherItem = document.querySelector('.list-group-item:nth-child(2)');
// otherItem.style.color = 'coral';

////////////////////////////////////////////////////////////////////////////

// Using the DOM Inspector and reviewing console because we are calling the class, both class titles will show.
var titles = document.querySelectorAll('.title');
console.log(titles);

// Calling textContent, we're able to change the title
titles[0].textContent = 'Hey Monte, I changed the title again';

// Creating two different lists consisting of an even and odd nth-child variable for our listed items. 
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

// Creating a for loop that alters the colors of the nth-child variables. We applied the same color to both the even and odd variables, but applied different background colors.
for (var i = 0; i < odd.length; i++) {

    odd[i].style.backgroundColor ='grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
    odd[i].style.color = 'whitesmoke';
}