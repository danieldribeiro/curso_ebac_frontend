$('#btnSubmit').click((e) => {
    $('.input').val() = ''
    e.preventDefault();
})

$('#inputTelefone').mask('(00) 00000-0000')
$('#inputCpf').mask('000.000.000-00', {placeholder: '000.000.000-00'})
$('#inputCep').mask('00000-000', {placeholder: '00000-000'})

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        cpf:{
            required: true
        },
        cep:{
            required: true
        },
        endereco:{
            required: true
        }
    },
    messages:{
        nome: 'Por favor, insira seu nome completo',
        email: 'Por favor, insira seu e-mail',
        telefone: 'Por favor, insira seu telefone',
        cpf: 'Por favor, insira seu CPF',
        cep: 'Por favor, insira seu CEP',
        endereco: 'Por favor, insira seu endereço',
    }
})