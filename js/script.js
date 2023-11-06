// creo l' array di oggetti

const teamMembers = [
    {
        name: "Wayne Barnett" ,
        role: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll" ,
        role: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon" ,
        role: "Office Manager",
        Image: " walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez" ,
        role: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada" ,
        role: "Developer",
        Image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos" ,
        role: "Graphic Designer",
        Image: " barbara-ramos-graphic-designer.jpg"
    }
]

// stampo l'array di oggetti 

// console.log(teamMembers);
let curMember ="";
for (let i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    console.log(curMember);
}
