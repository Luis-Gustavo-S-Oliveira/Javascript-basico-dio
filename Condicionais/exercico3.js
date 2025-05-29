const precoProduto = 12151.00; 
const tipoPagamento = 4;

console.log("Preço a ser pago : ")
if( tipoPagamento === 1){
    const novoValor = precoProduto - (precoProduto*0.10)
    console.log(novoValor.toFixed(2))
    }else if (tipoPagamento === 2 ){
        const novoValor = precoProduto - (precoProduto*0.15)
        console.log(novoValor.toFixed(2))
        }else if (tipoPagamento === 3){
            console.log(precoProduto.toFixed(2))
            }else if (tipoPagamento === 4){
                const novoValor = precoProduto*1.10
                console.log(novoValor.toFixed(2)) 
                }else {console.log("forma de pagamento invalida")}