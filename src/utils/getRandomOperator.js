import { getRandomNumber } from "./getRandomNumber.js";

const OPERATORS = ["+", "-", "*"];

export const getRandomOperator = () => {
    const index = getRandomNumber(0, OPERATORS.length - 1);
    return OPERATORS[index];
};