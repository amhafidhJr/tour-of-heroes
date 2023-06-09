import { Component } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../heroes-list';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  // selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    // private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: selected hero id = ${hero.id}`);
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
