$(document).ready(function () {
    $('#BotaoID').click(function () {
        let vp = $("#formID #vp_field").val();
        let tj = $("#formID #tj_field").val();
        let periodo = $("#formID #periodo_field").val();
        let vf = $("#formID #vf_field").val();
        console.log(vp);
        console.log(tj);
        console.log(periodo);
        console.log(vf);
        let listaDeValores = [vp,tj,periodo,vf];
        let cont=0;
        let vazio="";
        let result = 0;
        for (let i=0; i<4; i++){
            if(listaDeValores[i]===""){
                cont++;
                if(i===0){
                    vazio="vp";
                }
                if(i===1){
                    vazio="tj";
                }
                if(i===2){
                    vazio="periodo";
                }
                if(i===3){
                    vazio="vf";
                }
            }
        }

        vp = parseFloat(vp)
        tj = parseFloat(tj)
        periodo = parseFloat(periodo)
        vf = parseFloat(vf)

        if(cont>=2){
            window.alert(" Deve haver apenas 3 valores.");
        }
        else if (cont===0){
            window.alert(" Você deve inserir 3 dos valores, para calcular o 4º.");
        }
        else {
            switch (vazio) {
                case"vp":
                    result = vf / (Math.pow((1 + tj), periodo));
                    break;
                case"tj":
                    result = (Math.pow(vf / vp, 1 / periodo) - 1) * 100;
                    break;
                case"periodo":
                    result = Math.ceil(Math.log(vf / vp) / Math.log(1 + tj));
                    break;
                case"vf":
                    result = vp * Math.pow((1 + tj), periodo);
                    break;
                default:
                    result = 0;
                    break;
            }
        }
        console.log(result);
    })
});


/*(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).val().trim() == ''){
            return false;
        
        }
        /*else {
            ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                    return false;
                }
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery)*/