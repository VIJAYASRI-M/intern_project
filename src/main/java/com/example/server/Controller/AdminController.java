package com.example.server.Controller;

import com.example.server.Entity.Product;
import com.example.server.Services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @PostMapping("/addnewproduct")
    public Product addNewProduct(@RequestBody Product product){
        return adminServices.addNewProduct(product);
    }

    @GetMapping("/getProducts/{category}")
    public List<Product> getProductByCategory(@PathVariable String category){
        return adminServices.getProductByCategory(category);
    }

}
