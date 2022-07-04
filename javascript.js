function textbox()
          {
          var name= document.getElementById("fname").value
          var correct_name=/^[A-Za-z]+$/ 
   
           if(name.match(correct_name))
           {
            document.getElementById("message").innerHTML=""
            }
            else{
             document.getElementById("message").innerHTML="Invalid name"
             }
          }

        function textbox2(){
          var name= document.getElementById("lname").value
          var correct_name=/^[A-Za-z]+$/ 
   
           if(name.match(correct_name)){
              document.getElementById("message").innerHTML=""
          }
          else{
              document.getElementById("message").innerHTML="Invalid name"
            }
        }

        function textbox3(){
          var len= document.getElementById("subject").value
          if(len.length===20){
              document.getElementById("limit").innerHTML="You reached the limit."
            }
          else{
            document.getElementById("limit").innerHTML="You have written "+len.length+" characters, you have "+(500-len.length)+" characters left."
          }
        }