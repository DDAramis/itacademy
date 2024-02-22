import { ListaDeTareas } from '../public/index';

describe('ListaDeTareas', () => {
  let listaDeTareas: ListaDeTareas;

  beforeEach(() => {
    listaDeTareas = new ListaDeTareas();
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
