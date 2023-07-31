import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./services/pokemon.service";
import { Pokemon } from "./interfaces/pokemon.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "intro";
  test: string = "test";
  isLoading: boolean = true;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.isServiceSuccess();
    this.pokemonService.getPokemon(1).subscribe((res: any) => {
      this.pokemons.push({
        name: res.name,
        id: res.id,
        weight: res.weight,
        height: res.height,
      });
    });
    this.pokemonService.getPokemon(2).subscribe((res: any) => {
      this.pokemons.push({
        name: res.name,
        id: res.id,
        weight: res.weight,
        height: res.height,
      });
      console.warn(this.pokemons);
    });
  }

  isServiceSuccess() {
    setTimeout(() => {
      this.isLoading = false;
      this.test = "davuthan";
    }, 1500);
  }
}
