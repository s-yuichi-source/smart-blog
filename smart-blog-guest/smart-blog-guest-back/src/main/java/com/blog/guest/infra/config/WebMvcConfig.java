package com.blog.guest.infra.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    
    public void addCorsMapping(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:8384")
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }

    @Bean
    ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper;
    }
}
