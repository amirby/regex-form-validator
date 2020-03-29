// validation script here
$(document).ready(function(){
    // check username
    $('#username').keyup(function(){
       
        let regname = new RegExp(/^[a-z 0-9]{5,12}$/, 'gi');
        check('#username',regname);
    })

// check email   
   $('#email').keyup(function(){
       let regmail =new RegExp(/^([\w-.]+)(@\w+)(\.\w+)$/, 'gi');
       check("#email",regmail);
   })               /
// check password  ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([^\W]){5,12}$
   $("#password").keyup(function(){
       let regpassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([^\W]){5,12}$/ , 'gi');
       check("#password", regpassword) ;
   })

// check phone number

$("#phone").keyup(function(){
    let regphone = new RegExp(/^(\d){13}$/ , 'gi');
    check("#phone", regphone) ;
})

// check card
$("#card").keyup(function(){
    let regcard = new RegExp(/^(\d){2}[-](\d){2}[-](\d){2}$/ , 'gi');
    check("#card", regcard) ;
})

}) 



// helper function
function check(id,reg){

    var result = $(id).val()
    if (reg.test(result)){
        if ( $(id).hasClass("unvalid")){
            $(id).removeClass('unvalid')
            $(id).addClass('valid')
        }else {
            $(id).addClass('valid')
        }
    }
    else {
        if ( $(id).hasClass('valid')){
            $(id).removeClass('valid')
            $(id).addClass('unvalid')
        }else {
            $(id).addClass('unvalid')
        }
    }
}