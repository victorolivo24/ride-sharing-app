package com.victorolivo.ridesharing.model;

import java.io.Serializable;

public class Rider implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    private int RuId;

    // Constructor
    public Rider(String name, int RuId) {
        this.name = name;
        this.RuId = RuId;
    }

    // Getters
    public String getName() {
        return name;
    }

    public int getRuId() {
        return RuId;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setRuId(int RuId) {
        this.RuId = RuId;
    }
}
