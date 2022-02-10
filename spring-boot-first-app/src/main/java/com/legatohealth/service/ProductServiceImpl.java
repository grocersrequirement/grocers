package com.legatohealth.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.legatohealth.beans.ProductEntity;
import com.legatohealth.beans.User;
import com.legatohealth.dao.ProductDao;
import com.legatohealth.exceptions.ProductNotFound;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao dao;

	@Override
	@Transactional
	public ProductEntity storeProduct(ProductEntity product) {
		ProductEntity productCreated = dao.save(product);
		return productCreated;
	}

	@Override
	public ProductEntity fetchProduct(int id) throws ProductNotFound {
		ProductEntity product = null;
		Optional<ProductEntity> optional = dao.findById(id);
		if (optional.isPresent()) {
			product = optional.get();
		} else {
			throw new ProductNotFound("Product with ID : " + id + "is not present");
		}
		return product;
	}

	@Override
	@Transactional
	public void deleteProduct(int id) throws ProductNotFound {
		ProductEntity product = fetchProduct(id);
		dao.delete(product);
	}

	@Override
	@Transactional
	public ProductEntity updateProduct(int id, ProductEntity product) throws ProductNotFound {
		ProductEntity updateproduct = fetchProduct(id);
		updateproduct.setProductname(updateproduct.getProductname());
		updateproduct.setPrice(updateproduct.getPrice());
		updateproduct.setDescription(updateproduct.getDescription());
		updateproduct.setQuantity(updateproduct.getQuantity());

		return dao.save(updateproduct);
	}

	@Override
	public List<ProductEntity> fetchAllProducts() {
		List<ProductEntity> list = dao.findAll();
		return list;
	}

}
