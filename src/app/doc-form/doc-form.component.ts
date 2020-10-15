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
  display: Card[] = [];
  path: Card[] = [];
  json: string[];

  closeResult = '';

  edit: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.cards = [];
    let newCard = new Card(this.cards.length, "Title here", ["First point", "Second point", "Third point"]);
    this.cards.push(newCard);
    this.display.push(newCard);
  }

  onAddCard() {
    let newCard = new Card(this.cards.length, "Title here", ["First point", "Second point", "Third point"]);
    this.cards.push(newCard);
    this.display.push(newCard);
  }

  onAddChild(card: Card) {
    let newCard = new Card(this.cards.length, "Title here", ["First point", "Second point", "Third point"]);
    if (!card.childs) {
      card.childs = [];
    }
    card.childs.push(newCard);

  }

  onEdit() {
    this.edit = !this.edit;
  }

  onModifyCard() {

  }

  onRemoveCard(card: Card) {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i] == card) {
        this.cards.splice(i, 1);
      }
    }
    for (let i = 0; i < this.display.length; i++) {
      if (this.display[i] == card) {
        this.display.splice(i, 1);
      }
    }
    for (let i = 0; i < this.path.length; i++) {
      if (this.path[i] == card) {
        this.path.splice(i, 1);
      }
    }
  }

  onDepthSearch(card: Card) {
    if (card.childs) {
      this.path.push(card);
      this.display = [];
      for (let i = 0; i < card.childs.length; i++)
        this.display.push(card.childs[i]);
    }
  }

  onSearchCard(card: Card) {
    this.display = [];
    for (let i = 0; i < card.childs.length; i++)
      this.display.push(card.childs[i]);
  }

  onChange(card : Card, value: string, type: number){
    if (type == -1){
    card.title = value;
    }
    else {
      card.content[type] = value;
    }
  }

  toJSON(){

  }
}

