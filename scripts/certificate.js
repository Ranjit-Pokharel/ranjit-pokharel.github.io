certificate_card = [
    {
        title: "CS50's Python",
        img_name: "CS50P.png",
    },
    {
        title: "Linux shell",
        img_name: "linux_shell.jpg",
    },
    {
        title: "Linux Tranning",
        img_name: "linux_tranning.jpg",
    },
]


function card(project){
	return `
        <div class="col-lg-4 mt-4">
            <div class="card servicesText" onclick="window.open('./assets/certificate/${project.img_name}')">
                <div class="card-body text-center">
                    <div class="text-center" >
                        <figure class="certificate_image">
                            <img src="./assets/certificate/${project.img_name}" alt="${project.title}">
                        </figure>
                    </div>
                </div>
            </div>  
        </div>
	`;
}

document.getElementById('certificate_card').innerHTML = certificate_card.map(card).join('');