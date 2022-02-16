package com.legatohealth.service;

import java.util.List;

import com.legatohealth.beans.ProductEntity;
import com.legatohealth.exceptions.ProductNotFound;

public interface ProductService {

	public ProductEntity storeProduct(ProductEntity product);

	public ProductEntity fetchProduct(int id) throws ProductNotFound;

	public void deleteProduct(int id) throws ProductNotFound;

	public ProductEntity updateProduct(int id, ProductEntity product) throws ProductNotFound;

	public List<ProductEntity> fetchAllProducts();

}
