package com.example.server.Services.Implementations;

import com.example.server.Entity.Customer;
import com.example.server.Entity.Orders;
import com.example.server.Entity.OrderItem;
import com.example.server.Entity.Product;
import com.example.server.Model.ProductDetail;
import com.example.server.Repository.CustomerRepo;
import com.example.server.Repository.OrderItemRepo;
import com.example.server.Repository.OrderRepo;
import com.example.server.Repository.ProductRepo;
import com.example.server.Services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class CustomerServicesImp implements CustomerServices {
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private OrderItemRepo orderItemRepo;
    @Override
    public Customer userRegistration(Customer custData) {
        return customerRepo.save(custData);
    }

    @Override
    public List<Customer> getUsers() {
        return customerRepo.findAll();
    }




    @Override
    public String purchase(List<ProductDetail> products, Long custID, Integer price) {
        Orders newOrders =new Orders();
        Customer customer=customerRepo.findById(custID).get();
        newOrders.setCustomer(customer);
        newOrders.setTotalAmount(price);
        Orders orders =orderRepo.save(newOrders);
        Long orderId= orders.getOrderId();
        for(ProductDetail item:products){
            Product product=productRepo.findById(item.prodId).get();

            OrderItem newOrderItem=new OrderItem();
            newOrderItem.setOrders(orders);
            newOrderItem.setProduct(product);

            Integer quantity= item.quantity;
            newOrderItem.setQuantity(quantity);
            Integer available=product.getQuantity();
            available=available-quantity;
            if(available<0){
                return "Not available";
            }else if(available>=0){
                product.setQuantity(quantity);
            }
        }
        return("Purchased");



    }

    @Override
    public Customer authenticate(String userName, String pwd) {
        Customer obj=customerRepo.findByuserName(userName);
        if(obj!=null){
            String username=obj.getUserName();
            String password=obj.getPwd();
            if(Objects.equals(pwd,password)){
                System.out.println("Authenticated");
            }
            else{
                System.out.println("Not valid");
            }
        }else{
            System.out.println("No user found");
        }

        return obj;
    }

    @Override
    public List<Product> searchProduct(String keyword) {
        return productRepo.findByproductName(keyword);
    }

}
