import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Question {
  text: string;
  options: { text: string; correct: boolean }[];
}

@Component({
  selector: 'app-partie2',
  imports: [NgForOf],
  templateUrl: './partie2.html',
  styleUrl: './partie2.scss'
})
export class Partie2 {
  questions: Question[] = [
    {
      text: "1. Quel répertoire contient les fichiers sources d’une app Angular ?",
      options: [
        { text: "a) src/", correct: true },
        { text: "b) dist/", correct: false },
        { text: "c) node_modules/", correct: false },
        { text: "d) e2e/", correct: false }
      ]
    },
    {
      text: "2. Dans quel fichier définissez-vous les modules, composants, services ?",
      options: [
        { text: "a) main.ts", correct: false },
        { text: "b) app.module.ts", correct: true },
        { text: "c) index.html", correct: false },
        { text: "d) styles.css", correct: false }
      ]
    },
    {
      text: "3. Quel est le rôle du fichier angular.json ?",
      options: [
        { text: "a) Configurer les dépendances npm du projet.", correct: false },
        { text: "b) Définir les configurations de compilation et les entrées/sorties.", correct: true },
        { text: "c) Spécifier les règles de linting.", correct: false },
        { text: "d) Définir les styles globaux.", correct: false }
      ]
    },
    {
      text: "4. Quelle commande génère un composant nommé header ?",
      options: [
        { text: "a) ng new component header", correct: false },
        { text: "b) ng generate header", correct: false },
        { text: "c) ng generate component header", correct: true },
        { text: "d) ng create component header", correct: false }
      ]
    },
    {
      text: "5. Quel est le rôle du fichier tsconfig.json ?",
      options: [
        { text: "a) Configurer le compilateur TypeScript.", correct: true },
        { text: "b) Définir les styles globaux.", correct: false },
        { text: "c) Spécifier les tests unitaires.", correct: false },
        { text: "d) Gérer les dépendances Angular.", correct: false }
      ]
    }
  ];
}
