function submit(){
    var ele=document.getElementsByName("gender");
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
        var gender=(ele[i].value); 
    }  
    var table= document.getElementById("mtab");
    var fname=document.getElementById("fname").value;
    while(fname==""){
        fname=prompt("Enter first name");
    }

    var lname=document.getElementById("lname").value;
    while(lname==""){
        lname=prompt("Enter last name");
    }
    var name= fname+" "+lname;

    var email= document.getElementById("email").value;
    var phn= document.getElementById("phn").value;
    var age= document.getElementById("age").value;
    while(phn.toString().length!=10){
       phn=prompt("Enter 10 digit number");
    }
    while(age<1 || age >110){
       age=prompt("Enter valid age");
    }

    while(typeof(gender)=="undefined"){
        alert("Select gender");
         
    }

    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
          gender=(ele[i].value);
    }

    var row="<tr><td><h4>"+name+"</h4></td>"+"<td><h4>"+email+"</h4></td>"+"<td><h4>"+phn+"</h4></td>"+"<td><h4>"+gender+"</h4></td>"+"<td><h4>"+age+"</h4></td></tr>";
    table.innerHTML+=row;
    res();
}
var data=null
var input=document.getElementById("age");
input.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        submit();
    }
})

function res(){
    document.getElementById("form").reset();
}