let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

var dolarReal = {
    altaDolar: 0,
    baixaDolar: 0
};

fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.USDBRL.high);
        dolarReal.altaDolar = data.USDBRL.high;
        dolarReal.baixaDolar = data.USDBRL.low;
    })

function media() {
    let media = (parseFloat(dolarReal.altaDolar) + parseFloat(dolarReal.baixaDolar)) / 2;
    return media;
}

function valorMedio() {
    document.getElementById("valor").innerHTML = media();
}

function precoDolar() {
    let mediaa = media();
    let valor = document.getElementById("dolar").value;
    document.getElementById("resultado").innerHTML = valor + " dolares = " + mediaa * valor + " reais";
}