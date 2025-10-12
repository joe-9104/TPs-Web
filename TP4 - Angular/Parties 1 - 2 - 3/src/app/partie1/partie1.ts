import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

interface Question {
  text: string;
  options: { text: string; correct: boolean }[];
}

@Component({
  selector: 'app-partie1',
  imports: [NgForOf],
  templateUrl: './partie1.html',
  styleUrl: './partie1.scss'
})
export class Partie1 {
  questions: Question[] = [
    {
      text: "1. Quelle est la principale fonction de Node.js dans le développement Angular ?",
      options: [
        { text: "a) Un environnement d'exécution pour le code JavaScript côté serveur.", correct: true },
        { text: "b) Un éditeur de code source pour écrire du code Angular.", correct: false },
        { text: "c) Un gestionnaire de packages pour installer les dépendances Angular.", correct: false },
        { text: "d) Un framework front-end pour créer des interfaces utilisateur.", correct: false }
      ]
    },
    {
      text: "2. Quelle commande permet d’installer Angular CLI globalement sur votre système ?",
      options: [
        { text: "a) npm install -g @angular/core", correct: false },
        { text: "b) npm install @angular/cli", correct: false },
        { text: "c) npm install -g @angular/cli", correct: true },
        { text: "d) ng new my-app", correct: false }
      ]
    },
    {
      text: "3. Parmi les éditeurs suivants, lequel est recommandé pour Angular ?",
      options: [
        { text: "a) Notepad++", correct: false },
        { text: "b) Visual Studio Code", correct: true },
        { text: "c) Sublime Text", correct: false },
        { text: "d) Eclipse", correct: false }
      ]
    },
    {
      text: "4. Quel fichier contient les dépendances du projet Angular ?",
      options: [
        { text: "a) angular.json", correct: false },
        { text: "b) package.json", correct: true },
        { text: "c) tsconfig.json", correct: false },
        { text: "d) README.md", correct: false }
      ]
    },
    {
      text: "5. Quelle commande crée un projet Angular nommé 'ma-app' ?",
      options: [
        { text: "a) ng create ma-app", correct: false },
        { text: "b) ng init ma-app", correct: false },
        { text: "c) ng new ma-app", correct: true },
        { text: "d) ng generate app ma-app", correct: false }
      ]
    },
    {
      text: "6. Quel est le rôle de la commande 'ng serve' ?",
      options: [
        { text: "a) Compiler le projet Angular en un fichier exécutable.", correct: false },
        { text: "b) Lancer un serveur de développement et recharger l'application.", correct: true },
        { text: "c) Installer les dépendances du projet.", correct: false },
        { text: "d) Générer des composants et services Angular.", correct: false }
      ]
    }
  ];
}
