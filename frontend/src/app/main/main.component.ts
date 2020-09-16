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
  product;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.firstParse();
  }

  firstParse() {
    this.path= [];
    this.dataService.getJSON().subscribe(response => {
      this.product = response.product;
      this.strPath.push(this.product);
      this.keys = [];
      for (let x in response) {
        this.keys.push(x);
      }
    }, error => {
      console.log("error");
    });
  }


  onParseJSON(key?: string) {
    this.dataService.getJSON().subscribe(response => {
      this.extractKeys(response);
    }, error => {
      // handle error here
      // error.status to get the error code
    });
  }

  extractKeys(response: any) {
    const i = this.path.length;
    let j = 0;
    let res = response;
    while (j < i) {
      res = res[this.path[j]];
      j++;
    }
    if (typeof res === 'string' || typeof res === 'number' ){
        this.keys.push(res);
    }
    else {
      for (let x in res) {
        this.keys.push(x);
      }
    }
  }

  switchKey(key: string) {
    this.strPath.push(key);
    this.path.push(key);
    this.keys = [];
    this.onParseJSON(key);
  }

  searchKey(key: string) {
    this.keys = [];
    for (let i = 0; i < this.path.length; i++) {
      if (this.path[i] == key) {
        this.path = this.path.slice(0, i+1);
        this.strPath = this.strPath.slice(0,i+1);
      }
      else if(this.path[i] == this.product){
        this.firstParse();
      }
    }
    this.onParseJSON(key);
  }
}
