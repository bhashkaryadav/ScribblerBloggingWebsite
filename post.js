 var i=0;

 
 function edit()
   {

       switch(i)
       {

       
        
            case 0:
                var heading=document.getElementById('blog-heading');
                var editableHeading =  document.createAttribute("contenteditable");
                editableHeading.value = "true";
                heading.setAttributeNode(editableHeading);
                var y= document.getElementById('blog-heading');
                y.style.border=" 2px solid red";

            

                var property =document.getElementById('blogArea');
                var editable =  document.createAttribute("contenteditable");
                editable.value = "true";
                property.setAttributeNode(editable);
                var template= '<span id="edit-btn" class="btns" onclick="edit()">'+'<i class="fas fa-edit">'+'</i> Save </span>'; 
                document.getElementById('edit-btn').innerHTML=template;
                var x= document.getElementById('blogArea');
                x.style.border=" 2px solid red";
            
               console.log("editable") ;
                console.log(i);
                break ;
            
            case 1 :
                var property2 =document.getElementById('blogArea');
                var template= '<span id="edit-btn" class="btns" onclick="edit()">'+'<i class="fas fa-edit">'+'</i> Save </span>'; 
                document.getElementById('edit-btn').innerHTML=template;
                property2.removeAttribute("contenteditable"); 
                document.getElementById('blog-heading').style.border="none";
                document.getElementById('blogArea').style.border="none";
                console.log("Helo")
                
                console.log(i);
                break;
            
        }  
     i++;
     
        return i;
    }



    
    var likeCount =1;
    function liked(){
        document.getElementById('timesLiked').innerHTML=likeCount+" people liked this post";
        likeCount++;
        return likeCount;
    }


    function comment(){

        var commentVal = document.getElementById('comment-area').value;

        if(commentVal=="")
        {
            alert("No comment added");
            return 0;
        }

        else{

            var node = document.createElement("p");
            var NewNode = document.createTextNode(commentVal); 
            node.appendChild(NewNode);
            document.getElementById("allComment-area").appendChild(node);
            node.style.borderLeft="5px solid grey";
            node.style.borderRight="5px solid grey";
            node.style.borderTop="20px solid grey";
            node.style.borderBottom="20px solid grey";
            node.style.width="65%";
            node.style.padding="10px";
            return 0;
        }
       
    }
  