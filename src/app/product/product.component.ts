import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    const productIdString = this.route.snapshot.paramMap.get('id');
    
    const productId = Number(productIdString);
    
    // Récupérer les détails du produit avec ID
    if (!isNaN(productId)) {
        this.productService.getProductById(productId).subscribe((data: Product) => {
            this.product = data;
        });
    }
  }
  }
