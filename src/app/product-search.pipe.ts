import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

    transform(products: any[], searchTerm: string): any[] {
        if (!searchTerm || searchTerm === '') {
            return products; // Si le terme de recherche est vide, retourner tous les produits
        }

        searchTerm = searchTerm.toLowerCase(); 

        return products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
    }

}
