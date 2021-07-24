const title = document.querySelector ('#title');
const comment = document.querySelector ('#comment');
const btn = document.querySelector ('.btn');

btn.addEventListener('click', function (e) {
    e.preventDefault();
   if( title.value == "" && comment.value ==""){

   alert ('please enter value');
}
 
else {
    const newRow = document.createElement('tr');
    var newTitle =document.createElement('th');
    newTitle.innerHTML= title.value; 
newRow.appendChild(newTitle);
//for comment
var newStory = document.createElement('th');
newStory.innerHTML= comment.value; 
newRow.appendChild(newStory);



booklist.appendChild(newRow);
}

});