"use strict"
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const parts = fio.split(' ');
    return `${parts[1]} ${parts[0]}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length !== 0) {
        let min = array.reduce((a, b) => Math.min(a, b));
        let max = array.reduce((a, b) => Math.max(a, b));
        return max / min;
    }
    return false;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dict = new Map();
    }

    count(){
        return this.dict.size;
    }

    isWord(word) {
        return typeof word === 'string' && word.trim() !== '';
    }

    addWord(key, value) {
        if (this.isWord(key) && this.isWord(value)) {
            this.dict.set(key, value);
        } else {
            console.error('TypeError');
        }
    }

    getDefinition(key) {
        if (this.isWord(key) && this.dict.has(key)) {
            return this.dict.get(key);
        } else {
            return undefined;
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};