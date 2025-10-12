// ================================
// Partie 4 – Révision des bases
// ================================
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Déclaration de variables primitives
var nom = "Youssef";
var age = 22;
var estEtudiant = true;
var note = null; // union de types
console.log("Bonjour ".concat(nom, ", \u00E2ge : ").concat(age, ", \u00E9tudiant : ").concat(estEtudiant));
// Fonction typée
function somme(a, b) {
    return a + b;
}
console.log("Somme 4 + 6 =", somme(4, 6));
// Classe qui implémente l’interface
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficherInfos = function () {
        return "\u00C9tudiant ".concat(this.id, " : ").concat(this.prenom, " ").concat(this.nom, ", ").concat(this.age, " ans");
    };
    return EtudiantImpl;
}());
// Test
var e1 = new EtudiantImpl(1, "Fathallah", "Youssef", 22);
console.log(e1.afficherInfos());
// ================================
// Partie 5 – Concepts avancés
// ================================
// 1️⃣ Types génériques
function creerTableau() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return __spreadArray([], elements, true);
}
var nombres = creerTableau(1, 2, 3, 4);
var noms = creerTableau("Ali", "Sara", "Nour");
console.log("Tableaux génériques:", nombres, noms);
// 2️⃣ Unions de types et types optionnels
function afficherValeur(valeur) {
    if (valeur === void 0) { valeur = null; }
    if (valeur === null)
        console.log("Aucune valeur");
    else
        console.log("Valeur reçue :", valeur);
}
afficherValeur("Bonjour");
afficherValeur(42);
afficherValeur();
// 3️⃣ Énumérations (enum)
var Role;
(function (Role) {
    Role["USER"] = "User";
    Role["ADMIN"] = "Admin";
    Role["SUPERADMIN"] = "SuperAdmin";
})(Role || (Role = {}));
var admin = { id: 1, nom: "Youssef", role: Role.ADMIN };
console.log("Utilisateur :", admin);
