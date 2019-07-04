package com.csi.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Ordero {
    private Integer oid;

    private Integer userid;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date ordertime;

    private Integer orderstate;

    private Double orderprice;

    public Integer getOid() {
        return oid;
    }

    public void setOid(Integer oid) {
        this.oid = oid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public Integer getOrderstate() {
        return orderstate;
    }

    public void setOrderstate(Integer orderstate) {
        this.orderstate = orderstate;
    }

    public Double getOrderprice() {
        return orderprice;
    }

    public void setOrderprice(Double orderprice) {
        this.orderprice = orderprice;
    }
}