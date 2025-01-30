
    const modal = document.querySelector(".model");  // Sélectionne la modale
    const openBtn = document.getElementById("btntask"); // Bouton pour ouvrir la modale
    const closeBtn = document.getElementById("close"); // Bouton pour fermer la modale


    const taskname=document.querySelector('.name');
    const taskdesciption=document.querySelector('.description');
    const statu=document.querySelector('.statut');
    const btnclick=document.querySelector('.btn-click');


    // Afficher la modale quand on clique sur "+ Ajouter Tache"
    openBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex"); // Ajoute flex pour centrer les éléments
    });

    // Fermer la modale quand on clique sur "❌"
    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    });

    function addTask(){
        const taskList=JSON.parse(localStorage.getItem('tasklistestorage')) || [];
        const tasknameValeur=taskname.value.trim();
        const taskdesciptionveleur=taskdesciption.value.trim();
        const statuvaleur=statu.value.trim();

        const objettask={tasknameValeur,taskdesciptionveleur,statuvaleur}
        taskList.push(objettask);

        localStorage.setItem('tasklistestorage', JSON.stringify(taskList));
        console.log(taskList);

    }

    btnclick.addEventListener('click',()=>{
        addTask();
    })



