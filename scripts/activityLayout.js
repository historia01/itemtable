let endTime = 0;
let endact = false;
let ques = [0, 0, 0, 0, 0];
let mistakes = 0;
let accerts = 0;
let progress = 0;
let questionNumber = 1;
let verifyQuestion = false;
let correctValue = 0;
let activityType = 0;
let questionLimit = -1;
let timeLimit = -1;
let startActivity = false;
let operationType = 0;
let savingString = [0, 0];
let ranking = 0;
let activityNumber = 0;

let questions1 = [
    "¿Que elemento no se encuentra en una computadora?",
    "¿Cuál es el principal elemento del procesador?",
    "¿El elemento que se encuentra en las sueldas es?",
    "¿Cuál elemento se encuentra en las lineas del PCB?",
    "El case de la computadora esta hecha de:"
]

let answers1 = [
    "Boro",
    "Aluminio",
    "Cobre",
    "Silicio"
]

let answers2 = [
    "Cobre",
    "Plomo",
    "Silicio",
    "Oro"
]

let answers3 = [
    "Plata",
    "Cobre",
    "Estaño",
    "Hierro"
]


let answers4 = [
    "Oro",
    "Cobre",
    "Plata",
    "Estaño"
]

let answers5 = [
    "Acero",
    "Aluminio",
    "Plata",
    "Hierro"
]

let questions2 = [
    "¿Por qué el estaño es usado para sueldas?",
    "El cobre es excelente para usar en cables porque...",
    "¿Porque es el silicio usado en procesadores?",
    "¿Que causa el plomo al ser humano?",
    "Se usa oro en los pines del procesador por:"
]

let answers21 = [
    "Porque se calienta mucho.",
    "Porque se derrite a relativamente bajas temperaturas.",
    "Por su gran resistividad que ayuda al flujo de electrones.",
    "Porque siempre ha sido así."
]

let answers22 = [
    "No conduce electricidad solo información.",
    "Soporta altas temperaturas y es flexible.",
    "Tiene baja resistividad que ayuda al flujo de electrones",
    "No es usado en cables de computadoras, ellos usan aluminio"
]

let answers23 = [
    "Porque permite a la corriente pasar con libertad.",
    "Porque permite no pasar la corriente.",
    "Porque permite que el paso de corriente sea controlado.",
    "Porque es el mejor conductor que existe a la fecha."
]


let answers24 = [
    "Tiene una variedad de efectos negativos que pueden ser letales.",
    "Puede dejarte manchada la piel si lo manipulas mucho.",
    "No tiene efectos negativos al ser humano.",
    "Tiene propiedades positivas, hasta puede curar cancer."
]

let answers25 = [
    "Por decoracion, así se ve más premium.", 
    "Resiste a la corrosión.",
    "Porque resisten mas golpes fisicos.",
    "No se usa oro, se usa cobre que es mejor conductor."
]

let firstanswers = [
    answers1, answers2, answers3, answers4, answers5
]

let secondanswers = [
    answers21, answers22, answers23, answers24, answers25
]


let correctanswers1 = [
    "Boro", "Silicio", "Estaño", "Cobre", "Aluminio"
]

let correctanswers2 = [
    "Porque se derrite a relativamente bajas temperaturas.", "Tiene baja resistividad que ayuda al flujo de electrones", "Porque permite que el paso de corriente sea controlado.", "Tiene una variedad de efectos negativos que pueden ser letales.", "Resiste a la corrosión."
]

questions3 = [
    "Para avanzar, presiona el boton que dice Sí",
    "Ahora presiona el que dice hola",
    "Esta es la basica del sistema de Actividades, si presionaste el que no es te va a dar un fallo.",
    "Tambien existe tiempo, mientras mas rápido mejor tu puntaje.",
    "Ahora termina esta actividad y anda a la siguiente."
]

let answers31 = [
    "no",
    "talvez",
    "si",
    "¿por qué?"
]

let answers32 = [
    "adios",
    "hola",
    "saludos",
    "no"
]

let answers33 = [
    "x",
    "x",
    "x",
    "x"
]


let answers34 = [
    "x",
    "x",
    "x",
    "x"
]

