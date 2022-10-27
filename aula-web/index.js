var x =10, y = 100;
alert(`
    Soma:    ${x + y}
    SUbtraçao: ${x-y}
    multiplicaçao: ${x*y}
    divisao: ${x/y}
`)

/* for (let index = 10; index <= 100; index++) {
    console.log(index)
    

} */




/* const tabuada= 5;
tabuada * 1;
tabuada * 2;
tabuada * 3;
tabuada * 4; */

var tabuada = "";

for (let index = 1; index <= 10; index++) {
    tabuada += `5 * ${index} = ${5 * index}` + '\n' 
}

console.log(tabuada);

console.log('--------');
function calcular(){
    var valor =document.getElementById("numero").value 
    var resultado= "";

    for (let index = 1; index <=10; index++) {
    	resultado+= `${valor} * ${index} = ${valor * index}` + '\n' 
    }
    console.log(resultado);
}

function selecione(){
    var valor= parseFloat(document.getElementById("numero1").value)
    var valor2= parseFloat(document.getElementById("numero2").value)

    var select =document.getElementById("select").value
    switch (select) {
        case "+":
            document.getElementById("resultado").value = `${valor+valor2}`
            break;
            case "-":
                document.getElementById("resultado").value = `${valor-valor2}`
            break;
            case "*":
                document.getElementById("resultado").value = `${valor*valor2}`
            break;
            case "/":
                document.getElementById("resultado").value = `${valor/valor2}`
            break;
    
        default:
            break;

            
    }
}

var numero = [1,2,3,4,5,6,7,8,9,10]
console.log(numero.filter((i) => i % 2 == 0));


function selecione(){ 
    var CustoDeFabrica= document.getElementById("CustoFabrica").value
    var percDistribuidor= document.getElementById("percDistribuidor").value
    var percImpostos=document.getElementById("percImpostos").value
    const final = CustoDeFabrica + (CustoDeFabrica *percDistribuidor) + (CustoDeFabrica * percImpostos)
    return document.getElementById("CustoFinal").value=final
}
