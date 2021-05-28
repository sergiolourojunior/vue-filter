let app = new Vue({
    el: '#app',
    data: {
        persons: [],
        load_persons: true,
        filters: {
            gender: [],
            city: [],
            state: [],
        },
        filter_search: {
            gender: [],
            city: [],
            state: []
        },
        filter_count: {
            gender: [],
            city: [],
            state: []
        },
        gender: []
    },
    methods: {
        get: function () {
            axios
                .get('./controllers/get-persons.php')
                .then(response => {
                    app.persons = response.data

                    this.load_persons = false;

                    app.createFilter()
                })
        },
        createFilter: function () {
            for(person of this.persons) {
                if(this.filters.gender.indexOf(person.gender) < 0) this.filters.gender.push(person.gender)
                if(this.filters.city.indexOf(person.city) < 0) this.filters.city.push(person.city)
                if(this.filters.state.indexOf(person.state) < 0) this.filters.state.push(person.state)

                if(isNaN(this.filter_count.gender[person.gender])) {
                    this.filter_count.gender[person.gender] = 1;
                } else {
                    this.filter_count.gender[person.gender] += 1;
                }

                if(isNaN(this.filter_count.city[person.city])) {
                    this.filter_count.city[person.city] = 1;
                } else {
                    this.filter_count.city[person.city] += 1;
                }

                if(isNaN(this.filter_count.state[person.state])) {
                    this.filter_count.state[person.state] = 1;
                } else {
                    this.filter_count.state[person.state] += 1;
                }
            }
        },
        filtering: function () {

            this.filter_count = {
                gender: [],
                city: [],
                state: []
            }

            for(person_key in this.persons) {

                if(isNaN(this.filter_count.gender[this.persons[person_key].gender])) {
                    this.filter_count.gender[this.persons[person_key].gender] = 1;
                } else {
                    this.filter_count.gender[this.persons[person_key].gender] += 1;
                }

                if(isNaN(this.filter_count.city[this.persons[person_key].city])) {
                    this.filter_count.city[this.persons[person_key].city] = 1;
                } else {
                    this.filter_count.city[this.persons[person_key].city] += 1;
                }

                if(isNaN(this.filter_count.state[this.persons[person_key].state])) {
                    this.filter_count.state[this.persons[person_key].state] = 1;
                } else {
                    this.filter_count.state[this.persons[person_key].state] += 1;
                }

                if(this.filter_search['gender'].indexOf(this.persons[person_key].gender) === -1 && this.filter_search['gender'].length > 0) {
                    this.persons[person_key].visible = 0

                    this.filter_count.gender[this.persons[person_key].gender] -= 1
                    this.filter_count.city[this.persons[person_key].city] -= 1
                    this.filter_count.state[this.persons[person_key].state] -= 1
                } else {
                    if(this.filter_search['city'].indexOf(this.persons[person_key].city) === -1 && this.filter_search['city'].length > 0) {
                        this.persons[person_key].visible = 0

                        this.filter_count.gender[this.persons[person_key].gender] -= 1
                        this.filter_count.city[this.persons[person_key].city] -= 1
                        this.filter_count.state[this.persons[person_key].state] -= 1
                    } else {
                        if(this.filter_search['state'].indexOf(this.persons[person_key].state) === -1 && this.filter_search['state'].length > 0) {
                            this.persons[person_key].visible = 0

                            this.filter_count.gender[this.persons[person_key].gender] -= 1
                            this.filter_count.city[this.persons[person_key].city] -= 1
                            this.filter_count.state[this.persons[person_key].state] -= 1
                        } else {
                            this.persons[person_key].visible = 1
                        }
                    }
                }
            }
        }
    },
    created: function () {
        this.get()
    },
    mounted: function () {
        document.getElementById('loader').style.display = 'none';
    }
})