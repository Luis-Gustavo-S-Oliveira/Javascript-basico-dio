const precoGasolina = 5.20;
const precoEtanol = 4.89;
const tipoCombustivel = "Gasolina";
const litrosPorKm = 9;
const distanciaKm = 100;

if (tipoCombustivel == "Gasolina"){
    const valorGasto = (distanciaKm/litrosPorKm)*precoGasolina;
    console.log(valorGasto.toFixed(2))
    }else {
        console.log((distanciaKm/litrosPorKm)*precoEtanol.toFixed(2));
}