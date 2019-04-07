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

        vp = parseFloat(vp);
        tj = parseFloat(tj)/100.0;
        periodo = parseFloat(periodo);
        vf = parseFloat(vf);

        if(cont>=2){
            window.alert(" Deve haver apenas 3 valores.");
        }
        else if (cont===0){
            window.alert(" Você deve inserir 3 dos valores, para calcular o 4º.");
        }
        else {
            switch (vazio) {
                case"vp":
                    if(document.getElementById('vp_field').placeholder==="Valor uniforme (R$)"){
                        result = vf/(Math.pow(1+tj,periodo)-1);
                        result = parseFloat(result).toFixed(2);
                        document.getElementById("vp_field").value = result.toString();
                    }
                    else {
                        result = vf / (Math.pow((1 + tj), periodo));
                        result = parseFloat(result).toFixed(2);
                        document.getElementById("vp_field").value = result.toString();
                    }
                    break;
                case"tj":
                    result = (Math.pow(vf / vp, 1 / periodo) - 1) * 100;
                    result = parseFloat(result).toFixed(2);
                    document.getElementById("tj_field").value = result.toString();
                    break;
                case"periodo":
                    result = Math.ceil(Math.log(vf / vp) / Math.log(1 + tj));
                    result = parseFloat(result).toFixed(2);
                    document.getElementById("periodo_field").value = result.toString();
                    break;
                case"vf":
                    result = vp * Math.pow((1 + tj), periodo);
                    result = parseFloat(result).toFixed(2);
                    document.getElementById("vf_field").value = result.toString();
                    break;
                default:
                    result = 0;
                    break;
            }
        }
        console.log(result);
    });
    $('#option1').click(function (){
        let vp_input_box = document.getElementById('vp_field');
        vp_input_box.placeholder = "Valor presente (R$)"
        console.log("dsads ")
    });
    $('#option2').click(function (){
        let vp_input_box = document.getElementById('vp_field');
        vp_input_box.placeholder = "Valor uniforme (R$)"
    });
});
