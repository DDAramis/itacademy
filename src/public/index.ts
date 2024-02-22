export class ListaDeTareas {
    tareas: { descripcion: string; completada: boolean }[] = [];
  
    agregarTarea(descripcion: string): void {
      this.tareas.push({ descripcion, completada: false });
    }
  
    marcarTareaComoCompletada(descripcion: string): void {
      const tarea = this.tareas.find(t => t.descripcion === descripcion);
      if (tarea) {
        tarea.completada = true;
      }
    }
  
    quitarTarea(descripcion: string): void {
      this.tareas = this.tareas.filter(t => t.descripcion !== descripcion);
    }
  
    obtenerTareas(): { descripcion: string; completada: boolean }[] {
      return this.tareas;
    }
  }
  