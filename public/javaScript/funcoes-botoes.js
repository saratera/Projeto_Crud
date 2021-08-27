 const modal = document.getElementById('modal');

function abrirModal(){
    if(modal.style.display = 'none'){
        modal.style.display = 'block'
    }   
}

function fecharModal(){
    if(modal.style.display = 'block'){
        modal.style.display = 'none'
    }
}

const botaNovo = document.getElementById('botaoNovo');
botaNovo.addEventListener('click', abrirModal)

const botaoCancelar = document.getElementById('cancelar');
botaoCancelar.addEventListener('click', fecharModal)

let cadastroDados = []

function salvarCadastro(){
    const cadastro = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        data: document.getElementById('data').value,
        categoria: document.getElementById('categoria').value
    }
     cadastroDados.push(cadastro)      
     console.log(cadastroDados)
}

const botaoCadastrar = document.getElementById('cadastar');
botaoCadastrar.addEventListener('click', ()=>{
    salvarCadastro();
    let adcDadosNaTabela = '';
    for(let i = 0; i < cadastroDados.length; i++){

        adcDadosNaTabela += 
            `            
            <tr>
                <th scope="row">${i+1}</th>
                <td>${cadastroDados[i].titulo}</td>
                <td>${cadastroDados[i].descricao}</td>
                <td>${cadastroDados[i].data}</td>
                <td>${cadastroDados[i].categoria}</td>
                <td>
                     <img id="editar" src="../complementos/imagens/edit_black_24dp.svg">
                     <img id="deletar" src="../complementos/imagens/delete_black_24dp.svg">
                 </td>
             </tr>
        `
       document.getElementById('dado').innerHTML = adcDadosNaTabela         
                       
    }           
    fecharModal()    
})



 
 

    
   

 
    






