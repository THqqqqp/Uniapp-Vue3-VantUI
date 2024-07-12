import {createMemoryHistory, createRouter} from 'vue-router'
import componentOne from "@components/componentOne.vue";

const routes = [
    { path:'/',component:componentOne}
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
