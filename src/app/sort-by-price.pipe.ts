import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

    transform(products: any[], sortOrder: string): any[] {
        if (!sortOrder) {
            // retourner les produits sans les trier, si l'ordre n'est pas sélectionné 
            return products;
        }
        return products.sort((a:any, b:any) =>{
            const priceA = parseFloat(a.price);
            const priceB = parseFloat(b.price);

            if (sortOrder === 'asc') {
                return priceA - priceB; 
            } else if (sortOrder === 'desc') {
                return priceB - priceA; 
            } else {
                return 0;
            }
        })

    }
}
