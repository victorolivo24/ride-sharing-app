package com.victorolivo.ridesharing.model;

import java.io.Serializable;

public class Rating implements Serializable {
    private String riderName;
    private int driverRUID;
    private int stars; // 1 to 5
    private String comment;

    public Rating() {}

    public Rating(String riderName, int driverRUID, int stars, String comment) {
        this.riderName = riderName;
        this.driverRUID = driverRUID;
        this.stars = stars;
        this.comment = comment;
    }

    // Getters and Setters
    public String getRiderName() { return riderName; }
    public void setRiderName(String riderName) { this.riderName = riderName; }

    public int getDriverRUID() { return driverRUID; }
    public void setDriverRUID(int driverRUID) { this.driverRUID = driverRUID; }

    public int getStars() { return stars; }
    public void setStars(int stars) { this.stars = stars; }

    public String getComment() { return comment; }
    public void setComment(String comment) { this.comment = comment; }
}
