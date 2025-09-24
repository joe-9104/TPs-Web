// étape 2
let taches = [];
console.log('Bienvenue');

const counter = document.getElementById("counter");
const clearAllBtn = document.getElementById("clearAll");

// étape 3
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
function afficherTexte() {
    const taskText = taskInput.value;
    if (taskText) {
        taskList.innerHTML += `<li>${taskText}</li>`;
    }else {
        console.error('Le champ de texte est vide.');
    }
}

// étape 4
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    afficherTexte();
    ajouterTache(taskInput.value);
    afficherTaches();
    taskInput.value = '';
});
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        afficherTexte();
        ajouterTache(taskInput.value);
        afficherTaches();
        taskInput.value = '';
    }
});

// étape 6
function ajouterTache(tache) {
    taches.push({texte: tache, etat: false});
    localStorage.setItem('taches', JSON.stringify(taches));
}
function supprimerTache(tache) {
    taches.splice(taches.indexOf(tache), 1);
    localStorage.setItem('taches', JSON.stringify(taches));
    afficherTaches();
}
function terminerTache(tache) {
    const index = taches.indexOf(tache);
    taches[index].etat = !taches[index].etat;
    localStorage.setItem('taches', JSON.stringify(taches));
    afficherTaches();
}

// étape 7 & 8
function afficherTaches() {
  taskList.innerHTML = "";

  taches.forEach((tache, i) => {
    const li = document.createElement("li");
    if (tache.etat) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = tache.texte;

    //étape 5
    const terminerBtn = document.createElement("button");
    const supprimerBtn = document.createElement("button");

    terminerBtn.textContent = "Terminer";
    terminerBtn.onclick = () => terminerTache(tache);

    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.onclick = () => supprimerTache(tache);

    li.appendChild(span);
    li.appendChild(terminerBtn);
    li.appendChild(supprimerBtn);

    taskList.appendChild(li);
  });

  majCompteur();
}

//étape 9
function sauvegarder() {
  localStorage.setItem("tasks", JSON.stringify(taches));
}
afficherTaches();

//étape 10
function majCompteur() {
  const total = taches.length;
  const terminees = taches.filter(t => t.etat).length;
  const enCours = total - terminees;

  counter.textContent = `Total: ${total} | En cours: ${enCours} | Terminées: ${terminees}`;
}

clearAllBtn.onclick = () => {
  taches = [];
  sauvegarder();
  afficherTaches();
};
