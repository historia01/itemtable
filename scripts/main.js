/*
variable map
——————————————————————————————————————————————————————————————————————
11              21              a  op  b           d                e
——      ∓       ——      =       ————————  =    g  ——      =     g  ——
12              22                  c              c                f
——————————————————————————————————————————————————————————————————————
——————————————————————————————————————————————————————————————————————
A                C              E  op  F          RA                RC
——      ∓       ——      =       ————————  =    g  ——      =     g   ——
B                D                  G             RB                RD
——————————————————————————————————————————————————————————————————————
                                    op                          g
                                    + = 1                       + = 1
                                    - = 0                       - = 0
a = 0, b = 1, c = 2, d = 3, e = 4, f = 5, g = 6, c(abs) = 7, d(abs) = 8, e(abs) = 9, f(abs) = 10         
*/

function printFraction(a, b, c, d, e){
    let _11 = a;//$('#numberA').val();
    let _12 = b;//$('#numberB').val();
    let _21 = c;//$('#numberC').val();
    let _22 = d;//$('#numberD').val();
    let _op = e;//(e == 1 ? 1 : 0);
    var fractionResults = solveFraction(_11, _12, _21, _22, _op);
    $('#numberE').val(fractionResults[0]);
    $('#numberF').val(fractionResults[1]);
    $('#numberG').val(fractionResults[2]);
    $('#numberRA').val(fractionResults[8]);
    $('#numberRB').val(fractionResults[2]);
    $('#numberRC').val(fractionResults[9]);
    $('#numberRD').val(fractionResults[10]);
    $('.resultOperator').text((fractionResults[6]==1)?'+ ————':'- ————');
    $('#aFrac').text('Fraccion Nº1\t| ' + _11 + '/' + _12)
    $('#bFrac').text('Fraccion Nº2\t| ' + _21 + '/' + _22)
    $('#rFrac').text('Resultado\t| ' + fractionResults[4] + '/' + fractionResults[5])
}

function solveFraction(param11, param12, param21, param22, paramOp){
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    if(param12 == param22){
        a = param11;
        b = param21;
        c = param22;
    }
    else {
        a = param11 * param22;
        b = param12 * param21;
        c = param12 * param22;
    }
    console.log(typeof a);
    //let d = (paramOp == 1) ? Number(a) + Number(b) : (Number(a) - Number(b));
    if(paramOp == 1){
        d = Number(a) + Number(b);
        $(".opSign").text("+");
        //console.log("operation Add" + d)
    }
    else {
        d = Number(a) - Number(b);
        $(".opSign").text("-");
        console.log("operation Substract" + d)
    }
    let e = ((math.abs(d*c))/(math.gcd(((d<0)?d*-1:d),c)))/c;
    let f = ((math.abs(d*c))/(math.gcd(((d<0)?d*-1:d),c)))/d;
    let g = (e < 0 || f < 0 ) ? 0 : 1;
    return [a, b, c, d, e, f, g, math.abs(c), math.abs(d), math.abs(e), math.abs(f)]
};
$(document).ready(function() {
    $('.animContainer').animate({opacity: 0}, 0);
    $("#opPlus").css("color", "#7086ff");
    $("#numberA").val("1");
    $("#numberB").val("3");
    $("#numberC").val("2");
    $("#numberD").val("4");
    $('input[name="operators"][value="yes"]').prop('checked', true);
    $("#compareButton").click(function() {
        let _11 = $('#numberA').val();
        let _12 = $('#numberB').val();
        let _21 = $('#numberC').val();
        let _22 = $('#numberD').val();
        let _op = ($("input[name='operators']:checked").val() == "yes" ? 1 : 0);
        var fractionResults = solveFraction(_11, _12, _21, _22, _op);
        for(let i = 0; i<fractionResults.length; i++){
            console.log(`${fractionResults[i]}\n`)
        };
        $('#numberE').val(fractionResults[0]);
        $('#numberF').val(fractionResults[1]);
        $('#numberG').val(fractionResults[2]);
        $('#numberRA').val(fractionResults[8]);
        $('#numberRB').val(fractionResults[2]);
        $('#numberRC').val(fractionResults[9]);
        $('#numberRD').val(fractionResults[10]);
        $('.resultOperator').text((fractionResults[6]==1)?'+ ————':'- ————');
        $('#aFrac').text('Fraccion Nº1\t| ' + _11 + '/' + _12)
        $('#bFrac').text('Fraccion Nº2\t| ' + _21 + '/' + _22)
        $('#rFrac').text('Resultado\t| ' + fractionResults[4] + '/' + fractionResults[5])
    });
    $("#clearButton").click(function() {
        $('#numberA').val('');
        $('#numberB').val('');
        $('#numberC').val('');
        $('#numberD').val('');
        $('#numberE').val('');
        $('#numberF').val('');
        $('#numberG').val('');
        $('#numberRA').val('');
        $('#numberRB').val('');
        $('#numberRC').val('');
        $('#numberRD').val('');
        $(".opSign").text('±');
        $("#numberA").css("border-color", "#3b200b");
        $("#numberA").css("background-color", "#4d2d14");
        $("#numberB").css("border-color", "#3b200b");
        $("#numberB").css("background-color", "#4d2d14");
        $("#numberC").css("border-color", "#3b200b");
        $("#numberC").css("background-color", "#4d2d14");
        $("#numberD").css("border-color", "#3b200b");
        $("#numberD").css("background-color", "#4d2d14");
        $("#numberRA").css("border-color", "#3b200b");
        $("#numberRA").css("background-color", "#4d2d14");
        $("#commentHeader").html('Bienvenido a<br>Camilito te Educa!');
        $("#commentPa1").html('');
        $('#aFrac').text('¡Intenta Resolver Algo Primero!')
        $('#bFrac').text('')
        $('#rFrac').text('')
        $('.animContainer').animate({opacity: 0}, 500);
        $("#opMinus").css("color", "white");
        $("#opPlus").css("color", "white");
        $("#operatorAdd").prop("checked", true);
        $("#opPlus").css({
            "color" : "#7086ff"
        });
        $("#fraction1").css("display", "unset");
        $("#fractionOperator").css("display", "unset");
        $("#fraction2").css("display", "unset");
        $("#opMinus").css({
            "color" : "white"
        });


        setTimeout(function(){
            $('#animLine1').css({
                "transform" : "rotate(-23deg)", 
                "top" : "180%"
            });
            $('#animLine2').css({
                "transform" : "rotate(24deg)",
                "top" : "59%"
            });
            $('#animLine3').css({
                "display" : "unset"
            });   
        }, 900); 
    });
});