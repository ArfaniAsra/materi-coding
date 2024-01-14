"use strict";
describe('Getter and Setter', () => {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it('should support in class', () => {
        const category = new Category();
        console.info(category.name);
        category.name = "Food";
        console.info(category.name);
        category.name = "";
        console.info(category.name);
    });
});
