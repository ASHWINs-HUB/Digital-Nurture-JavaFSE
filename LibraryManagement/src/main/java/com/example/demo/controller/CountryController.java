package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Country;
import com.example.demo.exception.CountryNotFoundException;
import com.example.demo.service.CountryService;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    // Get all countries
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    // Get country by code
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code)
            throws CountryNotFoundException {

        return countryService.findCountryByCode(code);
    }

    // Add country
    @PostMapping("/countries")
    public String addCountry(@RequestBody Country country) {

        countryService.addCountry(country);

        return "Country Added Successfully";
    }

    // Update country
    @PutMapping("/countries/{code}")
    public String updateCountry(@PathVariable String code,
                                @RequestParam String name)
            throws CountryNotFoundException {

        countryService.updateCountry(code, name);

        return "Country Updated Successfully";
    }

    // Delete country
    @DeleteMapping("/countries/{code}")
    public String deleteCountry(@PathVariable String code) {

        countryService.deleteCountry(code);

        return "Country Deleted Successfully";
    }

    // Query Method 1 - Search by containing text
    @GetMapping("/countries/search/{text}")
    public List<Country> searchCountries(@PathVariable String text) {

        return countryService.searchCountries(text);
    }

    // Query Method 2 - Search by containing text and sort
    @GetMapping("/countries/searchsorted/{text}")
    public List<Country> searchCountriesSorted(@PathVariable String text) {

        return countryService.searchCountriesSorted(text);
    }

    // Query Method 3 - Search by starting alphabet
    @GetMapping("/countries/startswith/{alphabet}")
    public List<Country> searchCountriesStartingWith(@PathVariable String alphabet) {

        return countryService.searchCountriesStartingWith(alphabet);
    }
}