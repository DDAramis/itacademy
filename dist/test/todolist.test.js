"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../public/index");
describe('ListaDeTareas', () => {
    let listaDeTareas;
    beforeEach(() => {
        listaDeTareas = new index_1.ListaDeTareas();
    });
    test('agregando tarea todo ok', () => {
        listaDeTareas.agregarTarea('TypeScript');
        expect(listaDeTareas.obtenerTareas()).toEqual([{ descripcion: 'TypeScript', completada: false }]);
    });
    test('marcando tarea como completada', () => {
        listaDeTareas.agregarTarea('TypeScript');
        listaDeTareas.marcarTareaComoCompletada('TypeScript');
        expect(listaDeTareas.obtenerTareas()[0].completada).toBe(true);
    });
    test('quitando tarea todo ok', () => {
        listaDeTareas.agregarTarea('TypeScript');
        listaDeTareas.quitarTarea('TypeScript');
        expect(listaDeTareas.obtenerTareas()).toEqual([]);
    });
});
