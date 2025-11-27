package com.hydrogenx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HydrogenXApplication {

    public static void main(String[] args) {
        SpringApplication.run(HydrogenXApplication.class, args);
        System.out.println("===========================================");
        System.out.println("Hydrogen X Backend started successfully!");
        System.out.println("Server running on: http://localhost:8080");
        System.out.println("===========================================");
    }
}
