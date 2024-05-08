let bohr_silicon = "./media/items/silicon.png"
let bohr_aluminum = "./media/items/aluminium.png"
let bohr_copper = "./media/items/copper.png"
let bohr_gold = "./media/items/gold.png"
let bohr_iron = "./media/items/iron.png"
let bohr_lead = "./media/items/lead.png"
let bohr_tin = "./media/items/tin.png"
let bohr_default = "./media/items/default.png"

let info_copper = `
<ul>
  <li><strong>Símbolo químico:</strong> Cu</li> 
  <li><strong>Masa atómica:</strong> 63.546 u</li>
  <li><strong>Configuración electrónica:</strong> [Ar] 3d¹⁰ 4s¹</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal maleable y dúctil.</li>
  <li>Buen conductor de calor y electricidad.</li>
  <li>Se oxida lentamente en el aire, formando una capa verde de carbonato de cobre.</li>
  <li>Reacciona con ácidos fuertes para formar sales de cobre.</li>
</ul>
`

let info_aluminium = `
<ul>
  <li><strong>Símbolo químico:</strong> Al</li> 
  <li><strong>Masa atómica:</strong> 26.982 u</li>
  <li><strong>Configuración electrónica:</strong> [Ne] 3s² 3p¹</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal ligero, maleable y dúctil.</li>
  <li>Buen conductor de calor y electricidad.</li>
  <li>Se oxida rápidamente en el aire, formando una capa protectora de óxido de aluminio.</li>
  <li>Reacciona con ácidos y bases fuertes para formar sales de aluminio.</li>
</ul>
`

let info_gold = `
<ul>
  <li><strong>Símbolo químico:</strong> Au</li> 
  <li><strong>Masa atómica:</strong> 197.002 u</li>
  <li><strong>Configuración electrónica:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s¹</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal noble, brillante y maleable.</li>
  <li>No se oxida en el aire ni reacciona con la mayoría de los ácidos y bases.</li>
  <li>Es un buen conductor de calor y electricidad.</li> 
</ul>
`

let info_tin = `
<ul>
  <li><strong>Símbolo químico:</strong> Sn</li> 
  <li><strong>Masa atómica:</strong> 118.710 u</li>
  <li><strong>Configuración electrónica:</strong> [Kr] 4d¹⁰ 5s² 5p²</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal blanco, blando y maleable.</li>
  <li>Se oxida lentamente en el aire, formando una capa protectora de óxido de estaño.</li>
  <li>Reacciona con ácidos fuertes para formar sales de estaño.</li>
</ul>
`

let info_iron = `
<ul>
  <li><strong>Símbolo químico:</strong> Fe</li>
  <li><strong>Masa atómica:</strong> 55.845 u</li>
  <li><strong>Configuración electrónica:</strong> [Ar] 3d⁶ 4s²</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal duro, dúctil y magnético.</li>
  <li>Se oxida fácilmente en el aire, formando óxido de hierro (herrumbre).</li>  
  <li>Reacciona con ácidos fuertes para formar sales de hierro.</li> 
</ul>
`

let info_lead = `
<ul>
  <li><strong>Símbolo químico:</strong> Pb</li>
  <li><strong>Masa atómica:</strong> 207.217 u</li>
  <li><strong>Configuración electrónica:</strong> [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Metal pesado, blando y denso.</li>
  <li>Se oxida lentamente en el aire, formando una capa protectora de óxido de plomo.</li>
  <li>Reacciona con ácidos fuertes para formar sales de plomo.</li>
  <li>Es tóxico para los humanos y el medio ambiente.</li> 
</ul>
`

let info_silicon = `
<ul>
  <li><strong>Símbolo químico:</strong> Si</li>
  <li><strong>Masa atómica:</strong> 28.085 u</li>
  <li><strong>Configuración electrónica:</strong> [Ne] 3s² 3p²</li>
</ul>

<p><strong>Propiedades químicas:</strong></p>
<ul>
  <li>Semimetálico, duro y quebradizo.</li>
  <li>No se oxida fácilmente en el aire.</li>  
  <li>Reacciona con algunos ácidos y bases fuertes para formar compuestos de silicio.</li> 
</ul>
`
function anim () {

}

function requestFS(){
  var elem = document.documentElement;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  // check if screen orientation is supported
  if(screen.orientation.lock) {
  // lock screen to landscape orientation
    screen.orientation.lock("landscape").then(function() {
      console.log("Orientation locked to landscape");
    }).catch(function(error) {
      console.error("Failed to lock orientation", error);
    });
  };
};

