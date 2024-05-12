import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    title = 'Au Petit Village';
    products: Product[] = [];
        selectedSortOrder: string = '';
    searchTerm: string = '';

    
    search() {
        this.products = [...this.products]; 
    }
    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe((data: Product[]) => {
            this.products = data;
        });
    }

    goToProductPage(productId: number): void {
        this.router.navigate(['/product', productId]);
    }
}
