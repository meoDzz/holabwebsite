
document.addEventListener('DOMContentLoaded', function () {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');
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
