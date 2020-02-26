const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateMinionInput(data) {
    let errors = {};

    data.url = validText(data.url) ? data.url: "";
    data.attack = validText(data.attack) ? data.attack : "";
    data.defense = validText(data.defense) ? data.defense : "";
    data.hp = validText(data.hp) ? data.hp : "";
    data.rarity = validText(data.rarity) ? data.rarity : "";
    data.ability = validText(data.ability) ? data.ability : null;
    data.userId = validText(data.userId) ? data.userId : null;
    data.price = validText(data.price) ? data.price : "";

    if (Validator.isEmpty(data.url)) {
        errors.url = "URL field is required";
    }

    if (Validator.isEmpty(data.attack)) {
        errors.attack = "Attack field is required";
    }

    if (!Number(data.attack)){
        errors.attack = "Attack field must be a number";
    }

    if (Validator.isEmpty(data.defense)) {
        errors.defense = "Defense field is required";
    }

    if (!Number(data.defense)) {
        errors.defense = "Defense field must be a number";
    }

    if (Validator.isEmpty(data.hp)) {
        errors.hp = "HP field is required";
    }

    if (!Number(data.hp)) {
        errors.hp = "Hp field must be a number";
    }

    if (Validator.isEmpty(data.price)) {
       errors.price = "Price field is required";
    }

    if (!Number(data.price)) {
        errors.price = "Price field must be a number";
    }

    if (Validator.isEmpty(data.rarity)) {
        errors.rarity = "Rarity field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}