function criaCalculadora() {
    return {
        display: document.querySelector('.display-historico'),
        total: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = '';
        },

        clearTotal() {
            this.total.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta inválida')
                    return;
                }

                this.total.value = String(conta);
            } catch (e) {
                alert('conta inválida')
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                    this.clearTotal();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('backspace')) {
                    this.apagaUm();
                }

                if (el.classList.contains('aparece')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();