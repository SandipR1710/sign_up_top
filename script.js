function valid(){
    const pass=document.forms['form1']['pass'];
    const cpass=document.forms['form1']['cpass'];
    if(pass.value!==cpass.value){
        cpass.parentNode.classList.add('wrong');
        return false;
    }
    return true;
}