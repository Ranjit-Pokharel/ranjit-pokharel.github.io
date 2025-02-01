project_card = [
    {
        title: "ConvAI",
        about: "An AI Conversational Assistant built in Python that interacts with users in a conversational format.",
        link: "https://github.com/Ranjit-Pokharel/ConvAI",
        btn: "About"
    },
    {
        title: "BTRFS_Manager",
        about: "A command line interfase btrfs manager tool for linux systems.",
        link: "https://github.com/Ranjit-Pokharel/BTRFS_Manager",
        btn: "About"
    },
]


function card(project){
	return `
        <div class="col-lg-4 mt-4">
            <div class="card servicesText">
                <div class="card-body text-center">
                    <h4 class="card-title mt-3">${project.title}</h4>
                    <p>${project.about}</p>
                    <div class="text-center">
                        <a href="${project.link}"
                        class="btn btn-success">${project.btn}</a>
                    </div>
                </div>
            </div>  
        </div>
	`;
}

document.getElementById('project_card').innerHTML = project_card.map(card).join('');