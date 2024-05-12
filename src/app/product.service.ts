import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Product {
    id: number;
    name: string;
    description: string;
    url: string;
    dimensions: string;
    price: string;
}
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>('../assets/products.json');
    }

    getProductById(productId: number): Observable<Product>  {
        return this.getProducts().pipe(
            map(products => products.filter(product => product.id === productId)[0]),
            switchMap(product => {
                if (product) {
                    return of(product);
                } else {
                    return EMPTY;
                }
            })
        );
    }
}