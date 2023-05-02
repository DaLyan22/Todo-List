let input = document.querySelector("#text_post");

// Abaixo, será adicionado o script do botão de adicionar uma tarefa :)

document.querySelector(".div").lastElementChild.addEventListener('click', () => {
    if (input.value !== '') {
        let p = document.createElement('p');
        p.textContent = input.value + "ㅤ";
        document.querySelector("#posts").appendChild(p);
        input.value = '';
        input.focus();

        //-----------------------------------------------------------------------



        let span = document.createElement('span')
        span.classList.add('text-danger', 'mr-2', 'cursor-pointer')
        let icone = document.createElement('i');
        icone.classList.add('fas', 'fa-trash-can');
        span.appendChild(icone);
        span.addEventListener('click', () => {
            p.remove();
        })
        p.appendChild(span);
        p.append(`${input.value}`);
        

        //------------------------------------------------------------------------------------------------
        
        document.querySelector("#posts").appendChild(p)

        input.value = '';
        input.focus();
    }
})

// Abaixo, será adicionado o script do botão de eliminar TODAS tarefas :)


document.querySelector(".div").firstElementChild.addEventListener('click', () => {
    document.querySelector("#posts").innerHTML = null
    input.value = ''
    input.focus()

})