package com.csi.model;

public class Admin {
    private Integer id;

    private String loginname;

    private String loginpwd;

    private String facepath;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLoginname() {
        return loginname;
    }

    public void setLoginname(String loginname) {
        this.loginname = loginname == null ? null : loginname.trim();
    }

    public String getLoginpwd() {
        return loginpwd;
    }

    public void setLoginpwd(String loginpwd) {
        this.loginpwd = loginpwd == null ? null : loginpwd.trim();
    }

    public String getFacepath() {
        return facepath;
    }

    public void setFacepath(String facepath) {
        this.facepath = facepath == null ? null : facepath.trim();
    }
}