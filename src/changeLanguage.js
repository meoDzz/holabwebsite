// const langSec = document.querySelector('.languageSection');
// const buttons = document.querySelectorAll('a');
// const textTitle = document.querySelector('.title');
// const textDesc = document.querySelector('.description');

// buttons.forEach(button => {
//     button.addEventListener('click', () =>{
//         langSec.querySelector('.active').classList.remove('active');
//         button.classList.add('active');

//         const attr = button.getAttribute('language');

//         const contents = document.querySelectorAll('.content');
//         contents.forEach(content => {
//             const title = content.querySelector('.title');
//             const description = content.querySelector('.description');

//             title.textContent = data[attr].title;
//             description.textContent = data[attr].description;
//         });
//     });
// });

// const data =
// {
//     "english":
//     {
//         "title": " English version",
//         "description": " English English",
//         "title1": " title1 version",
//     },
//     "japanese":
//     {
//         "title": "JJJJJJJJJJJJJJJJJJ",
//         "description": " jpanaese"
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');

    // Data object containing different translations for each section
    const data = {
        "english": [
            { "title": "English Ti111tle 1", "description": "This is the kkkkkkkkk English description." },
            { "title": "English Title 2", "description": "This is tcription." },
            { "title": "English T4444111itle 3", "description": "This is the third English desn." }
        ],
        "japanese": [
            { "title": "日本語トル1", "description": "これは最初です。" },
            { "title": "日本語のaaaa444タイトル2", "description": "この日本語の説明です。" },
            { "title": "日本語のル3", "description": "これは3番目のadsadsdasd日本語の説明です。" }
        ]
    };

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default anchor behavior
            langSec.querySelector('.active').classList.remove('active');
            button.classList.add('active');

            // Get the selected language
            const attr = button.getAttribute('language');

            // Update each content section based on the selected language
            const contents = document.querySelectorAll('.content');
            contents.forEach((content, index) => {
                const title = content.querySelector('.title');
                const description = content.querySelector('.description');
                title.textContent = data[attr][index].title;
                description.textContent = data[attr][index].description;
            });
        });
    });
});




