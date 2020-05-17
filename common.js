var modal= document.getElementsByClassName('modal-bg')[0];
var modal2 =document.getElementsByClassName('modal-bg')[1];
var modal3 =document.getElementsByClassName('modal-bg')[2];

var closebtn =document.getElementsByClassName('close-btn')[0];
var closebtn2 =document.getElementsByClassName('close-btn')[2];
var closebtn3 =document.getElementsByClassName('close-btn')[4];

var openModalBtn=document.getElementsByClassName('HeaderButtons')[0];
var openModalBtn2=document.getElementsByClassName('HeaderButtons')[1];
var openModalBtn3=document.getElementsByClassName('postButtons')[1];

//close buttons

closebtn.addEventListener('click',closeModal);
function closeModal(){
   modal.style.display='none';
   console.log("hello close modal");
}

closebtn2.addEventListener('click',closeModalTwo);
function closeModalTwo(){
    modal2.style.display='none';
    console.log("hello close modal two");
 }


 closebtn3.addEventListener('click',closeModalThree);
 function closeModalThree(){
     modal3.style.display='none';
     console.log("hello close modal three");
  } 


  //open buttons

openModalBtn.addEventListener('click',openModal);
function openModal(){
    modal.style.display='block';
    console.log("hello2 Modal open");
}

openModalBtn2.addEventListener('click',openModalTwo);
function openModalTwo(){
    modal2.style.display='block';
    console.log("helloSignIn");
}

openModalBtn3.addEventListener('click',openModalThree);
function openModalThree(){
    modal3.style.display='block';
    console.log("create post modal");
}



