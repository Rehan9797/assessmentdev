
var x=document.getElementById('user');
var err=document.getElementById('err');
var p=document.getElementById('pass');
var err1=document.getElementById('err1');
 



function validatename(){
    if(x.value.trim()==""){
        err.innerText="Username cannot be empty";
        x.style.border="2px soild red";
        return false
    }
    else if(x.value.length<3){
        err.innerText="User should be more than 3 characters";
        x.style.border="2px solid green";
        return false

    }
    else{
        err.innerText="";
        return true
    }
    
}
function validatepass(){
    if(p.value.trim()==""){
        err1.innerText="Password cannot be empty";
        p.style.border="2px soild red";
        return false
    }
    else if(p.value.length<4){
        err1.innerText="Password should be more than 3 characters";
        p.style.border="2px solid green";
        return false

    }
    else{
        err1.innerText="";
        return true
    }
    
}


function validateform(){
    if(!validatename()||!validatepass()){
        return false
    }
    else{
        return true
    
    }
}
  
