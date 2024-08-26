// document.addEventListener('DOMContentLoaded', function () {
//     const langSec = document.querySelector('.languageSection');
//     const buttons = document.querySelectorAll('.languageSection a');

//     // Data object containing different translations for each section
//     const data = {
//         "english": [
//             { "title": "English Title 1", "description": "This is the first English description." },
//             { "title": "English Title 2", "description": "This is tcription." },
//             { "title": "English Title 3", "description": "This is the third English desn." },
//             { "title": "English Title 4asdasd", "description": "This asdasdesn." },
//             { "title1": "English Title 6666", "description": "This asdasdesn." }
//         ],
//         "japanese": [
//             { "title": "日本語トル1", "description": "これは最初です。" },
//             { "title": "日本語のタイトル2", "description": "この日本語の説明です。" },
//             { "title": "日本語のル3", "description": "これは3番目の日本語の説明です。" },
//             { "title": "日本語のル3 Title 4asdasd", "description": "This a日本語のル3sdasdesn." },
//             { "title1": "日本語のル3 Title 6666", "description": "This asdasd日本語のル3esn." }
//         ]
//     };

//     // Add click event listener to each button
//     buttons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             event.preventDefault();  // Prevent default anchor behavior
//             langSec.querySelector('.active').classList.remove('active');
//             button.classList.add('active');

//             // Get the selected language
//             const attr = button.getAttribute('language');

//             // Update each content section based on the selected language
//             const contents = document.querySelectorAll('.content');
//             contents.forEach((content, index) => {
//                 const title = content.querySelector('.title');
//                 const description = content.querySelector('.description');
//                 title.textContent = data[attr][index].title;
//                 description.textContent = data[attr][index].description;
//             });
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');

    // Data object containing different translations for each section
    const data = {
        "english": {
            "title-header": "English Title 1",
            "description-header": "This is the first English description.",
            "title-bottom": "English Title 2",
            "description-bottom": "This is the second English description.",
            "title-last": "English Title 3",
            "description-last": "This is the third English description.",
            "title-sub": "English Title 4",
            "description-sub": "This is the fourth English description.",
            "title-txt": "English Title 5",
            "description-txt": "This is the fifth English description."
        },
        "japanese": {
            "title-header": "日本語のタイトル1",
            "description-header": "これは最初の日本語の説明です。",
            "title-bottom": "日本語のタイトル2",
            "description-bottom": "これは2番目の日本語の説明です。",
            "title-last": "日本語のタイトル3",
            "description-last": "これは3番目の日本語の説明です。",
            "title-sub": "日本語のタイトル4",
            "description-sub": "これは4番目の日本語の説明です。",
            "title-txt": "日本語のタイトル5",
            "description-txt": "これは5番目の日本語の説明です。"
        }
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
            Object.keys(data[attr]).forEach(key => {
                const element = document.querySelector(`.${key}`);
                if (element) {
                    element.textContent = data[attr][key];
                }
            });
        });
    });
});
