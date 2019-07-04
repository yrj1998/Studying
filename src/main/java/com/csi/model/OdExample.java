package com.csi.model;

import java.util.ArrayList;
import java.util.List;

public class OdExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OdExample() {
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

        public Criteria andOdidIsNull() {
            addCriterion("odId is null");
            return (Criteria) this;
        }

        public Criteria andOdidIsNotNull() {
            addCriterion("odId is not null");
            return (Criteria) this;
        }

        public Criteria andOdidEqualTo(Integer value) {
            addCriterion("odId =", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidNotEqualTo(Integer value) {
            addCriterion("odId <>", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidGreaterThan(Integer value) {
            addCriterion("odId >", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidGreaterThanOrEqualTo(Integer value) {
            addCriterion("odId >=", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidLessThan(Integer value) {
            addCriterion("odId <", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidLessThanOrEqualTo(Integer value) {
            addCriterion("odId <=", value, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidIn(List<Integer> values) {
            addCriterion("odId in", values, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidNotIn(List<Integer> values) {
            addCriterion("odId not in", values, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidBetween(Integer value1, Integer value2) {
            addCriterion("odId between", value1, value2, "odid");
            return (Criteria) this;
        }

        public Criteria andOdidNotBetween(Integer value1, Integer value2) {
            addCriterion("odId not between", value1, value2, "odid");
            return (Criteria) this;
        }

        public Criteria andOidIsNull() {
            addCriterion("oId is null");
            return (Criteria) this;
        }

        public Criteria andOidIsNotNull() {
            addCriterion("oId is not null");
            return (Criteria) this;
        }

        public Criteria andOidEqualTo(Integer value) {
            addCriterion("oId =", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidNotEqualTo(Integer value) {
            addCriterion("oId <>", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidGreaterThan(Integer value) {
            addCriterion("oId >", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidGreaterThanOrEqualTo(Integer value) {
            addCriterion("oId >=", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidLessThan(Integer value) {
            addCriterion("oId <", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidLessThanOrEqualTo(Integer value) {
            addCriterion("oId <=", value, "oid");
            return (Criteria) this;
        }

        public Criteria andOidIn(List<Integer> values) {
            addCriterion("oId in", values, "oid");
            return (Criteria) this;
        }

        public Criteria andOidNotIn(List<Integer> values) {
            addCriterion("oId not in", values, "oid");
            return (Criteria) this;
        }

        public Criteria andOidBetween(Integer value1, Integer value2) {
            addCriterion("oId between", value1, value2, "oid");
            return (Criteria) this;
        }

        public Criteria andOidNotBetween(Integer value1, Integer value2) {
            addCriterion("oId not between", value1, value2, "oid");
            return (Criteria) this;
        }

        public Criteria andMealidIsNull() {
            addCriterion("mealId is null");
            return (Criteria) this;
        }

        public Criteria andMealidIsNotNull() {
            addCriterion("mealId is not null");
            return (Criteria) this;
        }

        public Criteria andMealidEqualTo(Integer value) {
            addCriterion("mealId =", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidNotEqualTo(Integer value) {
            addCriterion("mealId <>", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidGreaterThan(Integer value) {
            addCriterion("mealId >", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidGreaterThanOrEqualTo(Integer value) {
            addCriterion("mealId >=", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidLessThan(Integer value) {
            addCriterion("mealId <", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidLessThanOrEqualTo(Integer value) {
            addCriterion("mealId <=", value, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidIn(List<Integer> values) {
            addCriterion("mealId in", values, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidNotIn(List<Integer> values) {
            addCriterion("mealId not in", values, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidBetween(Integer value1, Integer value2) {
            addCriterion("mealId between", value1, value2, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealidNotBetween(Integer value1, Integer value2) {
            addCriterion("mealId not between", value1, value2, "mealid");
            return (Criteria) this;
        }

        public Criteria andMealpriceIsNull() {
            addCriterion("mealPrice is null");
            return (Criteria) this;
        }

        public Criteria andMealpriceIsNotNull() {
            addCriterion("mealPrice is not null");
            return (Criteria) this;
        }

        public Criteria andMealpriceEqualTo(Double value) {
            addCriterion("mealPrice =", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceNotEqualTo(Double value) {
            addCriterion("mealPrice <>", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceGreaterThan(Double value) {
            addCriterion("mealPrice >", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceGreaterThanOrEqualTo(Double value) {
            addCriterion("mealPrice >=", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceLessThan(Double value) {
            addCriterion("mealPrice <", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceLessThanOrEqualTo(Double value) {
            addCriterion("mealPrice <=", value, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceIn(List<Double> values) {
            addCriterion("mealPrice in", values, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceNotIn(List<Double> values) {
            addCriterion("mealPrice not in", values, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceBetween(Double value1, Double value2) {
            addCriterion("mealPrice between", value1, value2, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealpriceNotBetween(Double value1, Double value2) {
            addCriterion("mealPrice not between", value1, value2, "mealprice");
            return (Criteria) this;
        }

        public Criteria andMealcountIsNull() {
            addCriterion("mealCount is null");
            return (Criteria) this;
        }

        public Criteria andMealcountIsNotNull() {
            addCriterion("mealCount is not null");
            return (Criteria) this;
        }

        public Criteria andMealcountEqualTo(Integer value) {
            addCriterion("mealCount =", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountNotEqualTo(Integer value) {
            addCriterion("mealCount <>", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountGreaterThan(Integer value) {
            addCriterion("mealCount >", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountGreaterThanOrEqualTo(Integer value) {
            addCriterion("mealCount >=", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountLessThan(Integer value) {
            addCriterion("mealCount <", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountLessThanOrEqualTo(Integer value) {
            addCriterion("mealCount <=", value, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountIn(List<Integer> values) {
            addCriterion("mealCount in", values, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountNotIn(List<Integer> values) {
            addCriterion("mealCount not in", values, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountBetween(Integer value1, Integer value2) {
            addCriterion("mealCount between", value1, value2, "mealcount");
            return (Criteria) this;
        }

        public Criteria andMealcountNotBetween(Integer value1, Integer value2) {
            addCriterion("mealCount not between", value1, value2, "mealcount");
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