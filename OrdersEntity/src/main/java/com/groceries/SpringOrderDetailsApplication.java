package com.groceries;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class SpringOrderDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringOrderDetailsApplication.class, args);
	}

}