let answers35 = [
    "x", 
    "x",
    "x",
    "x"
]

let correctanswers3 = [
    "si", "hola", "x", "x", "x"
]

let thirdanswers = [
    answers31, answers32, answers33, answers34, answers35
]

let activitiesQuestion = [
    questions1, questions2, questions3
]

let activitiesAnswer = [
    firstanswers, secondanswers, thirdanswers
]

let activitiesCorrectAnswers = [
    correctanswers1, correctanswers2, correctanswers3
]

//let localStorageKey = 'default';

function configureActivty(parameters){
    //Type of the Activity, 0 is infinite, 1 is limited
    activityType = parameters[0];
    //if limited questionLimit should be set to -1
    questionLimit = parameters[1];
    //Time
    timeLimit = parameters[2];
    //Operation Type
    operationType = parameters[3];
    //key for the local storage parameter
    //localStorageKey = parameters[4]

}

function prepareArea(act, desc){
    $('#loading-screen').css("opacity", "1");
    opencloseSidebar()
    setTimeout(function(){
        $(".actButton").css("display", "unset")
        $("#msButtons").css("display", "grid");
        $("#keyboardGrid").css("opacity", "0");
        $("#navGrid").css("opacity", "0");
        $("#controlButtons").css("opacity", "0");
        $("#commentHeader").html(act);
        $("#commentPa1").html(desc);
        $('.activityLayout').css("display", "unset")
        $('#loading-screen').css("opacity", "0");
        $('#otherMenu').css("display", "none");
        $('#endActivity').css("display", "unset");
        $('#helpText').fadeIn(500);
        $('#commentBox').fadeOut();
    }, 2000);
};

function restoreArea(){
    console.log("Restore Function Called")
    $('#loading-screen').css("opacity", "1");
    setTimeout(function(){
        $("#prBar").html("")
        $("#clearButton").trigger("click");
        opencloseSidebar();
        $("#keyboardGrid").css("opacity", "1");
        $("#navGrid").css("opacity", "1");
        $("#controlButtons").css("opacity", "1");
        $('.activityLayout').css("display", "none")
        $('#loading-screen').css("opacity", "0");
        $('#otherMenu').css("display", "unset");
        $('#endActivity').css("display", "none");
        $(".infotxt").html("BIENVENIDO A COMPUCHEM");
        $('#helpText').fadeOut(500);
        $('#commentBox').fadeIn();
        setTime("0")
        endTime = 0; endact = false; ques = [0, 0, 0, 0, 0]; mistakes = 0; accerts = 0;
        progress = 0; questionNumber = 1; verifyQuestion = false; correctValue = 0; activityType = 0; questionLimit = -1; startActivity = false;
        savingString = [0, 0]; ranking = 0;
        updateData();
    }, 2000);
}

function buttonValues(a, b, c, d){
    $("#actButton1").html(a);
    $("#actButton2").html(b);
    $("#actButton3").html(c);
    $("#actButton4").html(d);
}

function buttonValuesClear(){
    $("#actButton1").html("A");
    $("#actButton2").html("B");
    $("#actButton3").html("C");
    $("#actButton4").html("D");
}

function textValues(a, b){
    $("#commentHeader").html(a);
    $("#commentPa1").html(b);
}

function setTime(time) {
    $("#actTimer").html(time);
  }
  
function endTimer() {
    endact = true;
}

function currentTime() {
    return $("#actTimer").html();
}
  
function startTimer(time) {
    console.log("Timer has Started!")
    let intervalId = setInterval(function() {
        time--;
        setTime(time);
        if (time === 0 || endact) {
            clearInterval(intervalId);
            endTime = Number(currentTime());
            console.log("Interval ended, time is " + endTime);
            (activityType == 0)?endScreen(ques) : console.log(null);
        }
    }, 1000);
}

function addProgress(a){
    if(a == 0){
        $("#prBar").append("0");
    }
    else if(a == 1){
        $("#prBar").append("X");
    }
    else{
        $("#prBar").append("Æ")
    }
}

