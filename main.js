alert("Adivina el numero");
var numero= Math.round(Math.random() * (100.0) + 0);
var cadena="Elementos usados: ";
var intentos=5;
var cont=0;
var band=false;
function compara(){
  if(band)
    return;
  var dato=document.getElementById('caja1').value;
  if(dato!=='')
  {
      var numi=parseInt(dato);
      var box=document.getElementById('resultado');
      var texto1=document.getElementById('texto1');
      var num1=document.getElementById('num');
      cont++;
      if(numi===numero)
      {
        texto1.innerHTML="Adivinaste El Numero";
        num1.innerHTML=numero;
        document.getElementById('boton1').style.display="none";
        band=true;
      } 
      else
      {
        if(numi>numero)
        {
          texto1.textContent="El Numero que añadiste en muy bajo";
          num1.innerHTML=numi;
        }
        else
        {
          texto1.innerHTML="el numero que añadiste es muy alto";
          num1.innerHTML=numi;
        }
      
      }
      box.style.display="block";
      document.getElementById('caja1').value="";
      document.getElementById('caja1').focus();
      cadena=cadena + " " + numi;
      var parrafo1=document.getElementById('usados');
      var parrafo2=document.getElementById('intentos');
      parrafo1.innerHTML=cadena;
      if(cont>intentos)
      {
        texto1.innerHTML="Intentos agotados";
        document.getElementById('boton1').style.display="none";
      }
      
      parrafo2.innerHTML="Intentos: " + cont;
       
  }
  else
    alert('¡Hola el numero es:'+ numero);
}