function infoHandler (eid) {
  switch(eid) {
    case "sili":
      $("#elementHeader").html("Silicio");
      $(".infotxt").html("SILICIO");
      $('#bohrImageContainer').attr('src', bohr_silicon);
      $("#elementSymbol").html("Si");
      $(".infoContainer").html(info_silicon);
      break;
    case "alum":
      $("#elementHeader").html("Aluminio");
      $(".infotxt").html("ALUMINIO");
      $('#bohrImageContainer').attr('src', bohr_aluminum);
      $("#elementSymbol").html("Al");
      $(".infoContainer").html(info_aluminium);
      break;
    case "oro":
      $("#elementHeader").html("Oro");
      $(".infotxt").html("ORO");
      $('#bohrImageContainer').attr('src', bohr_gold);
      $("#elementSymbol").html("Au");
      $(".infoContainer").html(info_gold);
      break;
    case "esta":
      $("#elementHeader").html("Estaño");
      $(".infotxt").html("ESTANO");
      $('#bohrImageContainer').attr('src', bohr_tin);
      $("#elementSymbol").html("SN");
      $(".infoContainer").html(info_tin);
      break;
    case "hierro":
      $("#elementHeader").html("Hierro");
      $(".infotxt").html("HIERRO");
      $('#bohrImageContainer').attr('src', bohr_iron);
      $("#elementSymbol").html("Fe");
      $(".infoContainer").html(info_iron);
      break;
    case "plomo":
      $("#elementHeader").html("Plomo");
      $(".infotxt").html("PLOMO");
      $('#bohrImageContainer').attr('src', bohr_lead);
      $("#elementSymbol").html("Pb");
      $(".infoContainer").html(info_lead);
      break;
    case "cobre":
      $("#elementHeader").html("Cobre");
      $(".infotxt").html("COBRE");
      $('#bohrImageContainer').attr('src', bohr_copper);
      $("#elementSymbol").html("Cu");
      $(".infoContainer").html(info_copper);
      break;
    default :
    $(".infotxt").html("X");
    $("#elementSymbol").html("X");
    $("#elementHeader").html("x");
    $('#bohrImageContainer').attr('src', bohr_default);
  }
}

function elementHandler (eid) {
  switch(eid) {
    case "sili":
      $(".infotxt").html("SILICIO");
      break;
    case "alum":
      $(".infotxt").html("ALUMINIO");
      break;
    case "oro":
      $(".infotxt").html("ORO");
      break;
    case "esta":
      $(".infotxt").html("ESTANO");
      break;
    case "hierro":
      $(".infotxt").html("HIERRO");
      break;
    case "plomo":
      $(".infotxt").html("PLOMO");
      break;
    case "cobre":
      $(".infotxt").html("COBRE");
      break;
    default :
    $(".infotxt").html("x");
  }
}

$(document).ready(function(){
    $("#fullscreenButton").click(function(){
        requestFS();
    });
    $("#fullscreenButton2").click(function(){
      let wb2 = $(".welcomeScreen");
      let bat = $("#bottomAreaTrigger");
      if (document.fullscreenElement !== null) {
        console.log("The document is in fullscreen mode.");
        wb2.animate({opacity: 0}, 500);
        setTimeout(function(){
          wb2.remove();
        }, 1500);
      } else {
        requestFS();
        wb2.animate({opacity: 0}, 500);
        setTimeout(function(){
          wb2.remove();
        }, 1500);
      }
      bat.addClass("show")
    });
    $("button").click(function(){
      $("#click")[0].currentTime = 0;
      $("#click")[0].play();
    });

    $("#fullscreenButton2").click(function(){
      setTimeout(function(){
        $(".infotxt").html("HAZ CLICK EN LA COMPUTADORA PARA EMPEZAR");
      }, 6000);
    });

    $(".openingAnimation").click(function(){
      console.log("Animation Started")
      $(".pcArrow").fadeOut();
      $("#lid").addClass("animate");
      setTimeout(function(){
        console.log("TimeoutFunction called");
        $("#lid").css("display", "none");
        $(".openingAnimation").fadeOut();
        $(".leftSectionContainer").fadeIn();
        $(".t-iten").fadeIn();
        $(".infotxt").html("SELECCIONA UN ITEM");
        
        console.log("Animation Ended"); 
      }, 3400);
    });

    $(".t-item").hover(function(){
      // 'this' refers to the currently hovered element
      const elementId = $(this).attr('id');  

      // Do something with the ID
      console.log("Hovered element ID:", elementId);

      elementHandler(elementId);
      
    }, function(){
      $(".infotxt").html("SELECCIONA UN ITEM");
    });

    $(".t-item").click(function(event){
      $(".infohContainer").fadeIn();
      event.preventDefault();
      const elementId = $(this).attr('id');
      infoHandler(elementId);
    })
});