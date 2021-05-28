let app = new Vue({
    el: '#app',
    data: {
        full_name: null,
        gender: null,
        city: null,
        state: null,
        picture: null,

        congrats: false,
    },
    methods: {
        resetUI: function () {
            this.full_name = null;
            this.gender = null;
            this.city = null;
            this.state = null;
            this.picture = null;
        },
        generate: function () {
            axios
                .get('https://randomuser.me/api/')
                .then(function(response) {
                    app.congrats = false;

                    data = response.data.results[0]

                    app.full_name = data.name.first + ' ' + data.name.last
                    app.gender = data.gender
                    app.city = data.location.city
                    app.state = data.location.state
                    app.picture = data.picture.large
                })
        },
        save: function () {
            axios
                .post('./controllers/ajaxRequest.php', {
                    name: this.full_name,
                    gender: this.gender,
                    city: this.city,
                    state: this.state,
                    picture: this.picture
                })
                .then(function (response) {
                    if(response.data.success) {
                        app.congrats = true;
                        app.resetUI();
                    }
                })
        }
    }
})