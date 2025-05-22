package com.victorolivo.ridesharing.model;


public class SignupRequest {
    private String riderName;
    private int ruId;
    private String fromCampus;
    private String toCampus;
    private String time;

    public String getRiderName() {
        return riderName;
    }

    public void setRiderName(String riderName) {
        this.riderName = riderName;
    }

    public int getRuId() {
        return ruId;
    }

    public void setRuId(int ruId) {
        this.ruId = ruId;
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
}
