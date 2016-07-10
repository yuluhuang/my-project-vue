<template>
  <div id="note-editor">
      <input type="text"  class="form-control" name="title" :value="activeNoteTitle" @input="editNoteTitle" placeholder="New note"/>
        <textarea
        placeholder="something"
        :value="activeNoteText"
        @input="editNote"
        class="form-control">
        </textarea>
  </div>
</template>
<style>
    #note-editor {
        height: 100%;
        margin-left: 380px;
    }
    
    #note-editor input {
        height: 38px;
        width: 100%;
        border-radius: 0;
        border: none;
    }
    
    #note-editor textarea {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
</style>
<script>
    import {
        editNote,
        editNoteTitle
    } from '../vuex/actions'

    export default {
        data() {
                return {
                    show: 'all'
                }
            },
            ready: function() {},
            vuex: {
                getters: {
                    activeNoteText: (state) => state.activeNote.text,
                    activeNoteTitle: (state) => state.activeNote.title
                },
                actions: {
                    editNote,
                    editNoteTitle
                }
            }
    }
</script>