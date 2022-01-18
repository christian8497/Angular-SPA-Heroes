import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx:number){
    //this.router.navigate(['/heroe',idx]);
    //console.log(idx)
  }

}
