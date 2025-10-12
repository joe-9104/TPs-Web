// ================================
// Partie 4 – Révision des bases
// ================================

// Déclaration de variables primitives
let nom: string = "Youssef";
let age: number = 21;
let estEtudiant: boolean = true;
// union de types
let note: number | null = null;

console.log(`Bonjour ${nom}, âge : ${age}, étudiant : ${estEtudiant}`);

// Fonction typée
function somme(a: number, b: number): number {
  return a + b;
}

console.log("Somme 4 + 6 =", somme(4, 6));

// Interface Etudiant
interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  age: number;
}

// Classe qui implémente l’interface
class EtudiantImpl implements Etudiant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public age: number
  ) {}

  afficherInfos(): string {
    return `Étudiant ${this.id} : ${this.prenom} ${this.nom}, ${this.age} ans`;
  }
}

// Test
const e1 = new EtudiantImpl(1, "Fathallah", "Youssef", 22);
console.log(e1.afficherInfos());


// ================================
// Partie 5 – Concepts avancés
// ================================

// Types génériques
function creerTableau<T>(...elements: T[]): T[] {
  return [...elements];
}

const nombres = creerTableau<number>(1, 2, 3, 4);
const noms = creerTableau<string>("Youssef", "Idris", "Omar");
console.log("Tableaux génériques:", nombres, noms);

// Unions de types et types optionnels
function afficherValeur(valeur: string | number | null = null): void {
  if (valeur === null) console.log("Aucune valeur");
  else console.log("Valeur reçue :", valeur);
}

afficherValeur("Bonjour");
afficherValeur(42);
afficherValeur();

// Énumérations (enum)
enum Role {
  USER = "User",
  ADMIN = "Admin",
  SUPERADMIN = "SuperAdmin"
}

interface Utilisateur {
  id: number;
  nom: string;
  role: Role;
}

const admin: Utilisateur = { id: 1, nom: "Youssef", role: Role.ADMIN };
console.log("Utilisateur :", admin);
