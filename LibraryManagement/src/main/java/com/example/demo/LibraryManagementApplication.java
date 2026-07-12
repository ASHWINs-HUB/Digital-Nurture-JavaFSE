package com.example.demo;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.entity.Country;
import com.example.demo.exception.CountryNotFoundException;
import com.example.demo.service.CountryService;

@SpringBootApplication
public class LibraryManagementApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(LibraryManagementApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(LibraryManagementApplication.class, args);

        countryService = context.getBean(CountryService.class);

        LOGGER.info("Inside main");

        testGetAllCountries();

        getCountryTest();
    }

    private static void testGetAllCountries() {

        LOGGER.info("========== Get All Countries ==========");

        List<Country> countries = countryService.getAllCountries();

        countries.forEach(System.out::println);

        LOGGER.info("=======================================");
    }

    private static void getCountryTest() {

        LOGGER.info("========== Find Country By Code ==========");

        try {
            Country country = countryService.findCountryByCode("IN");
            System.out.println(country);
        } catch (CountryNotFoundException e) {
            LOGGER.error(e.getMessage());
        }

        LOGGER.info("==========================================");
    }
}