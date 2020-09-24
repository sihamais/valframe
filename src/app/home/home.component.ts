import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { SafeHtmlPipe } from '../home/SafeHtml.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})

export class HomeComponent implements OnInit {

  keys = [];
  path = [];

  constructor(private router: Router,
    private dataService: DataService,
    public safeHtml : SafeHtmlPipe) { }

  ngOnInit(): void {
    this.firstParse();
  }
  firstParse() {
    this.path = [];
    this.keys = [];
    this.dataService.getJSON().subscribe(response => {
      this.keys.push(response.infos);
    }, error => {
      console.log("error on the parse");
    });
  }

  extractKeys(response: any) {
    for (let x in response) {
      this.keys.push(response[x]);
    }
  }

  switchKey(key) {
    if (key.child != "null") {
      this.path.push(key);
      this.keys = [];
      this.extractKeys(key.child);
    }
  }

  searchKey(key) {
    this.keys = [];
    if (this.path.length == 1) {
      this.firstParse();
    }
    else {
      for (let i = 0; i < this.path.length; i++) {
        if (this.path[i] == key) {
          this.path = this.path.slice(0, i + 1);
          this.extractKeys(key.child);
        }
      }
    }
  }

  logOut() {
    this.router.navigate(['/login']);
  }
}
