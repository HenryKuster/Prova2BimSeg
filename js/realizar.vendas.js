function obterDadosDoFormulario() {
    const dataInput = document.querySelector("#data");
    const clienteInput = document.querySelector("#cliente");
    const veiculoInput = document.querySelector("#veiculo");
    const valorInput = document.querySelector("#valor");
    
    const dadosVenda = {
        data: dataInput.value,
        cliente: clienteInput.value,
        veiculo: veiculoInput.value,
        valor: valorInput.value,
    };
    
    return dadosVenda;
}

function salvarVenda() {
    const venda = obterDadosDoFormulario();
    const valido = validarCamposFormulario();
    
    if (valido) {
        salvarDadosLocalStorage(venda);
        limparCampos();
        window.location.href = "./vendas.html";
        alert("Venda realizada com sucesso");
    } else {
        console.log("Preencha todos os campos");
        alert("Preencha todos os campos");
    }
}

function validarCamposFormulario() {
    const venda = obterDadosDoFormulario();
    
    if (
        venda.data !== "" &&
        venda.cliente !== "" && 
        venda.veiculo !== "" &&
        venda.valor !== ""
        ) {
            return true;
        } else {
            return false;
        }
}
function obtemDadosLocalStorage() {
    const vendas = localStorage.getItem("vendas");
    return JSON.parse(vendas) || [];
}
    
function salvarDadosLocalStorage(venda) {
    const vendas = obtemDadosLocalStorage();
    vendas.push(venda);
        
    const vendasLS = JSON.stringify(vendas);
        
    localStorage.setItem("vendas", vendasLS);
}
    
function limparCampos() {
    const dataInput = document.querySelector("#data");
    const clienteInput = document.querySelector("#cliente");
    const veiculoInput = document.querySelector("#veiculo");
    const valorInput = document.querySelector("#valor");
        
    dataInput.value = "";
    clienteInput.value = "";
    veiculoInput.value = "";
    valorInput.value = "";
}
