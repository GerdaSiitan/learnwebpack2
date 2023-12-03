<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id">
            <div class="form-check form-switch">
                <label>
                    {{ item.name }}
                    <input type="checkbox" class="form-check-input" v-model="item.isDone">
                </label>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['items', 'title']
}
</script>