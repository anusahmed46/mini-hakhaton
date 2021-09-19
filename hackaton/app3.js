

  
let popped = 0;
let life = 3;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "red"){
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    } 
    else if(e.target.className === red){
        e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "fail!";
                popped++;
                removeEvent(e);
                checkAllPopped();

life--;            }

});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
    else if(life===0){
        location.href= "fail.html"

    }
};


 