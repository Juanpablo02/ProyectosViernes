// Funcion flecha

let calcularDistancia = (x1,y1,x2,y2) => Math.pow(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2),1/2)

let final = calcularDistancia(0,0,-10,-10)

console.log(final.toFixed(2))