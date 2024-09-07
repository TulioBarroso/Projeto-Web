 function pesquisar(){
     //console.log(dados);   //Quiser acessar um especifico no array: dados[2]

// console.log(dados[0].link); //Uso do ponto( . ) para acessar alguma variavel especifica

let section = document.getElementById("resultados-pesquisa");
//console.log(section);
//class é mais usado para interagir o html com css
//id é mais usado para interageir o html com javascript

let campoPesquisa = document.getElementById("campo-pesquisa").value//.value para exibir oque tem dentro
//console.log(campoPesquisa)

//
if(campoPesquisa == ""){
        section.innerHTML = "<p> Nada foi encontrado error</p>"
        return //return finaliza a função e os codigos abaixo não são executados


}



//jeito manualmente--> 

/*section.innerHTML = `<div class="item-resultado">
                    <h2>Lewis Hamilton</h2> <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Lewis_Hamilton_2022_S%C3%A3o_Paulo_Grand_Prix_%2852497848109%29_%28cropped%29.jpg" alt="fotolewis">
                    <p class="descricao-meta">Lewis Hamilton é um dos maiores pilotos de Fórmula 1 de todos os tempos. Com sete títulos mundiais, ele se tornou uma lenda do esporte e um ícone da cultura pop. Além de suas conquistas nas pistas, Hamilton é conhecido por sua personalidade carismática e por ser um defensor de causas sociais importantes. Sua trajetória na Fórmula 1, marcada por vitórias memoráveis e rivalidades intensas, o transformou em um dos atletas mais admirados do mundo.
                    </p>
                    <a href="https://pt.wikipedia.org/wiki/Lewis_Hamilton" target="_blank">Mais informações</a>      
            </div>`

//jeito manualmente puxando dos dados.js-->${dados[1]. }

section.innerHTML = `<div class="item-resultado">
                    <h2>${dados[1].titulo}</h2> 
                    <p class="descricao-meta">${dados[1].descricao}
                    </p>
                    <a href="${dados[1].link}" target="_blank">Mais informações</a>      
            </div>`  */

// criação de uma variavel para pegar todos os dados, inves de acionar todas repetições no innerHTML
//commit 10
let resultados =" ";

// jeito com repetição  
for(let dado of dados){
        //se titulo includes campoPesquisa(oque digitou)
        if(dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
                
                resultados += `     
                <div class="item-resultado">
                                <h2>${dado.titulo}</h2> 
                                <p class="descricao-meta">${dado.descricao}
                                </p>
                                <a href="${dado.link}" target="_blank">Mais informações</a>      
                        </div>`      

        }
        
    
}                    


section.innerHTML = resultados;


 }
 
 
 