package com.victorolivo.ridesharing.controller;


import com.victorolivo.ridesharing.model.Route;
import com.victorolivo.ridesharing.model.Driver;
import com.victorolivo.ridesharing.model.Rating;
import com.victorolivo.ridesharing.model.Rider;
import com.victorolivo.ridesharing.util.RouteSaver;

import com.victorolivo.ridesharing.model.SignupRequest;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;
import java.util.List;

@RestController
@RequestMapping("/api/rides")
@CrossOrigin(origins = "http://localhost:3000")
public class RideController {
    private List<Rating> allRatings = new ArrayList<>();

    private HashMap<String, Route> routesMap = RouteSaver.loadRoutes("routes.dat"); // <-- changed!

    @PostMapping("/create")
    public HashMap<String, String> createRoute(@RequestBody Route route) {
        System.out.println("Route saved for driver RUID: " + route.getDriver().getRuId());

        HashMap<String, String> response = new HashMap<>();
        try {
            String key = route.getFromCampus() + " to " + route.getToCampus();
            routesMap.put(key, route);
            RouteSaver.saveRoutes(routesMap, "routes.dat");
            response.put("message", "Route created successfully");
        } catch (Exception e) {
            System.out.println("Error saving routes: " + e.getMessage());
            e.printStackTrace();
            response.put("message", "Error creating route");
        }
        return response;
    }
    private double getAverageRatingForDriver(int ruId) {
        List<Rating> driverRatings = allRatings.stream()
            .filter(r -> r.getDriverRUID() == ruId)
            .collect(Collectors.toList());
        
        if (driverRatings.isEmpty()) return 0.0;
    
        int total = driverRatings.stream().mapToInt(Rating::getStars).sum();
        return (double) total / driverRatings.size();
    }
    
    @PostMapping("/signup")
public String signUpRider(@RequestBody SignupRequest request) {
    for (Route route : routesMap.values()) {
        if (route.getFromCampus().equalsIgnoreCase(request.getFromCampus()) &&
            route.getToCampus().equalsIgnoreCase(request.getToCampus()) &&
            route.getTime().equalsIgnoreCase(request.getTime())) {

            if (route.getRiders().size() < route.getMaxRiders()) {
                route.addRider(new Rider(request.getRiderName(), request.getRuId()));
                RouteSaver.saveRoutes(routesMap, "routes.dat");
                return "Signed up successfully";
            } else {
                return "Route is full";
            }
        }
    }
    return "Route not found";
}
    @PostMapping("/rate")
    public String rateDriver(@RequestBody Rating rating) {
        allRatings.add(rating);
        System.out.println("New rating submitted: " + rating.getStars() + " stars for driver " + rating.getDriverRUID());
        return "Rating received!";
    }

    @GetMapping("/ratings")
    public List<Rating> getAllRatings() {
        return allRatings;
    }


    @GetMapping("/all")
    public HashMap<String, Route> getAllRoutes() {
        return routesMap;
    }

    @GetMapping("/search")
    public HashMap<String, Route> searchRoutes(@RequestParam String fromCampus, @RequestParam String toCampus) {
        System.out.println("\n--- SEARCH endpoint hit ---");
        System.out.println("Received search for:");
        System.out.println("- fromCampus: " + fromCampus);
        System.out.println("- toCampus: " + toCampus);
        System.out.println("Current routes map: " + routesMap);
    
        HashMap<String, Route> result = new HashMap<>();
    
        for (Route route : routesMap.values()) {
            System.out.println("Checking route: " + route.getFromCampus() + " -> " + route.getToCampus());
            System.out.println("Route details: from=" + route.getFromCampus() +
                    ", to=" + route.getToCampus() +
                    ", maxRiders=" + route.getMaxRiders() +
                    ", currentRiders=" + route.getRiders().size());
    
            if (route.getFromCampus().equalsIgnoreCase(fromCampus) &&
                route.getToCampus().equalsIgnoreCase(toCampus) &&
                route.getRiders().size() < route.getMaxRiders()) {
    
                double avgRating = getAverageRatingForDriver(route.getDriver().getRuId());
                route.getDriver().setAverageRating(avgRating);  // ⭐ Set driver's average rating
    
                String key = route.getFromCampus() + " to " + route.getToCampus();
                result.put(key, route);
                System.out.println("MATCH FOUND: " + key);
            }
        }
    
        if (result.isEmpty()) {
            System.out.println("No matching routes found.");
        }
    
        System.out.println("--- SEARCH END ---\n");
        return result;
    }
    
   
    @GetMapping("/driver-routes")
    public List<Route> getDriverRoutes(@RequestParam int ruId) {
        System.out.println("Fetching routes for RUID: " + ruId); // Debug
        List<Route> driverRoutes = new ArrayList<>();
        for (Route route : routesMap.values()) {
            System.out.println("Found route with driver RUID: " + route.getDriver().getRuId()); // Debug
            if (route.getDriver().getRuId() == ruId) {
                driverRoutes.add(route);
                System.out.println("MATCHED route: " + route.getFromCampus() + " to " + route.getToCampus());
            }
        }
        return driverRoutes;
    }
    @GetMapping("/upcoming")
    public List<Route> getUpcomingRides(@RequestParam int ruId) {
        List<Route> upcoming = new ArrayList<>();

        for (Route route : routesMap.values()) {
            for (Rider rider : route.getRiders()) {
                if (rider.getRuId() == ruId) {
                    upcoming.add(route);
                    break; // no need to keep checking this route
                }
            }
        }

        return upcoming;
    }


    
}
