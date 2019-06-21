

// Funcao adicionar Registo, adiciona o registo independentemente da existencia de um semelhante
function add(){
    let nome = document.querySelector('input#nome');
    let unid = document.querySelector('input#unidade');
    let cat = document.querySelector('select#categoria');
    let datatab = document.querySelector('table');


    nomev = nome.value 
    unidv = unid.value
    catv = cat.value

    if(nome.value.length == 0 || nome.v || unid.value.length == 0){
        alert('Prencha todos os campos!');
        return false;
    }else if(unidv <= 0 || unidv > 500){
        alert('A unidade selecionada e invalida!');
        return false;
    }else{


        datatab.innerHTML += ` <tr class="${catv}">
                                <td>${nomev}</td>
                                <td>${catv}</td>
                                <td>${unidv}</td>
                            </tr>`

    }
}
// Funcao de Apagar Registo, uma vez acionado nao tem retorno;
function del(){
    let datatab = document.querySelector('table');
    var confirm = window.confirm('Voce tem certeza que quer eliminar esse dado!') 

        if(confirm == true){
            datatab.innerHTML = `
                                <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Unidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>    
                        `
            return true
        }else{
            return false
        }

    
}