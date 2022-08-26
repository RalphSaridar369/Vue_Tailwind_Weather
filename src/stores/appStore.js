import { defineStore, acceptHMRUpdate } from 'pinia'


export const useAppStore = defineStore({
    id: 'appstore',
    state: () => ({
        search: '',
        locations: [],
        currentLocation: {}
    }),

    actions: {

        changeValues(type, value) {
            this.$patch({
                [type]: value,
                ...this.state
            })

        },

        changeCurrentLocation(data) {
            this.$patch({
                currentLocation: data,
                ...this.state
            })
        },



        // clearCurrentLocation(){
        //     this.$reset({currentLocation:{},...this.state})
        // },


        getSearch() {
            // console.log(this.$state)
            return this.$state;
        },

        addLocation(data) {
            let added = [...this.$state.locations, data];
            this.$patch({
                locations: added,
                ...this.state
            })
        }

        /**
         * Attempt to login a user
         * @param {string} user
         * @param {string} password
         */
    },
})



if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
