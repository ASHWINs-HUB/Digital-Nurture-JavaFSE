package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderLogging {

    private static final Logger logger =
            LoggerFactory.getLogger(AppenderLogging.class);

    public static void main(String[] args) {

        logger.debug("Debug Message");

        logger.info("Information Message");

        logger.warn("Warning Message");

        logger.error("Error Message");
    }
}