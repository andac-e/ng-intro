import { Component, OnInit } from "@angular/core";
import { PokemonService } from "./services/pokemon.service";
import { Pokemon } from "./interfaces/pokemon.interface";
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  // name = new FormControl('');
  signupForm : any;
  user = {
    username: 'Davut',
    password: '123',
    isLoggedin: false,
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
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

  signup() {
    console.warn(this.signupForm.password.value === this.user.password)
  }
}
