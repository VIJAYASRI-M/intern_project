package com.example.server.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderId;
    @ManyToOne //one customer can have many orders
    @JoinColumn(name = "custId")
    private Customer customer;

    private boolean orderStatus;

    private double totalAmount;
    @CreationTimestamp
    private Date createdAt;

    @OneToMany(mappedBy = "orders",cascade = CascadeType.ALL)
    private List<OrderItem> OrderItemList;
}
