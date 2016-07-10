import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    notes: [],
    activeNote: {}
}

// Vue.Notes.on('child_added', function (snapshot) {
//     var newNote = snapshot.val() newNote.id = snapshot.key() state.notes.push(newNote)
// })
// Vue.Notes.on('child_removed', function (snapshot) {
//     var id = snapshot.key() state.notes.some(function (note) {
//         if (note.id === id) {
//             state.notes.$remove(note) return true
//         }
//     })
// })
const mutations = {
    GET_NOTES(state) {
        Vue.Notes.orderByKey().on('child_added', function (snapshot) {
            snapshot.forEach(function (data) {
                state.notes = []
                state.notes.push(snapshot.val())
                console.log(JSON.stringify(data.val()), '1', data.key)
            })
        })
        // Vue.Notes.orderByChild('id').on('child_added', function (snapshot) {
        //     snapshot.forEach(function (data) {
        //         state.notes = []
        //         state.notes.push(data.val())
        //         console.log(data, JSON.stringify(data.val()), data.key, data.A, data.W, data.g)
        //     })
        // })
        // Vue.Notes.orderByValue().limitToLast(3).on('value', function (snapshot) {
        //     snapshot.forEach(function (data) {
        //         state.notes = []
        //         state.notes.push(data.val())
        //         // console.log(data, JSON.stringify(data.val()), data.key, data.A, data.W, data.g)
        //     })
        // })
    },
    ADD_NOTE(state) {
        const newNote = {
            title: 'New note',
            text: '',
            favorite: false,
            id: 1
        }
        Vue.Notes.push(newNote).then(function (ref) {
            // console.log(ref, ref.key)
            newNote.id = ref.key
            Vue.Notes.child(ref.key).update(newNote)
            state.notes.push(newNote)
            state.activeNote = newNote
        })
    },
    EDIT_NOTE(state, text) {
        state.activeNote.text = text
        Vue.Notes.child(state.activeNote.id).update(state.activeNote)
    },
    EDIT_NOTE_TITLE(state, title) {
        state.activeNote.title = title
        Vue.Notes.child(state.activeNote.id).update({ title: state.activeNote })
    },
    DELETE_NOTE(state) {
        state.notes.$remove(state.activeNote)
        Vue.Notes.child(state.activeNote.id).remove(function (e) {
            console.log(e)
        })
        state.activeNote = state.notes[0]
    },

    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite
        Vue.Notes.child(state.activeNote.id).update(state.activeNote)
    },
    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note
    }
}

export default new Vuex.Store({
    state,
    mutations
})