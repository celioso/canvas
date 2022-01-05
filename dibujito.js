var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;
var colorcito = "black";

//while(l < lineas) es una opcion
for(l = 0;l < lineas; l++) //es el mas usado por los programadores
{
  xi = yi = 10 * l;
  yf = xf = 10 * (l + 1);

dibujarLinea("red", 0, yi, xf, 300);
dibujarLinea("yellow", xi, 0, 300, yf);
console.log("lineas" + l);
//l = l + 2;
//l++
}
dibujarLinea(colorcito , 1, 1, 1, 300);
dibujarLinea(colorcito , 1, 299, 299, 299);
dibujarLinea(colorcito , 299, 299, 299, 1);
dibujarLinea(colorcito , 299, 1, 1, 1);

//lienzo.beginPath();
//lienzo.strokeStyle = "blue";
//lienzo.moveTo(50, 10);
//lienzo.lineTo(250, 2);
//lienzo.stroke();
//lienzo.closePath();

//dibujarLinea("pink", 10, 300, 220, 10);
//dibujarLinea("yellow", 300, 10, 10, 220);

 function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
 {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath();
 }
