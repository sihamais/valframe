import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})

export class HomeComponent implements OnInit {

  keys = [];
  path = [];

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
      console.log("error on the parse");
    });
  }

  extractKeys(response: any) {
    for (let x in response) {
     // this.links(response[x]);
      this.keys.push(response[x]);
    }
  }

  switchKey(key) {
    this.path.push(key);
    this.keys = [];
    if (key.child == "null") {
      console.log("end of the path");
    } else {
      this.extractKeys(key.child);
    }
  }

  links(key) {
    if (key.links) {
      for (let i = 0; i < key.desc.value.length; i++) {
        console.log(key.desc.value[i]);
        for (let j = 0; j < key.links.length; j++) {
          console.log(key.links[j].value);
          if (key.desc.value[i].includes(key.links[j].value)) {
            key.desc.value[i].innerHTML = key.links[j].link;
            console.log(key.links[j].value);
          }
        }
      }
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