function randomButtonPosition(a, b){
    //a = position (0, 1, 2, 3) ; b = true value
    switch (a){
        case 1: buttonValues(b, math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 2: buttonValues(math.randomInt(1, 100), b, math.randomInt(1, 100), math.randomInt(1, 100)); break;
        case 3: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), b, math.randomInt(1, 100)); break;
        case 4: buttonValues(math.randomInt(1, 100), math.randomInt(1, 100), math.randomInt(1, 100), b); break;
    }   
}

function setQuestion(/*header, type*/qn, an) {
    //type == 0 : type is a defined number of questions
    //type == 1 : type is an unlimited number of questions
    /*(type == 0)? textValues("Pregunta " + header, "Seleccione la respuesta Correcta<br>Aciertos: "+ accerts + "<br>Errores: "+ mistakes) : textValues("Pregunta " + header, "<br>Aciertos: "+ accerts + "<br>Errores: "+ mistakes);
    printFraction(math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), math.randomInt(1, 10), (operationType == 0) ? 1 : 0);
    correctValue = $('#numberRA').val(); 
    $('#numberRA').val("");
    randomButtonPosition(math.randomInt(1, 5), correctValue);  */
    
    buttonValuesClear();
    buttonValues(activitiesAnswer[an][qn][0], activitiesAnswer[an][qn][1], activitiesAnswer[an][qn][2], activitiesAnswer[an][qn][3],/*firstanswers[qn][0], firstanswers[qn][1], firstanswers[qn][2], firstanswers[qn][3]*/);
    textValues(activitiesQuestion[an][qn], "");
}

function act1Questions(question, answers){
    
}

function checkQuestion(val, buttonHtml, an) {
    let b;
    correctValue = activitiesCorrectAnswers[an][val]/*correctanswers1[val]*/;
    if(buttonHtml==correctValue){ 
        console.log("Correct, the value is " + correctValue);
        b = 1;
        (activityType == 1)? addProgress(1) : console.log("dummy") ;
        textValues("¡Correcto! :D", "Presiona Cualquier boton para continuar.");
        accerts++
    } 
    else {
        console.log("Incorrect. Correct value is " + correctValue);
        b = 0;
        (activityType == 1)? addProgress(0) : console.log("dummy") ;
        textValues("¡Incorrecto! :(", "Presiona Cualquier boton para continuar.")
        mistakes++  
    }
    return b;
}

function saveData(key, type){
    /*Results its the string that cointain all the results from the activities
    logic is applied so the best score is the one saved
    Normal Activities (type = 0)
        [a, b, c, d]
        a: 0 if the activity was dropout, this will not save the score,
        if set to 1 it will change the status from incompleted to complete
        b: the string will be queried and save
        c: the string will be queried and save
        d: should be saved as 0 or "none" since this property is not used.
    Infinite Activities
        [a, b, c, d] (type = 0)
        a: saves the number of questions that were done, -1 and the data will not be saved
        b: saves the erros
        c: saves the accerts 
        d: saves the ranking
        
    */
    let progress = [];
    if(type == 0){
        progress[0] = (questionNumber > questionLimit) ? "1" : "0" ;
        progress[1] = ranking;
        progress[2] = ques;
    //} else if(type == 2){
    //    progress = test;
    } else {
        progress[0] = questionNumber;
        progress[1] = mistakes;
        progress[2] = accerts;
        progress[3] = ranking;  
    }
    let jstring = JSON.stringify(progress);
    console.log(progress + "converted into JSON string " + jstring)
    localStorage.setItem(key, jstring)
    console.log("Data Saved! in key " + key);
}

