<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'favorites'" :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active: activeNote === note}" @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.title.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>
<style>
#notes-list {
    float: left;
    /*width: 300px;
    height: 100%;*/
    background-color: #F5F5F5;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
  }
  
  #list-header {
    padding: 5px 25px 25px 25px;
  }
  
  #list-header h2 {
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    font-size: 22px;
    padding-bottom: 8px;
  }
  
  #notes-list .container {
    height: calc(100% - 137px);
    max-height: calc(100% - 137px);
    overflow: auto;
    width: 100%;
    padding: 0;
  }
  
  #notes-list .container .list-group-item {
    border: 0;
    border-radius: 0;
  }
  
  .list-group-item-heading {
    font-weight: 300;
    font-size: 15px;
  }
</style>
<script>
  import {
    updateActiveNote,
    getNotes
  } from '../vuex/actions'

  export default {
    data() {
        return {
          show: 'all'
        }
      },
      ready: function() {
        this.getNotes()
      },
      vuex: {
        getters: {
          notes: state => state.notes,
          activeNote: state => state.activeNote
        },
        actions: {
          updateActiveNote,
          getNotes
        }
      },
      methods: {
      },
      computed: {
        filteredNotes() {
          if (this.show === 'all') {
            return this.notes
          } else if (this.show === 'favorites') {
            return this.notes.filter(note => note.favorite)
          }
        }
      }
  }
</script>