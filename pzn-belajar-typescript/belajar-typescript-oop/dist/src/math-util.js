export var MathUtil;
(function (MathUtil) {
    MathUtil.PI = 3.14;
    function sum(...values) {
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;
    }
    MathUtil.sum = sum;
})(MathUtil || (MathUtil = {}));
