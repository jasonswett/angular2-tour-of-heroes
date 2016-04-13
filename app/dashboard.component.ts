import { Component, OnInit } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router  } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private _router: Router,
    private _heroService: HeroService) {
  }

  ngOnInit() {
    this._heroService.getHeroes()
      .subscribe(response => this.heroes = response.json().heros.slice(0, 4));
  }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
