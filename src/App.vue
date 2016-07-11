<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="">
      <div class=" col-sm-6">
        <div class="row">
        <notes-list></notes-list>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="row">
        <editor></editor>
          
        </div>
      </div>
    </div>
</div>

    
  </div>
</template>
<style>
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,300);
  html,
  #app {
    height: 100%;
  }

  
  .starred {
    color: #F7AE4F;
  }
</style>
<script>
  import Toolbar from './components/Toolbar.vue'
  import NotesList from './components/NotesList.vue'
  import Editor from './components/editor/Editor.vue'

  export default {
    components: {
      Toolbar,
      NotesList,
      Editor
    }
  }
</script>