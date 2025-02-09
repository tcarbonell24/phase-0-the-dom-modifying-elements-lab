// Write your code here!
document.getElementById('main').remove('main');

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Thomas is the champion";


document.body.append(newHeader);