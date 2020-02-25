const Validator = require("validator");
const validText = require("./valid-text");
const validNumber = require("./valid-number");

module.exports = function validateMinionInput(data) {
    let errors = {};

    data.url = validText(data.url) ? data.url: "";
    data.attack = validNumber(data.attack) ? data.attack : "";
    data.defense = validNumber(data.defense) ? data.defense : "";
    data.hp = validNumber(data.hp) ? data.hp : "";
    data.rarity = validText(data.rarity) ? data.rarity : "";
    data.ability = validText(data.ability) ? data.ability : null;
    data.userId = validNumber(data.userId) ? data.userId : null;

    if (Validator.isEmpty(data.url)) {
        errors.url = "URL field is required";
    }

    if (Validator.isEmpty(data.attack)) {
        errors.attack = "Attack field is required";
    }

    if (Validator.isEmpty(data.defense)) {
        errors.defense = "Defense field is required";
    }

    if (Validator.isEmpty(data.hp)) {
        errors.hp = "HP field is required";
    }

    if (Validator.isEmpty(data.rarity)) {
        errors.rarity = "Rarity field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}