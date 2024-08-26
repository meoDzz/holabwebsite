// document.addEventListener('DOMContentLoaded', function () {
//     const langSec = document.querySelector('.languageSection');
//     const buttons = document.querySelectorAll('.languageSection a');

//     // Data object containing different translations for each section
//     // const data = {
//     //     "english": [
//     //         { "title": "English Ti111tle 1", "description": "This is the kkkkkkkkk English description." },
//     //         { "title": "English Title 2", "description": "This is tcription." },
//     //         { "title": "English T4444111itle 3", "description": "This is the third English desn." }
//     //     ],
//     //     "japanese": [
//     //         { "title": "日本語トル1", "description": "これは最初です。" },
//     //         { "title": "日本語のaaaa444タイトル2", "description": "この日本語の説明です。" },
//     //         { "title": "日本語のル3", "description": "これは3番目のadsadsdasd日本語の説明です。" }
//     //     ]
//     // };
//     const data = {
//         "english": [
//             { "title": "About Us", "description": "Our Laboratory aims to answer emerging needs of the society by proposals of novel robotic systems, ranging from fabrication of sensors, actuators, and intelligence. We particulaly focus on dynamic investigation of nature phenomena to find out the underlying, dominating mechanisms that could then give hints to fabrication of novel structures. Ideas are shaped under the light of novel technologies with integration of scientific methods, then integrated in robotic systems with specific applications. Results obtained in this process could be inversely utilized to understand the natures." },
//             { "title": "Message to potential students", "description": "Robotics is multi-disciplanary research. Our lab welcomes students from diverse backgrounds, such as material science, mechanical engineering, sensor fabrication, control engineering, and information science. Skills can be achieved during the study, thus, the following minds are encouraged in our Lab: creation, communication, and commitment. Feel free to contact staffs in Lab for further information." },
//             { "title": "Youtube Channel", "description": "Check our latest robots' videos here" }
//         ],
//         "japanese": [
//             { "title": "材料の柔らかさを活かした次世代ロボットの開発", "description": "自然界のすべての現象には、何らかの形で必ずダイナミクスが関与している。このダイナミクスを理解できれば、その現象を生じさせるために、メカニズムがどのように進化してきたかを理解することが可能になります。また、そのメカニズムを ロボットの駆動装置または感覚装置に応用することで、新しい 機構を創出できると考えられる。" },
//             { "title": "日本語のaaaa444タイトル2", "description": "配属される学生へのメッセージ。" },
//             { "title": "日本語のル3", "description": "これは3番目のadsadsdasd日本語の説明です。" }
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

document.addEventListener('DOMContentLoaded', () => {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');
    const data = {
    "english": [
        { "title": "About Us", "description": "Our Laboratory aims to answer emerging needs of the society by proposals of novel robotic systems, ranging from fabrication of sensors, actuators, and intelligence. We particulaly focus on dynamic investigation of nature phenomena to find out the underlying, dominating mechanisms that could then give hints to fabrication of novel structures. Ideas are shaped under the light of novel technologies with integration of scientific methods, then integrated in robotic systems with specific applications. Results obtained in this process could be inversely utilized to understand the natures." },
        { "title": "Message to potential students", "description": "Robotics is multi-disciplanary research. Our lab welcomes students from diverse backgrounds, such as material science, mechanical engineering, sensor fabrication, control engineering, and information science. Skills can be achieved during the study, thus, the following minds are encouraged in our Lab: creation, communication, and commitment. Feel free to contact staffs in Lab for further information." },
        { "title": "Youtube Channel", "description": "Check our latest robots' videos here" }
    ],
    "japanese": [
        { "title": "材料の柔らかさを活かした次世代ロボットの開発", "description": "自然界のすべての現象には、何らかの形で必ずダイナミクスが関与している。このダイナミクスを理解できれば、その現象を生じさせるために、メカニズムがどのように進化してきたかを理解することが可能になります。また、そのメカニズムを ロボットの駆動装置または感覚装置に応用することで、新しい 機構を創出できると考えられる。" },
        { "title": "日本語のaaaa444タイトル2", "description": "配属される学生へのメッセージ。" },
        { "title": "日本語のル3", "description": "これは3番目のadsadsdasd日本語の説明です。" }
    ]
    };
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();  // Prevent default anchor behavior
            langSec.querySelector('.active').classList.remove('active');
            button.classList.add('active');

            // Get the selected language
            const attr = button.getAttribute('language');

            // Update each content section based on the selected language
            const titles = document.querySelectorAll('.title');
            const descriptions = document.querySelectorAll('.description');

            titles.forEach((title, index) => {
                if (data[attr][index]) { // Ensure there is data for this index
                    title.textContent = data[attr][index].title;
                }
            });

            descriptions.forEach((description, index) => {
                if (data[attr][index]) { // Ensure there is data for this index
                    description.textContent = data[attr][index].description;
                }
            });
        });
    });
});




