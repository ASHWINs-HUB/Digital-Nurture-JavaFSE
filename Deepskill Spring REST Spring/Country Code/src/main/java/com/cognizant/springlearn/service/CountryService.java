package com.cognizant.springlearn.service;

import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {

        if (code.equalsIgnoreCase("IN")) {
            return new Country("IN", "India");
        }

        if (code.equalsIgnoreCase("US")) {
            return new Country("US", "United States");
        }

        return new Country("NA", "Country Not Found");
    }

}