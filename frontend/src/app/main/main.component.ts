import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphService } from '../services/graph/graph.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  keys = [];
  path = [];
  strPath = [];

  constructor(private router: Router,
    private graphService: GraphService) { }

  ngOnInit(): void {
    this.firstParse();
  }

  firstParse() {
    this.graphService.getJSON().subscribe(response => {
      this.keys = [];
      for (let x in response.overview) {
        this.keys.push(x);
      }
    }, error => {
      // handle error here
      // error.status to get the error code
    });
  }


  onParseJSON(key?: string) {
    this.graphService.getJSON().subscribe(response => {
      this.extractKeys(response);
    }, error => {
      // handle error here
      // error.status to get the error code
    });
  }

  extractKeys(response: any) {
    const i = this.path.length;
    console.log(i);
    let j = 0;
    let res = response;
    while (j < i) {
      res = res[this.path[j]];
      console.log(res);
      j++;
    }
    // if (+res != NaN) {
    //   this.keys.push(res);
    // }
    // else {
    for (let x in res) {
      console.log(x);
      this.keys.push(x);
    }
    // }
  }

  onClick(key: string) {
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
    }
    this.onParseJSON(key);
  }
}
