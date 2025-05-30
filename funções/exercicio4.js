function calcularImc(peso,altura){
    const imct = peso/Math.pow(altura,2)
    return imct;
}

function classificarimc (imc){
  if (imc < 18.5){
   return "abaixo do peso"
    }else if ( imc >= 18.5 && imc <= 25){
        return "peso normal";
        }else if ( imc > 25 && imc < 30 ){
            return "acima do peso";
            }else if (imc >= 30 && imc <= 40 ){
                return "obeso";
                }else {
                    return "obesidade grave"
                    }  
}

const imc = calcularImc(80,1.30);

console.log(imc.toFixed(2))
console.log(classificarimc(imc))
