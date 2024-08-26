const langSec = document.querySelector('.languageSection');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textDesc = document.querySelector('.description');

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');

        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            const title = content.querySelector('.title');
            const description = content.querySelector('.description');
            title.textContent = data[attr].title;
            description.textContent = data[attr].description;
        });
    });
});

const data = 
{
    "english":
        {   
            "title" : " English version",
            "description" : " English English",
            "title1": " title1 version",
        },
    "japanese":
        {
            "title" : "JJJJJJJJJJJJJJJJJJ",
            "description" : " jpanaese"
        }
}