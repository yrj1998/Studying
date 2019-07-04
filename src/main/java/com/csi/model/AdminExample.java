package com.csi.model;

import java.util.ArrayList;
import java.util.List;

public class AdminExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public AdminExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andLoginnameIsNull() {
            addCriterion("loginName is null");
            return (Criteria) this;
        }

        public Criteria andLoginnameIsNotNull() {
            addCriterion("loginName is not null");
            return (Criteria) this;
        }

        public Criteria andLoginnameEqualTo(String value) {
            addCriterion("loginName =", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameNotEqualTo(String value) {
            addCriterion("loginName <>", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameGreaterThan(String value) {
            addCriterion("loginName >", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameGreaterThanOrEqualTo(String value) {
            addCriterion("loginName >=", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameLessThan(String value) {
            addCriterion("loginName <", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameLessThanOrEqualTo(String value) {
            addCriterion("loginName <=", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameLike(String value) {
            addCriterion("loginName like", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameNotLike(String value) {
            addCriterion("loginName not like", value, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameIn(List<String> values) {
            addCriterion("loginName in", values, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameNotIn(List<String> values) {
            addCriterion("loginName not in", values, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameBetween(String value1, String value2) {
            addCriterion("loginName between", value1, value2, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginnameNotBetween(String value1, String value2) {
            addCriterion("loginName not between", value1, value2, "loginname");
            return (Criteria) this;
        }

        public Criteria andLoginpwdIsNull() {
            addCriterion("loginPwd is null");
            return (Criteria) this;
        }

        public Criteria andLoginpwdIsNotNull() {
            addCriterion("loginPwd is not null");
            return (Criteria) this;
        }

        public Criteria andLoginpwdEqualTo(String value) {
            addCriterion("loginPwd =", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdNotEqualTo(String value) {
            addCriterion("loginPwd <>", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdGreaterThan(String value) {
            addCriterion("loginPwd >", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdGreaterThanOrEqualTo(String value) {
            addCriterion("loginPwd >=", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdLessThan(String value) {
            addCriterion("loginPwd <", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdLessThanOrEqualTo(String value) {
            addCriterion("loginPwd <=", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdLike(String value) {
            addCriterion("loginPwd like", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdNotLike(String value) {
            addCriterion("loginPwd not like", value, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdIn(List<String> values) {
            addCriterion("loginPwd in", values, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdNotIn(List<String> values) {
            addCriterion("loginPwd not in", values, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdBetween(String value1, String value2) {
            addCriterion("loginPwd between", value1, value2, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andLoginpwdNotBetween(String value1, String value2) {
            addCriterion("loginPwd not between", value1, value2, "loginpwd");
            return (Criteria) this;
        }

        public Criteria andFacepathIsNull() {
            addCriterion("facepath is null");
            return (Criteria) this;
        }

        public Criteria andFacepathIsNotNull() {
            addCriterion("facepath is not null");
            return (Criteria) this;
        }

        public Criteria andFacepathEqualTo(String value) {
            addCriterion("facepath =", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathNotEqualTo(String value) {
            addCriterion("facepath <>", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathGreaterThan(String value) {
            addCriterion("facepath >", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathGreaterThanOrEqualTo(String value) {
            addCriterion("facepath >=", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathLessThan(String value) {
            addCriterion("facepath <", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathLessThanOrEqualTo(String value) {
            addCriterion("facepath <=", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathLike(String value) {
            addCriterion("facepath like", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathNotLike(String value) {
            addCriterion("facepath not like", value, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathIn(List<String> values) {
            addCriterion("facepath in", values, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathNotIn(List<String> values) {
            addCriterion("facepath not in", values, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathBetween(String value1, String value2) {
            addCriterion("facepath between", value1, value2, "facepath");
            return (Criteria) this;
        }

        public Criteria andFacepathNotBetween(String value1, String value2) {
            addCriterion("facepath not between", value1, value2, "facepath");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}