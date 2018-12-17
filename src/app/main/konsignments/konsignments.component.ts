import { AuthService } from 'src/app/main/auth-service';
import { DbAbstractionLayer } from 'db-abstraction-layer';
import { Router, Params } from '@angular/router';
import { BasketService } from '@nodeart/basketservice';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../product-mgmt/productservice/src/product-service';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-konsignments',
  templateUrl: './konsignments.component.html',
  styleUrls: ['./konsignments.component.css']
})
export class KonsignmentsComponent implements OnInit {
/**
 * id of product
 */
id: string;
/**
 * Product data
 */
product;
/**
 * Product attributes
 */
attributes = [];
/**
 * Product tags
 */
tags = [];
/**
 * Attributes that a user must choose
 */
attrubutesToChoose = [];
/**
 * Is user authorized
 */
isAuth = false;
/**
 * Items of product
 */
items: number = 1;

	constructor (
		protected productService: ProductService,
		protected route: ActivatedRoute,
		protected basket: BasketService,
		protected zone: NgZone,
		protected router: Router,
		protected dal: DbAbstractionLayer,
		protected authService: AuthService
  ) { }

	ngOnInit() {
		this.dal.getAuth().onAuthStateChanded(data => {
			if (data == null) {
				this.isAuth = false;
			} else {
				this.isAuth = true;
			}
		});
		this.route.params.forEach((params: Params) => {
			this.id = params['id'];
			this.productService.getOneProduct(this.id).subscribe(product => {
				if (product.val() === 0) {
					this.product = {};
				} else if (product.val()) {
					this.zone.run(() => {
						this.product = product.val()[0]['_source'];
						this.product['id'] = product.val()[0]['id'];
					});
					this.getAttributes();
					this.getTags();
				}
			});
		});
	}

	/** 
	 * Get attributes of product
	 */
	getAttributes() {
		let attributes = this.product['attributes'];
		if (attributes) {
			for (let attrId in attributes) {
				if (attributes.hasOwnProperty(attrId)) {
					let attributeChilds
				}
			}
		}
	}
	})
})
	  })
  }

}
