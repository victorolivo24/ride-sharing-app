package com.victorolivo.ridesharing.model;

import java.io.Serializable;
import java.util.ArrayList;

public class Route implements Serializable {
    private Driver driver;
    private String fromCampus;
    private String toCampus;
    private String time;
    private int maxRiders;
    private ArrayList<Rider> riders;

    public Route() {
        this.riders = new ArrayList<>();
    }

    public Route(Driver driver, String fromCampus, String toCampus, String time, int maxRiders) {
        this.driver = driver;
        this.fromCampus = fromCampus;
        this.toCampus = toCampus;
        this.time = time;
        this.maxRiders = maxRiders;
        this.riders = new ArrayList<>();
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public String getFromCampus() {
        return fromCampus;
    }

    public void setFromCampus(String fromCampus) {
        this.fromCampus = fromCampus;
    }

    public String getToCampus() {
        return toCampus;
    }

    public void setToCampus(String toCampus) {
        this.toCampus = toCampus;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getMaxRiders() {
        return maxRiders;
    }

    public void setMaxRiders(int maxRiders) {
        this.maxRiders = maxRiders;
    }

    public ArrayList<Rider> getRiders() {
        return riders;
    }

    public void setRiders(ArrayList<Rider> riders) {
        this.riders = riders;
    }

    public void addRider(Rider rider) {
        this.riders.add(rider);
    }
}
