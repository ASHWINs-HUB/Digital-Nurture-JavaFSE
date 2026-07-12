package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

    // Search countries containing text
    List<Country> findByNameContaining(String text);

    // Search countries containing text and sort ascending
    List<Country> findByNameContainingOrderByNameAsc(String text);

    // Search countries starting with text
    List<Country> findByNameStartingWith(String alphabet);

}