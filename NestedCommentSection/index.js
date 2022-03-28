var clear = document.getElementById('clear');
var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');

clear.onclick = function() {
    document.querySelector('textarea').value="";
    return false;
}

feild.onfocus = function() {
    this.setAttribute('placeholder',' ');
    btn.style.display = "block";
    
}
feild.onblur = function() {
    this.setAttribute('placeholder',backUp);
}

const commentContainer = document.getElementById('allComments');
document.getElementById('addComments').addEventListener('click', function (ev) {
   addComment(ev);
});

function addComment(ev) {
    let commentText, wrapDiv;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    const dislikeButton = document.createElement('button');
    dislikeButton.innerHTML = 'Dislike';
    dislikeButton.className = 'dislikeComment';
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    console.log(ev.target.parentElement);
    if(hasClass(ev.target.parentElement, 'container')) {
        const wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapper';
        wrapDiv.style.marginLeft = 0;
        commentText = document.getElementById('comment').value;
        document.getElementById('comment').value = '';
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "rgb(229, 231, 235)";
        wrapDiv.append(textBox, replyButton, likeButton, dislikeButton, deleteButton);
        commentContainer.appendChild(wrapDiv);
    } else {
        wrapDiv = ev.target.parentElement;
        commentText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = commentText;
        textBox.style.backgroundColor = "paleturquoise";
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, dislikeButton, deleteButton);
    }
    setOnLocalStorage();
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;

}
document.getElementById('allComments').addEventListener('click', function (e) {
    if (hasClass(e.target, 'reply')) {
        const parentDiv = e.target.parentElement;
        const wrapDiv = document.createElement('div');
        wrapDiv.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 15).toString() + 'px';
        wrapDiv.className = 'wrapper';
        const textArea = document.createElement('textarea');
        textArea.style.marginRight = '20px';
        const addButton = document.createElement('button');
        addButton.className = 'addReply';
        addButton.innerHTML = 'Add';
        const cancelButton = document.createElement('button');
        cancelButton.innerHTML = 'Cancel';
        cancelButton.className='cancelReply';
        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);

    } else if(hasClass(e.target, 'addReply')) {
        addComment(e);
    } else if(hasClass(e.target, 'likeComment')) {
        const dislikeBtnValue1 = e.target;
         dislikeBtnValue1.onclick = function() {
        const likeBtnValue = e.target.innerHTML;
         e.target.innerHTML = likeBtnValue !== 'Like' ? Number.parseInt(likeBtnValue) + 1 : 1;
         e.target.className = "fa fa-thumbs-up";
         }
    } else if(hasClass(e.target, 'dislikeComment')) {
         const dislikeBtnValue1 = e.target;
         dislikeBtnValue1.onclick = function() {
            const dislikeBtnValue = e.target.innerHTML;
         e.target.innerHTML = dislikeBtnValue !== 'Dislike' ? Number.parseInt(dislikeBtnValue) + 1 : 1;
         e.target.className = "fa fa-thumbs-down";
         }

    } else if(hasClass(e.target, 'cancelReply')) {
        e.target.parentElement.innerHTML = '';
        
    } else if(hasClass(e.target, 'deleteComment')) {
        e.target.parentElement.remove();
    }
});
