import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number) {
    return this.http.get("https://pokeapi.co/api/v2/pokemon/" + id);
  }
}
