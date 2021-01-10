const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: "INICIO",
            lessons: [
                { id: 1, title: " Iniciando - 1"},
                { id: 2, title: " Segundo - 2"}
            ]
        },
        {
            id: 2,
            title: "FIM",
            lessons: [
                { id: 3, title: " Novo modulo - 3"},
                { id: 4, title: " Finalizado - 4"}
            ] 
        }
    ]
}

//func que retorna estado inicial
export default function courseReducer(state = INITIAL_STATE, actions) {
    if (actions.type === 'TOGGLE_LESSON'){
        return { ...state, 
            activeLesson: actions.lesson, 
            activeModule: actions.module}
    }
    return state
}