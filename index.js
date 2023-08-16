document.addEventListener("DOMContentLoaded", (event) => {

    //get elements from page
    const button = document.querySelector('.button_wrapper');
    const title = document.querySelector('.tip_title');
    const text = document.querySelector('.tip_text');
    const roundConteiner = document.querySelector('.round_conteiner');


    //create bottom rounds
    if(roundConteiner) {
        for (let i = 0; i < 12; i++){
            const round = document.createElement('div');
            round.classList.add('round')
            roundConteiner.appendChild(round)
        }
    }


    const renderAdvice = (data) => {
        if(title && text && data){
                title.textContent = `ADVICE #${data.slip.id}`;
                text.textContent = data.slip.advice;
        }
    }

    const renderError = () => {
        if(title && text){
                title.textContent = `ADVICE NOT LOADED`;
                text.textContent = 'Something went wrong... try again ';
        }
    }

    

    const fetchAdvice = async () => {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            renderAdvice(data);

        } catch (error) {
            renderError();
            console.log(error);
            
        } 
    }

    if(button){
        button.addEventListener('click', fetchAdvice)
    }

    fetchAdvice();
});


