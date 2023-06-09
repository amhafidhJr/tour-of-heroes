import { Component, Input } from '@angular/core';
import { Hero } from '../interface/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

 @Input() hero?:Hero;

 constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location,
 ) {}

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getHero();
 }

 getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);
 }

 goBack(): void {
  this.location.back();
 }

}
