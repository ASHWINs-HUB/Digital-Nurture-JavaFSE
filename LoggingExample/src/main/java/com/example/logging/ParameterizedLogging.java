package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLogging {

    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLogging.class);

    public static void main(String[] args) {

        String student = "Ashwin";
        int age = 20;
        double marks = 89.5;

        logger.info("Student Name: {}", student);

        logger.info("Age: {}", age);

        logger.info("Marks: {}", marks);

        logger.info("Student {} scored {}", student, marks);
    }
}