const allStar = document.querySelectorAll('.star');
allStar.forEach( (star,i) => {
let current_rating = document.querySelector('.current-rating');
    star.onclick = function() {
        let current = i + 1;
        current_rating.innerHTML = `${current} of 5`;
        allStar.forEach( (star,j) => {
            if (current >= j+1) {
                star.innerHTML = '&#9733';
            }
            else {
                star.innerHTML = '&#9734';
            }
        })
    }
})

const allStar2 = document.querySelectorAll('.star2');
let current_rating2 = document.querySelector('.current-rating2');
allStar2.forEach( (star2, i) => {
    star2.onclick = function(){
        let current2 = i + 1;
        current_rating2.innerHTML = `${current2} of 5`;
        allStar2.forEach( (star2, j) => {
            if (current2 >= j+1) {
                star2.innerHTML = '&#9733';
            }
            else {
                star2.innerHTML = '&#9734';
            }
        })
        return current2;
    }
})

const allStar3 = document.querySelectorAll('.star3');
let current_rating3 = document.querySelector('.current-rating3');
allStar3.forEach( (star3, i) => {
    star3.onclick = function(){
        let current3 = i + 1;
        current_rating3.innerHTML = `${current3} of 5`;
        allStar3.forEach( (star3, j) => {
            if (current3 >= j+1) {
                star3.innerHTML = '&#9733';
            }
            else {
                star3.innerHTML = '&#9734';
            }
        })
    }
})

const allStar4 = document.querySelectorAll('.star4');
let current_rating4 = document.querySelector('.current-rating4');
allStar4.forEach( (star4, i) => {
    star4.onclick = function(){
        let current4 = i + 1;
        current_rating4.innerHTML = `${current4} of 5`;
        allStar4.forEach( (star4, j) => {
            if (current4 >= j+1) {
                star4.innerHTML = '&#9733';
            }
            else {
                star4.innerHTML = '&#9734';
            }
        })
    }
})

const allStar5 = document.querySelectorAll('.star5');
let current_rating5 = document.querySelector('.current-rating5');
allStar5.forEach( (star5, i) => {
    star5.onclick = function(){
        let current5 = i + 1;
        current_rating5.innerHTML = `${current5} of 5`;
        allStar5.forEach( (star5, j) => {
            if (current5 >= j+1) {
                star5.innerHTML = '&#9733';
            }
            else {
                star5.innerHTML = '&#9734';
            }
        })
    }
})
