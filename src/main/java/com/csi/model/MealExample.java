package com.csi.model;

import java.util.ArrayList;
import java.util.List;

public class MealExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public MealExample() {
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

        public Criteria andMeaidIsNull() {
            addCriterion("meaId is null");
            return (Criteria) this;
        }

        public Criteria andMeaidIsNotNull() {
            addCriterion("meaId is not null");
            return (Criteria) this;
        }

        public Criteria andMeaidEqualTo(Integer value) {
            addCriterion("meaId =", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidNotEqualTo(Integer value) {
            addCriterion("meaId <>", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidGreaterThan(Integer value) {
            addCriterion("meaId >", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidGreaterThanOrEqualTo(Integer value) {
            addCriterion("meaId >=", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidLessThan(Integer value) {
            addCriterion("meaId <", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidLessThanOrEqualTo(Integer value) {
            addCriterion("meaId <=", value, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidIn(List<Integer> values) {
            addCriterion("meaId in", values, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidNotIn(List<Integer> values) {
            addCriterion("meaId not in", values, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidBetween(Integer value1, Integer value2) {
            addCriterion("meaId between", value1, value2, "meaid");
            return (Criteria) this;
        }

        public Criteria andMeaidNotBetween(Integer value1, Integer value2) {
            addCriterion("meaId not between", value1, value2, "meaid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidIsNull() {
            addCriterion("mealSeriesId is null");
            return (Criteria) this;
        }

        public Criteria andMealseriesidIsNotNull() {
            addCriterion("mealSeriesId is not null");
            return (Criteria) this;
        }

        public Criteria andMealseriesidEqualTo(Integer value) {
            addCriterion("mealSeriesId =", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidNotEqualTo(Integer value) {
            addCriterion("mealSeriesId <>", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidGreaterThan(Integer value) {
            addCriterion("mealSeriesId >", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidGreaterThanOrEqualTo(Integer value) {
            addCriterion("mealSeriesId >=", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidLessThan(Integer value) {
            addCriterion("mealSeriesId <", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidLessThanOrEqualTo(Integer value) {
            addCriterion("mealSeriesId <=", value, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidIn(List<Integer> values) {
            addCriterion("mealSeriesId in", values, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidNotIn(List<Integer> values) {
            addCriterion("mealSeriesId not in", values, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidBetween(Integer value1, Integer value2) {
            addCriterion("mealSeriesId between", value1, value2, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealseriesidNotBetween(Integer value1, Integer value2) {
            addCriterion("mealSeriesId not between", value1, value2, "mealseriesid");
            return (Criteria) this;
        }

        public Criteria andMealnameIsNull() {
            addCriterion("mealName is null");
            return (Criteria) this;
        }

        public Criteria andMealnameIsNotNull() {
            addCriterion("mealName is not null");
            return (Criteria) this;
        }

        public Criteria andMealnameEqualTo(String value) {
            addCriterion("mealName =", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameNotEqualTo(String value) {
            addCriterion("mealName <>", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameGreaterThan(String value) {
            addCriterion("mealName >", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameGreaterThanOrEqualTo(String value) {
            addCriterion("mealName >=", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameLessThan(String value) {
            addCriterion("mealName <", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameLessThanOrEqualTo(String value) {
            addCriterion("mealName <=", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameLike(String value) {
            addCriterion("mealName like", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameNotLike(String value) {
            addCriterion("mealName not like", value, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameIn(List<String> values) {
            addCriterion("mealName in", values, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameNotIn(List<String> values) {
            addCriterion("mealName not in", values, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameBetween(String value1, String value2) {
            addCriterion("mealName between", value1, value2, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealnameNotBetween(String value1, String value2) {
            addCriterion("mealName not between", value1, value2, "mealname");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeIsNull() {
            addCriterion("mealSummarize is null");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeIsNotNull() {
            addCriterion("mealSummarize is not null");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeEqualTo(String value) {
            addCriterion("mealSummarize =", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeNotEqualTo(String value) {
            addCriterion("mealSummarize <>", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeGreaterThan(String value) {
            addCriterion("mealSummarize >", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeGreaterThanOrEqualTo(String value) {
            addCriterion("mealSummarize >=", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeLessThan(String value) {
            addCriterion("mealSummarize <", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeLessThanOrEqualTo(String value) {
            addCriterion("mealSummarize <=", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeLike(String value) {
            addCriterion("mealSummarize like", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeNotLike(String value) {
            addCriterion("mealSummarize not like", value, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeIn(List<String> values) {
            addCriterion("mealSummarize in", values, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeNotIn(List<String> values) {
            addCriterion("mealSummarize not in", values, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeBetween(String value1, String value2) {
            addCriterion("mealSummarize between", value1, value2, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealsummarizeNotBetween(String value1, String value2) {
            addCriterion("mealSummarize not between", value1, value2, "mealsummarize");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionIsNull() {
            addCriterion("mealDescription is null");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionIsNotNull() {
            addCriterion("mealDescription is not null");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionEqualTo(String value) {
            addCriterion("mealDescription =", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionNotEqualTo(String value) {
            addCriterion("mealDescription <>", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionGreaterThan(String value) {
            addCriterion("mealDescription >", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionGreaterThanOrEqualTo(String value) {
            addCriterion("mealDescription >=", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionLessThan(String value) {
            addCriterion("mealDescription <", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionLessThanOrEqualTo(String value) {
            addCriterion("mealDescription <=", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionLike(String value) {
            addCriterion("mealDescription like", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionNotLike(String value) {
            addCriterion("mealDescription not like", value, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionIn(List<String> values) {
            addCriterion("mealDescription in", values, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionNotIn(List<String> values) {
            addCriterion("mealDescription not in", values, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionBetween(String value1, String value2) {
            addCriterion("mealDescription between", value1, value2, "mealdescription");
            return (Criteria) this;
        }

        public Criteria andMealdescriptionNotBetween(String value1, String value2) {
            addCriterion("mealDescription not between", value1, value2, "mealdescription");
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

        public Criteria andMealimageIsNull() {
            addCriterion("mealImage is null");
            return (Criteria) this;
        }

        public Criteria andMealimageIsNotNull() {
            addCriterion("mealImage is not null");
            return (Criteria) this;
        }

        public Criteria andMealimageEqualTo(String value) {
            addCriterion("mealImage =", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageNotEqualTo(String value) {
            addCriterion("mealImage <>", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageGreaterThan(String value) {
            addCriterion("mealImage >", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageGreaterThanOrEqualTo(String value) {
            addCriterion("mealImage >=", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageLessThan(String value) {
            addCriterion("mealImage <", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageLessThanOrEqualTo(String value) {
            addCriterion("mealImage <=", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageLike(String value) {
            addCriterion("mealImage like", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageNotLike(String value) {
            addCriterion("mealImage not like", value, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageIn(List<String> values) {
            addCriterion("mealImage in", values, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageNotIn(List<String> values) {
            addCriterion("mealImage not in", values, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageBetween(String value1, String value2) {
            addCriterion("mealImage between", value1, value2, "mealimage");
            return (Criteria) this;
        }

        public Criteria andMealimageNotBetween(String value1, String value2) {
            addCriterion("mealImage not between", value1, value2, "mealimage");
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