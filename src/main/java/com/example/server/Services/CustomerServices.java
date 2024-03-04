package com.example.server.Services;

import com.example.server.Entity.Customer;
import com.example.server.Entity.Product;
import com.example.server.Model.ProductDetail;

import java.util.List;
import java.util.Map;

public interface CustomerServices {
    public Customer userRegistration(Customer custData);

    public List<Customer> getUsers();



    public String purchase(List<ProductDetail> products, Long custID, Integer price);

   public  Customer authenticate(String userName, String pwd);

    public List<Product> searchProduct(String keyword);
}
