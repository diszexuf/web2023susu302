const assert = require('assert');
const core = require('./oop');
const {Point3D} = require("./oop");

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
            assert.strictEqual(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2.5);
            assert.strictEqual(point.z, -3);
        });

        it('Point3D имеет статический метод vectorLength', () => {
            const pointA = new core.Point3D(1, 2, -3);
            const pointB = new core.Point3D(1, -1, 1);

            assert.strictEqual(typeof Point3D.vectorLength, 'function');

            const length = Point3D.vectorLength(pointA, pointB);

            assert.strictEqual(length, 5);
        });
    });

    describe('#Queue', () => {
        it('проверка массивом', () => {
            const queue = new core.Queue();
            assert.deepEqual(queue.elems.slice(), []);
        });

        it('проверка на пограничные случаи', () => {
            const queue = new core.Queue();
            // TODO:
            assert.strictEqual(true, true);
        });

        it('может создаться из массива', () => {
            const queue = new core.Queue([1, 2, 3, 5]);
            assert.deepEqual(queue.elems.slice(), [1, 2, 3, 5]);
        });

        it('может создаться без параметров', () => {
            const queue = new core.Queue();
            assert.deepEqual(queue.elems.slice(), []);
        });

        it('добавляет элемент в конец очереди', () => {
            const queue = new core.Queue();
            queue.enqueue(1);
            queue.enqueue(2);
            assert.deepEqual(queue.elems.slice(), [1, 2]);
        });

        it('извлекает элемент из начала очереди', () => {
            const queue = new core.Queue([1, 2, 3]);
            assert.equal(queue.dequeue(), 1);
            assert.deepEqual(queue.elems.slice(), [2, 3]);
        });

        it('возвращает undefined при извлечении из пустой очереди', () => {
            const queue = new core.Queue();
            assert.strictEqual(queue.dequeue(), undefined);
        });
    });
});
