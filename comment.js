//add event listner to the post button
document.getElementById('btn-post').addEventListener('click', function(){
//get the comment inside the text area
const commentBox = document.getElementById('new-comment'); 
const newComment = commentBox.value ;
//step 3 : set the comment inside the comment container
// 1. get the comment container
// 2. create a new element (p tag)
// 3. set the text of the comment as innerText of the p tag
// 4. add the p tag using appendChild
const commentContainer = document.getElementById('comment-container');
const p = document.createElement('p');
p.innerText = newComment;
commentContainer.appendChild(p);

});