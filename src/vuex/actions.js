export const getNotes = ({
    dispatch
}) => {
    dispatch('GET_NOTES')
}
export const addNote = ({
    dispatch
}) => {
    dispatch('ADD_NOTE')
}
export const editNote = ({
    dispatch
}, e) => {
    dispatch('EDIT_NOTE', e.target.value)
}
export const editNoteTitle = ({
    dispatch
}, e) => {
    console.log(e.target)
    dispatch('EDIT_NOTE_TITLE', e.target.value)
}
export const deleteNote = ({
    dispatch
}) => {
    dispatch('DELETE_NOTE')
}
export const updateActiveNote = ({
    dispatch
}, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}
export const toggleFavorite = ({
    dispatch
}) => {
    dispatch('TOGGLE_FAVORITE')
}
