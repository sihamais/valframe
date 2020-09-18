import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ValFrame';

  keys = [];
  path = [];
  disabled: boolean = false;

  constructor(private router: Router,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.firstParse();
  }

  firstParse() {
    this.disabled = false;
    this.path = [];
    this.keys = [];
    this.dataService.getJSON().subscribe(response => {
      this.keys.push(response.infos);
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
    this.extractKeys(key.child);
  }

  searchKey(key) {
    this.keys = [];
    for (let i = 0; i < this.path.length; i++) {
      if (this.path[i] == key) {
        this.path = this.path.slice(0, i + 1);
        this.extractKeys(key.child);
      }
    }
  }
}
