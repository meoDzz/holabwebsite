
document.addEventListener('DOMContentLoaded', function () {
    const langSec = document.querySelector('.languageSection');
    const buttons = document.querySelectorAll('.languageSection a');
    const data = {
        "english": {
            "title-aboutus": "About Us",
            "description-aboutus": "Our Laboratory aims to answer emerging needs of the society by proposals of novel robotic systems, ranging from fabrication of sensors, actuators, and intelligence. We particulaly focus on dynamic investigation of nature phenomena to find out the underlying, dominating mechanisms that could then give hints to fabrication of novel structures. Ideas are shaped under the light of novel technologies with integration of scientific methods, then integrated in robotic systems with specific applications. Results obtained in this process could be inversely utilized to understand the natures.",
            "title-messagepotential": "Message to potential students",
            "description-messagepotential": "Robotics is multi-disciplanary research. Our lab welcomes students from diverse backgrounds, such as material science, mechanical engineering, sensor fabrication, control engineering, and information science. Skills can be achieved during the study, thus, the following minds are encouraged in our Lab: creation, communication, and commitment. Feel free to contact staffs in Lab for further information.",
            "title-focusedproject": "Focused Project",
                "description-focusedproject": "Focused Project Focused Project Focused Project Focused Project Focused Project.",
            "title-ongoingproject": "Ongoing Project",
                "description-ongoingproject": "description Project",
        },
        "japanese": {
            "title-aboutus": "About Us",
            "description-aboutus": "自然界のすべての現象には、何らかの形で必ずダイナミクスが関与している。このダイナミクスを理解できれば、その現象を生じさせるために、メカニズムがどのように進化してきたかを理解することが可能になります。また、そのメカニズムを ロボットの駆動装置または感覚装置に応用することで、新しい 機構を創出できると考えられる。",
            "title-messagepotential": "配属される学生へのメッセージ",
            "description-messagepotential": "自然の物事と現象を解明することにより、柔軟物を積極的に利用した新機能のある機構を開発する本研究室は、分析力や実践力を求め、機能材料の力を借りた技術課題を解決する想像力を重視するのですが、特定の分野・知識を問わずにものづくりに興味を持つや学生を歓迎します。",
            "title-focusedproject": "日本語のFocused Project",
                "description-focusedproject": "日本語のFocused Projec 日本語のFocused Projec 日本語のFocused Projec 日本語のFocused Projec 。",
            "title-ongoingproject": "日本語のOngoing Project",
                "description-ongoingproject": "日本語の description Project",
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
