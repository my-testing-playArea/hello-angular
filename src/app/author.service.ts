import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private authors = ["author1","author2","author3","author4"];


  constructor() { }

  getAuthors(){
    return this.authors;
  }


}
