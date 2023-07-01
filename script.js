function valid(){
    const pass=document.forms['form1']['pass'];
    const cpass=document.forms['form1']['cpass'];
    const phone=document.forms['form1']['phone'];
    if(pass.value!==cpass.value){
        cpass.parentNode.classList.add('wrongmatch');
        return false;
    }
    if(phone.value.length!=10){
        phone.parentNode.classList.add('wrongphone');
        return false;
    }

    return true;
}