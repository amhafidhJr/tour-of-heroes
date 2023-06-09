import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from '../heroes-list';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number) {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id ${id}`);
    return of(hero);
  }
}
