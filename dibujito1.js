var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito1");
var ancho = d.width;
var lienzo = d.getContext("2d");



 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
 }

 function dibujoPorClick()
 {

   var xxx = parseInt(texto.value);
   var lineas = xxx;
   var l = 0;
   var yi, xf, xi, yf;
   var colorcito = "black";
   var espacio = ancho / lineas;

   //while(l < lineas) es una opcion
   for(l = 0;l < lineas; l++) //es el mas usado por los programadores
   {
     xi = yi = espacio * l;
     yf = xf = espacio * (l + 1);

   dibujarLinea("red", 0, yi, xf, 300);
   dibujarLinea("yellow", xi, 0, 300, yf);
   console.log("lineas" + l);

   }
   dibujarLinea(colorcito , 1, 1, 1, 300);
   dibujarLinea(colorcito , 1, 299, 299, 299);
   dibujarLinea(colorcito , 299, 299, 299, 1);
   dibujarLinea(colorcito , 299, 1, 1, 1);
 }
