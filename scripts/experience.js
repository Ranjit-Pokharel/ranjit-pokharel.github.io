experience_card = [
    {
        title: "Leet Code",
        font_awesome: "<i class='fa-solid fa-code'></i>",
        link: "https://leetcode.com/u/VDxa0f5wUS/",
        btn: "Leet Code Profile"
    },
    {
        title: "CS50's Introduction to Computer Science",
        font_awesome: "<i class='fa-solid fa-computer'></i>",
        link: "https://github.com/Ranjit-Pokharel/CS50X-Problem-Sets/",
        btn: "Problem Set"
    },
    {
        title: "CS50's Introduction to Programming with Python",
        font_awesome: "<i class='fa-brands fa-python'></i>",
        link: "https://github.com/Ranjit-Pokharel/CS50-Python-Problem-Sets/",
        btn: "Problem Set"
    },
    {
        title: "CS50's Python Final Project",
        font_awesome: "<i class='fa-brands fa-python'></i>",
        link: "https://github.com/Ranjit-Pokharel/CS50-Python-Problem-Sets/tree/main/Final_project",
        btn: "GitHub"
    },
    {
        title: "CS50's Practice",
        font_awesome: "<i class='fa-solid fa-computer'></i>",
        link: "https://github.com/Ranjit-Pokharel/CS50-practice",
        btn: "Practice"
    },
]


function card(project){
	return `
        <div class="col-lg-4 mt-4">
            <div class="card servicesText">
                <div class="card-body text-center">
                    <div class="experience_icon">
                        ${project.font_awesome}
                    </div>
                    <h4 class="card-title mt-3">${project.title}</h4>
                    <div class="text-center">
                        <a href="${project.link}"
                        class="btn btn-success">${project.btn}</a>
                    </div>
                </div>
            </div>  
        </div>
	`;
}

document.getElementById('experience_card').innerHTML = experience_card.map(card).join('');