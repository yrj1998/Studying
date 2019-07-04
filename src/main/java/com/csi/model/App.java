package com.csi.model;

public class App {
    private Integer id;

    private Integer appid;

    private String apikey;

    private String secretkey;

    private String threshod;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAppid() {
        return appid;
    }

    public void setAppid(Integer appid) {
        this.appid = appid;
    }

    public String getApikey() {
        return apikey;
    }

    public void setApikey(String apikey) {
        this.apikey = apikey == null ? null : apikey.trim();
    }

    public String getSecretkey() {
        return secretkey;
    }

    public void setSecretkey(String secretkey) {
        this.secretkey = secretkey == null ? null : secretkey.trim();
    }

    public String getThreshod() {
        return threshod;
    }

    public void setThreshod(String threshod) {
        this.threshod = threshod == null ? null : threshod.trim();
    }
}