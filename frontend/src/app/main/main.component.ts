import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  keys = [];
  path = [];
  strPath = [];
  disabled: boolean = false;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.firstParse();
  }

  firstParse() {
    this.path = [];
    this.keys = [];
    this.dataService.getJSON().subscribe(response => {
      this.keys.push(response.infos);
    }, error => {
      console.log("error");
    });
  }

  onParseJSON(key?) {
    this.dataService.getJSON().subscribe(response => {
      this.extractKeys(key.child);
    }, error => {
      console.log("error");
    });
  }

  extractKeys(response: any) {
    for (let x in response) {
      this.keys.push(response[x]);
      if (response[x].child=="null"){
        this.disabled = true;
      }
      else{
        this.disabled = false;
      }
    }
  }

  switchKey(key) {
    this.path.push(key);
    this.keys = [];
    this.onParseJSON(key);
  }

  searchKey(key) {
    this.keys = [];
    for (let i = 0; i < this.path.length; i++) {
      if (this.path[i] == key) {
        this.path = this.path.slice(0, i + 1);
        this.strPath = this.strPath.slice(0, i + 1);
        this.onParseJSON(key);
      }
    }
  }
}
