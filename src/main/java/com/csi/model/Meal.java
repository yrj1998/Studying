package com.csi.model;

public class Meal {
    private Integer meaid;

    private Integer mealseriesid;

    private String mealname;

    private String mealsummarize;

    private String mealdescription;

    private Double mealprice;

    private String mealimage;

    public Integer getMeaid() {
        return meaid;
    }

    public void setMeaid(Integer meaid) {
        this.meaid = meaid;
    }

    public Integer getMealseriesid() {
        return mealseriesid;
    }

    public void setMealseriesid(Integer mealseriesid) {
        this.mealseriesid = mealseriesid;
    }

    public String getMealname() {
        return mealname;
    }

    public void setMealname(String mealname) {
        this.mealname = mealname == null ? null : mealname.trim();
    }

    public String getMealsummarize() {
        return mealsummarize;
    }

    public void setMealsummarize(String mealsummarize) {
        this.mealsummarize = mealsummarize == null ? null : mealsummarize.trim();
    }

    public String getMealdescription() {
        return mealdescription;
    }

    public void setMealdescription(String mealdescription) {
        this.mealdescription = mealdescription == null ? null : mealdescription.trim();
    }

    public Double getMealprice() {
        return mealprice;
    }

    public void setMealprice(Double mealprice) {
        this.mealprice = mealprice;
    }

    public String getMealimage() {
        return mealimage;
    }

    public void setMealimage(String mealimage) {
        this.mealimage = mealimage == null ? null : mealimage.trim();
    }
}