package com.shepherdjerred.dormnet.christmas.routes;


import com.shepherdjerred.dormnet.christmas.util.template.ThymeleafTemplateEngine;
import spark.ModelAndView;

import java.util.HashMap;
import java.util.Map;

import static spark.Spark.get;

public class Router {


    public void setupRoutes() {
        get("/", (request, response) -> {
            Map<String, String> model = new HashMap<>();
            return new ModelAndView(model, "index");
        }, new ThymeleafTemplateEngine());
    }

}
