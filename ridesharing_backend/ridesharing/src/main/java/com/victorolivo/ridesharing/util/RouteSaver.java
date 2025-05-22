package com.victorolivo.ridesharing.util;

import com.victorolivo.ridesharing.model.Route;
import java.io.*;
import java.util.HashMap;

public class RouteSaver {
    // Method to save the routes HashMap to a file
    public static void saveRoutes(HashMap<String, Route> routesMap, String fileName) {
        try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream(fileName))) {
            out.writeObject(routesMap);
            System.out.println("Routes saved successfully.");
        } catch (IOException e) {
            System.out.println("Error saving routes:");
            e.printStackTrace();  // <-- NOW you will see real errors
        }
    }

    // Method to load the routes HashMap from a file
    @SuppressWarnings("unchecked")
    public static HashMap<String, Route> loadRoutes(String fileName) {
        try (ObjectInputStream in = new ObjectInputStream(new FileInputStream(fileName))) {
            return (HashMap<String, Route>) in.readObject();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading routes:");
            e.printStackTrace();  // <-- Now shows errors
            return new HashMap<>();
        }
    }
}
