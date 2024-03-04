package com.example.server.Services;

import com.example.server.Entity.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public interface AdminServices {
    public Product addNewProduct(Product product);

   public  List<Product> getProductByCategory(String category);

//    public String addProductImage(MultipartFile file);
}
