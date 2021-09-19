

  
let popped = 0;
let life = 3;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "green"){
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

const firebaseConfig = {
    apiKey: "AIzaSyAez17Dq6sB6CXj8dYxptgyNQlZDaE1mhs",
    authDomain: "mini-hakhaton.firebaseapp.com",
    projectId: "mini-hakhaton",
    storageBucket: "mini-hakhaton.appspot.com",
    messagingSenderId: "780859568867",
    appId: "1:780859568867:web:edad5ea388d5b0e3ce8bd6"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();


function firbase(){
    const signInWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
      
        auth.signInWithPopup(googleProvider)
        .then(() => {
            alert('you are logged in');
        })
        .catch(error => {
          console.error(error);
        });
      }
}

firebase();


var firebase = document.getElementById("btn");
firebase.addEventListener("click",signInWithGoogle())