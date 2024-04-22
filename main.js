const nome=document.getElementById('#name');
const tel=document.getElementById('#tel');
const email=document.getElementById('#email');
const mensagen=document.getElementById('#mensagen');

$(document).ready(function(){
    $('#name').mask('',{
        placeholder: 'Ex: Joao Pinto'
    });
    $('#tel').mask('(00) 00000-0000',{
        placeholder:'(69) 7894-5321'
    });
    $('#email').mask('',{
        placeholder:'ex: exemplo@exmplo.com'
    })

});
$('form').validate({
    rules:{
        name:{
            required:true
        },
        email:{
            required:true,
            email:true
        },
        tel:{
            required:true
        },
        mensagen:{
            required:true
        }
    },
    messages:{
        name:'Por favor digite seu nome',
        tel:'Por favor digite seu numero',
        email:'Por favor digite seu email',
        mensagen:'Por favor digite sua pedido'
    }

})
