<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="https://github.com/yuluhuang/my-project-vue"><svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="#"><i @click="addNote" class="glyphicon glyphicon-plus"></i></a></li>
                <li><a href="#"><i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i></a></li>
                <li><a href="#"> <i @click="deleteNote" class="glyphicon glyphicon-remove"></i></a></li>
                <!--<li class=""> <i class="" style="font-size:12px"><a href="https://github.com/yuluhuang/my-project-vue">github</a></i></li>-->
            </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>
<style>
    nav li {
        font-size: 20px;
    }
    
    .navbar {
        margin-bottom: 0px;
    }
</style>
<script>
    import {
        addNote,
        deleteNote,
        toggleFavorite
    } from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>