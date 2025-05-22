package com.victorolivo.ridesharing.model;

import java.io.Serializable;

public class Driver implements Serializable {
    private String name;
    private int RuId;
    private String vehicle;
    private int maxRiders;
    private double averageRating;

    public Driver() {}

    public Driver(String name, int RuId, String vehicle, int maxRiders) {
        this.name = name;
        this.RuId = RuId;
        this.vehicle = vehicle;
        this.maxRiders = maxRiders;
    }

    public String getName() {
        return name;
    }

    public int getRuId() {
        return RuId;
    }

    public String getVehicle() {
        return vehicle;
    }

    public int getMaxRiders() {
        return maxRiders;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRuId(int RuId) {
        this.RuId = RuId;
    }

    public void setVehicle(String vehicle) {
        this.vehicle = vehicle;
    }

    public void setMaxRiders(int maxRiders) {
        this.maxRiders = maxRiders;
    }
    public double getAverageRating() {
        return averageRating;
    }
    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }
    

    @Override
    public String toString() {
        return name + ", " + vehicle;
    }
}
