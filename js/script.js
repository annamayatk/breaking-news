/* um alert de sucesso de envio de formulário da pag de contato
document.querySelector('form').onsubmit = function() {
    alert('Formulário enviado com sucesso!');
    return true;  
  };
  //revisar aqui acima pq nao ta funcionando*/

// criando uma funcao para carregar comentarios abaixo de cada noticia
function carregarComentarios() {

    // os comentarios vem da API jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        // pegando so 3 primeiros comentarios pra cada noticia
        const comentariosNoticia1 = data.slice(0, 3);  
        const comentariosNoticia2 = data.slice(3, 6);  
        const comentariosNoticia3 = data.slice(6, 9);  
  
        //funcao q exibe os comentarios no html
        function exibirComentarios(id, comentarios) {
          let comentariosHTML = '';
          comentarios.forEach(comentario => {
            comentariosHTML += `
              <div class="comentario">
                <strong>${comentario.name}</strong> <em>(${comentario.email})</em>
                <p>${comentario.body}</p>
              </div>
            `;
          });
          document.getElementById(id).innerHTML = comentariosHTML;
        }
  
        //exibindo os comentarios em cada noicia
        exibirComentarios('comentarios-1', comentariosNoticia1);
        exibirComentarios('comentarios-2', comentariosNoticia2);
        exibirComentarios('comentarios-3', comentariosNoticia3);
      })
      .catch(error => {
        console.error('Erro ao carregar os comentários:', error);
      });
  }
  
  //so roda a funcao carregarComentarios após carregar todo o HTML
  document.addEventListener('DOMContentLoaded', carregarComentarios);
  