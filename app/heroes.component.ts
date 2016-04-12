import { Component }           from 'angular2/core';
import { Router  }             from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { Hero }                from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { OnInit }              from 'angular2/core';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HTTP_PROVIDERS]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    public http: Http,
    private _router: Router,
    private _heroService: HeroService) { 
  }
  getHeroes() {
    this._heroService.getHeroes().subscribe(response => this.heroes = response.json().heros);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
