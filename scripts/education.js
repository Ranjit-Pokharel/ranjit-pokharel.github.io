const educations_cs = [
    {
        platform: "Harvard's CS50",
        title: "CS50's Introduction to Programming with Python"
    },
    {
        platform: "Udemy",
        title: "Complete Linux Training Course"
    },
    {
        platform: "Udemy",
        title: "Linux Shell Scripting: A Project-Based Approach to Learning"
    },
    {
        platform: "Edx",
        title: "IBM: Introduction to Prompt Engineering"
    },
    {
        platform: "Edx",
        title: "IBM: Git and GitHub Basics"
    }
];

const educations_other = [
    {
        platform: "Florence College of Physiotherapy (Affiliated with Rajiv Gandhi University of Health and Science)",
        title: "Bachelor of Physiotherapy, 2015-2020"
    },
    {
        platform: "V.S Niketan Higher Secondary School",
        title: "Pre-University Education (HSEB Grade +2), 2015"
    },
    {
        platform: "V.S Niketan Higher Secondary School",
        title: "School Leaving Certificate Examination, 2013"
    },
];

function education_card(project){
	return `
        <li>
            <h6>${project.platform}</h6>
            <p>${project.title}</p>
        </li>
	`;
}

document.getElementById('cs').innerHTML = educations_cs.map(education_card).join('');
document.getElementById('other').innerHTML = educations_other.map(education_card).join('');