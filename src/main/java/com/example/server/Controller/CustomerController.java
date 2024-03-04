package com.example.server.Controller;

import com.example.server.Entity.Customer;
import com.example.server.Entity.Product;
import com.example.server.Model.ProductDetail;
import com.example.server.Services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CustomerController {
    @Autowired
    private CustomerServices customerServices;

    @PostMapping("/registration")
    public Customer userRegistration(@RequestBody Customer custData){
        return customerServices.userRegistration(custData);
    }

    //login
    @PostMapping("/authenticate")
    public Customer authenticate(@RequestBody Customer loginRequest) {
        return customerServices.authenticate(loginRequest.getUserName(), loginRequest.getPwd());
    }

    @GetMapping("/getUsers")
    public List<Customer> getUsers(){
        return customerServices.getUsers();
    }

    //addToCart
    @PostMapping("/purchase")
    public String purchase(@RequestBody List<ProductDetail> products, @RequestBody Long custId, @RequestBody Integer price){

        customerServices.purchase(products,452l,20);
        return ("Purchased");
    }
//    @PostMapping("/purchase")
//    public String purchase({302: 1, 252: 1},452,20 ){
//        customerServices.purchase({"302": 1, "252": 1},452,20);
//        return ("Purchased");
//    }

    @GetMapping("/search/{keyword}")
    public List<Product> searchProduct(@PathVariable String keyword){
        return customerServices.searchProduct(keyword);
    }
}
