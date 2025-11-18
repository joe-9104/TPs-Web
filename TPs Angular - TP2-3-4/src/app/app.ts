import { Component, signal } from '@angular/core';
import { Produit } from "./components/produit/produit";
import { Utilisateur } from './components/utilisateur/utilisateur';
import { NgFor, NgForOf } from '@angular/common';
import { FormulaireInscription } from "./components/formulaire-inscription/formulaire-inscription";

@Component({
  selector: 'app-root',
  imports: [FormulaireInscription, NgForOf, Produit, Utilisateur],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TP4');
  protected produits : string[] = ["potato", "tomato", "onion", "carrot"]
  protected panier : string[] = [];

  handlePanier(e: string) {
    alert('Produit ajouté au panier');
    this.panier.push(e);
  }
}
