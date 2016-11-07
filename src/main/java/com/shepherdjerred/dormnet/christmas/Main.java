package com.shepherdjerred.dormnet.christmas;

import com.shepherdjerred.dormnet.christmas.routes.Router;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import spark.Spark;

import static spark.Spark.*;

public class Main {

    public static final Logger logger = LogManager.getLogger(Main.class);

    public static void main(String[] args) {
        port(8080);
        staticFiles.location("/assets");
        new Router().setupRoutes();
    }

    public static void stop() {
        Spark.stop();
    }
}