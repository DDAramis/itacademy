"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeTareas = void 0;
class ListaDeTareas {
    constructor() {
        this.tareas = [];
    }
    agregarTarea(descripcion) {
        this.tareas.push({ descripcion, completada: false });
    }
    marcarTareaComoCompletada(descripcion) {
        const tarea = this.tareas.find(t => t.descripcion === descripcion);
        if (tarea) {
            tarea.completada = true;
        }
    }
    quitarTarea(descripcion) {
        this.tareas = this.tareas.filter(t => t.descripcion !== descripcion);
    }
    obtenerTareas() {
        return this.tareas;
    }
}
exports.ListaDeTareas = ListaDeTareas;
