

        function adicionar(valor) {
            let display = document.getElementById("display");

            if (display.value === "0") {
                display.value = valor;
            } else {
                display.value += valor;
            }
        }

        function limpar() {
            document.getElementById("display").value = "0";
        }

        function calcular() {
            let display = document.getElementById("display");

            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Erro";
            }
        }