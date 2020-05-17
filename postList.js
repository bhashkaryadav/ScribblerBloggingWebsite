var modalOpen =document.getElementsByClassName('modal-bg-del')[0];

var  divone =document.getElementById('del-oneB');
var  divtwo =document.getElementById('del-twoB');
var  divthree =document.getElementById('del-threeB');
var  divfour =document.getElementById('del-fourB');
var  divfive =document.getElementById('del-fiveB');




var closeDelBox =document.getElementById('no-btn');
var YesDelBox =document.getElementById('yes-btn');


//opening modal to delete




   function openModalDel(Id){
             x =Id;
            modalOpen.style.display='block';
            console.log(x); 
            return x;  
            }







//close delete box

closeDelBox.addEventListener('click',closeModalDel);
function closeModalDel(){
    modalOpen.style.display='none';
    console.log("Modal closed");
}






//delete post 
YesDelBox.addEventListener('click',DelPost);
function DelPost(){
    
    modalOpen.style.display='none';
    divone.style.display='none';
    console.log('deleted');
}




