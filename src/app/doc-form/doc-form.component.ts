import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/models/card.model';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.scss']
})
export class DocFormComponent implements OnInit {
  cards: Card[] = [];

  edit: boolean = false;

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.cards = [];
    let newCard = new Card(this.cards.length,"Title here",["First point","Second point","Third point"], []);
    this.cards.push(newCard);
  }

  onAddCard(){
    let newCard = new Card(this.cards.length,"Title here",["First point","Second point","Third point"], []);
    this.cards.push(newCard);
  }

  onAddChild(card: Card){
    let newCard = new Card(this.cards.length,"Title here",["First point","Second point","Third point"], []);
    card.childs.push(newCard);

  }

  onEdit(){
    this.edit = !this.edit;
  }

  onRemoveCard(card: Card){
    for (let i = 0; i < this.cards.length; i++){
      if (this.cards[i]== card){
        this.cards.splice(i,1);
      }
    }
  }
}
