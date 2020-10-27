//定义state
export const state = () => ({
    counter: 0
})

//mutation
export const mutations = {
    increment(state) {
        state.counter++
    }
}