function endScreen(responseArray){
    $(".actButton").css("display", "none")
    endTime = Number(currentTime());
    if(activityType == 1){
        $("#prBar").html("");
    for(i = 1; i < (questionNumber); i++){
        if(responseArray[i] == 0){
            addProgress(0);
        } else {
            addProgress(1);
        }
    }
    if ((Number(endTime) != 0 && mistakes == 0) && (questionNumber > questionLimit)) {
        rating = "⭐⭐⭐"
        ranking = 2;
        console.log("3 stars awarded because time was different from zero and errors were zero")
    } else if ((Number(endTime) != 0 && mistakes < 2.1) && (questionNumber > questionLimit)) {
        rating = "⭐⭐";
        ranking = 1;
        console.log("2 stars awarded because errors were less than two")
    } else {
        rating = "⭐";
        ranking = 0;
        console.log("1 star awarded because no conditions were met")
    }
textValues("¡Actividad Terminada!", 'En '+ ((endTime != 0)?30-endTime:" más de 30") + ' segundos.<br>' + rating)
    } else {
        if (questionNumber >= 30 && mistakes > (questionNumber*0.75)) {
            rating = "⭐⭐⭐⭐⭐";
            ranking = 4;
            console.log("5 stars awarded because questions were over ")
        } else if (questionNumber >= 30 && mistakes < (questionNumber/2)) {
            rating = "⭐⭐⭐⭐"
            ranking = 3;
            console.log("2 stars awarded because errors were less than two")
        } else if (questionNumber > 12 && mistakes < accerts){
            rating = "⭐⭐⭐"
            ranking = 2;
            console.log("2 stars awarded because time was different from zero")
        } else if (mistakes < (questionNumber/3)){
            rating = "⭐⭐"
            ranking = 1;
            console.log("2 stars awarded because time was different from zero")
        } else {
            rating = "⭐"
            ranking = 0;
            console.log("1 star awarded because no conditions were met")
        }
        textValues("¡Se acabo el tiempo!", 'Preguntas: ' + questionNumber + '<br>Aciertos: '+ accerts + '<br>Errores: '+ mistakes + '<br>' + rating);
        $("#prBar").html("");
    }
    saveData(savingString[0], savingString[1])
    setTimeout(function(){
        restoreArea();
    }, 4000)
}

function activityStart(h1, p){
    prepareArea(h1, p);
}

$(document).ready(function(){
    $('#helpText').fadeOut(500);
    const fraction1 = $("#fraction1");
    const fractionOperator = $("#fractionOperator");
    const fraction2 = $("#fraction2");
    $(".actButton").click(function() {
        //response Logic
        if(startActivity == false){
            startTimer(timeLimit)
            startActivity = true;
        }

        const buttonHtml = $(this).html();
        if((questionNumber - 1) >= questionLimit && verifyQuestion == false){
            endTimer();
            endScreen(ques);
        } else if(verifyQuestion == false){
            setQuestion((questionNumber - 1), activityNumber);
            verifyQuestion = true;
        }
        else{
            ques[questionNumber] = checkQuestion((questionNumber - 1), buttonHtml, activityNumber);
            verifyQuestion = false;
            buttonValuesClear();
            questionNumber++;
        }
      });

    $("#actStartButton1").click(function(){
        activityNumber = 2;
        $(".infotxt").html("INTRODUCCION");
        buttonValuesClear();
        configureActivty([1, 5, 999, 0]);
        setTime(999);
        activityStart("¡Bienvenido!", "Esta es la introduccion al sistema de actividades.<br>Presiona un Boton para Continuar.");
    })

    $("#actStartButton2").click(function(){
        activityNumber = 0;
        buttonValuesClear();
        $(".infotxt").html("ACTIVIDAD 1");
        configureActivty([1, 5, 30, 0]);
        setTime(30);
        activityStart("Actividad 1", "Elementos quimicos en la computadora.<br>Presiona un Boton para Continuar.");
        savingString = ["activity2Normal", 0];
        //console.log(`Activity set with the following parameters:\n${configureActivty}. The data is gonna be saved on the key ${savingString[0]}\n Type set to ${savingString[1]}.`)
    });
    $("#actStartButton3").click(function(){
        activityNumber = 1;
        $(".infotxt").html("ACTIVIDAD 2");
        configureActivty([1, 5, 30, 1])
        buttonValuesClear();
        setTime(30);
        activityStart("Actividad 2", "Propiedades quimicas de los elementos que conforman la computadora.<br>Presiona un Boton para Continuar.");
        savingString = ["activity3Normal", 0];
    })
    $("#endActivity").click(function(){
        if(activityType == 0){
            endTimer();
        }
        endScreen(ques);
    })
});