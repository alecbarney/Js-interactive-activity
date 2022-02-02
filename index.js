let message = document.querySelector('#message')

const revealMessage = () =>{
    message.classList.remove('hide');
    setTimeout(()=> {message.classList.add('hide')}, 1000);
}

const addMovie = (event) =>{
    event.preventDefault();
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'

   let ul= document.querySelector('ul')
   ul.appendChild(movie)


    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


   inputField = '';
}



const deleteMovie = (event) =>{
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`
    revealMessage();
}

const crossOffMovie = (event) =>{
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} Watched!`
    }else{
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage();
}

let form = document.querySelector('form')

form.addEventListener('submit', addMovie)

