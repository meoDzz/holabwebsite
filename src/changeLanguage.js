
document.addEventListener('DOMContentLoaded', function () {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');
    const data = {
        "english": {
            "title-aboutus": "About Us",
            "description-aboutus": "Our Laboratory aims to answer emerging needs of the society by proposals of novel robotic systems, ranging from fabrication of sensors, actuators, and intelligence. We particulaly focus on dynamic investigation of nature phenomena to find out the underlying, dominating mechanisms that could then give hints to fabrication of novel structures. Ideas are shaped under the light of novel technologies with integration of scientific methods, then integrated in robotic systems with specific applications. Results obtained in this process could be inversely utilized to understand the natures.",
            "title-sub": "English Title 4",
                "description-sub": "This is the fourth English description.",
            "title-txt": "English Title 5",
                "description-txt": "This is the fifth English description."
        },
        "japanese": {
            "title-aboutus": "About Us",
            "description-aboutus": "自然界のすべての現象には、何らかの形で必ずダイナミクスが関与している。このダイナミクスを理解できれば、その現象を生じさせるために、メカニズムがどのように進化してきたかを理解することが可能になります。また、そのメカニズムを ロボットの駆動装置または感覚装置に応用することで、新しい 機構を創出できると考えられる。",
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
