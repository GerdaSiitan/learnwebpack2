<template>
    <div class="container">
        <div class="input-group my-3">
            <input type="text" class="form-control" v-model="message" @keydown.enter="add()">
            <button class="btn btn-primary" @click="add()">Add</button>
        </div>
        <item-list :items="items" title="All Items"></item-list>
        <ItemList :items="doneItems" title="Done Items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
    </div>
    </template>
    
    <script>
    import ItemList from '../components/ItemList.vue';
    
    let id = 0;
    
    export default {
        data() {
            return {
                message: '',
                items: [
                    { id: id++, name: 'Piim', isDone: false },
                    { id: id++, name: 'Sai', isDone: true },
                    { id: id++, name: 'Viin', isDone: false },
                    { id: id++, name: 'Leib', isDone: true },
                ]
            };
        },
        methods: {
            add() {
                if (this.message.trim() !== '') {
                    this.items.push({ id: id++, name: this.message.trim(), isDone: false });
                }
                this.message = '';
            }
        },
        computed: {
            doneItems() {
                return this.items.filter(item => item.isDone);
            },
            toDoItems() {
                return this.items.filter(item => !item.isDone);
            }
        },
        components: { ItemList }
    }
    </script>
    
    <style>
    
    </style>