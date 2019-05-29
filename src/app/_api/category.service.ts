import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Category } from '../_models/category.model';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  readAll(): Observable<Category[]> {

    return this.http.get(`categories`)
    .map((response: any) => {
      return response.categories;
    })
  }

  read(category: Category): Observable<Category> {

    return this.http.get(`categories/${category._id}`)
    .map((response: any) => {
      return response.category;
    })
  }

  create(category: Category): Observable<Category> {

    return this.http.post(`categories`, category)
    .map((response: any) => {
      return response.category;
    })
  }

  update(category: Category): Observable<Category> {

    return this.http.put(`categories/${category._id}`, category)
    .map((response: any) => {
      return response.category;
    })
  }

  delete(category: Category, shouldDelete: boolean): Observable<Category> {

    return this.http.delete(`categories/${category._id}?shouldDelete=${shouldDelete}`)
    .map((response: any) => {
      return response.category;
    })
  }
}
