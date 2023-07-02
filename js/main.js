function saludo() {
  alert("Bienvenido usuario");
  alert(
    "A continuación encontrara unos botones con los cuales se ejecutan algoritmos realizados con JS puro"
  );
}

function suma() {
  let A = 0;
  let B = 0;
  let Suma = 0;

  A = parseInt(prompt("Por favor ingresar el primer valor a SUMAR"));
  B = parseInt(prompt("Por favor ingresar el segundo valor a SUAMR"));
  Suma = A + B;
  alert("lA SUMA ES IGIAL A: " + Suma);
}

function operacinesB() {
  let A = 0;
  let B = 0;
  let suma = 0;
  let resta = 0;
  let multiplication = 0;
  let division = 0;

  A = parseInt(prompt("Por favor ingresar el primer valor"));
  B = parseInt(prompt("Por favor ingresar el segundo valor"));
  suma = A + B;
  resta = A - B;
  multiplication = A * B;
  division = A / B;

  alert("lA SUMA ES IGIAL A: " + suma);
  alert("lA RESTA ES IGIAL A: " + resta);
  alert("lA MULTIPLICACIÓN ES IGIAL A: " + multiplication);
  alert("lA DIVISIÓN ES IGIAL A: " + division);
}

function cuadrado() {
  let Altura = 0;
  let Base = 0;
  let Area = 0;

  Altura = parseInt(prompt("Por favor ingresar el valor de la altura"));
  Base = parseInt(prompt("Por favor ingresar el valor de la base"));
  Area = Altura * Base;

  alert("El área de un cuadrado es: " + Area);
}

function triangulo() {
  let Altura = 0;
  let Base = 0;
  let Area = 0;

  Altura = parseInt(prompt("Por favor ingresar el valor de la altura"));
  Base = parseInt(prompt("Por favor ingresar el valor de la base"));
  Area = (Altura * Base) / 2;

  alert("El área de un cuadrado es: " + Area);
}

function inversion() {
  const interes = 0.017;
  let capital = 0;
  let años = 0;
  let ganancia = 0;
  let GanTotal = 0;

  capital = parseInt(prompt("Por favor ingresar del capital a invertir"));
  años = parseInt(
    prompt("Por favor ingrese el numero de años de la inversión")
  );
  //
  ganancia = capital * interes * años;
  GanTotal = ganancia + capital;

  alert(
    "Su capital inicial es: " +
      capital +
      " " +
      "los años de la inversión es:" +
      años +
      " " +
      "Sus ganacias  de interes son: " +
      ganancia +
      "Sus ganancias totales son: " +
      GanTotal
  );
}


  function notas(){
    var nombreestudiante, Asignatura, nota1, nota2, nota3, nota4,nota5,nota6,nota7, promedio, mensaje1, mensaje2, mensajefinal;
    nombreestudiante=prompt("ingrese el nombre del estudiante");
    Asignatura=prompt("ingrese la asignatura");
    nota1=parseInt(prompt("ingrese la primera nota"));
    nota2=parseInt(prompt("ingrese la segunda nota"));
    nota3=parseInt(prompt("ingrese la tercera nota"));
    nota4=parseInt(prompt("ingrese la cuarta nota"));
    nota5=parseInt(prompt("ingrese la quinta nota"));
    nota6=parseInt(prompt("ingrese la sexta nota"));
    nota7=parseInt(prompt("ingrese la septima nota"));
    promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;

    if (promedio>6.2)
    {
      mensaje1="Aprobado";
    }
    else (promedio<=6.2)
    {
    mensaje2="Reprobado";
    }
    mensajefinal= mensaje1 ||mensaje2;
    alert("El estudiantes: " + " " + nombreestudiante+ "En la asignatura: " +" "+Asignatura+ "Tiene un promedio de: "+" "+promedio.toFixed(1)+ " Con estado: "+" "+ mensajefinal);

}

function mayor() {
  let A = 0;
  let B = 0;
  // let mayor = 0;
  A = parseInt(prompt("Por favor ingresar un el primer valor"));
  B = parseInt(prompt("Por favor ingrese el segundo valor"));

  if (A >= B) {
    alert(A + " El primer valor es mayor que " + B);
    return A;
  } else if (B >= A) {
    B + " El segundo valor es mayor que " + A;
    return B;
  } else {
    alert("los números son iguales");
    return A;
  }
}

function kilos(){
  const manzanas= 4500;
  let cantidad= 0;
  let descuento=0;
  let precioDes = 0;
  let precio=0;


  cantidad=parseInt(prompt("Ingrese la cantidad de manzanas en kilos: "));

  if (cantidad<=0||cantidad===2){
    descuento=0;
  }
  else if(cantidad>=3 && cantidad <=5){
    descuento=0.10;
  }
  else if(cantidad>=6 && cantidad<=8){
    descuento=0.16;
  }
  else if (cantidad>=9) {
    descuento=0.20;
  }
  precio=manzanas*cantidad;
  precioDes=manzanas*cantidad*(1-descuento);
  alert("La cantidad de manzanas: " +cantidad+ "El precio por la compra es:"+precio+ "El descuento aplicado es: "+(descuento*100) +"%"+ "El precio con descuento es: $" + precioDes.toFixed(2));
  }


