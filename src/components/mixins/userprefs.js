  export const userprefs = {  
    methods: {
      getUser: function () {
        if (localStorage.getItem('user'))
          return JSON.parse(localStorage.getItem('user'));
        return this.setUser();
      },
      setUser: function (user_new) {
        if (user_new)
          localStorage.setItem('user', user_new);
        else {
          localStorage.setItem('user', JSON.stringify([
            { 'id': 0, 'type': 0,'name': 'checkbox', 'value': 1 },
            { 'id': 1, 'type': 0, 'name': 'datepicker', 'value': 1 },
            { 'id': 2, 'type': 0, 'name': 'input', 'value': 1 },
            { 'id': 3, 'type': 0, 'name': 'select', 'value': 1 },
            { 'id': 4, 'type': 0, 'name': 'timepicker', 'value': 1 },
            { 'id': 5, 'type': 1, 'name': 'speech', 'value': 1 },
            { 'id': 6, 'type': 2, 'name': 'events', 'value': 1 },
            { 'id': 7, 'type': 2, 'name': 'images', 'value': 1 },
            { 'id': 8, 'type': 1, 'name': 'voice', 'value': 1 },
            { 'id': 9, 'type': 1, 'name': 'swipe', 'value': 1 },
          ]));
        }
        //this.userPreferencesDesign();
      },
      setNewItem: function (id, value) {
        var user;
        user = this.getUser();
        user[id].value = value;
        this.setUser(JSON.stringify(user));
      },
      userPreferencesDesign: function() {
        var user = this.getUser();

        if (user[0].value == 2) {
          document.getElementsByClassName('.checkbox-elem--type-material').classList.add('hidden');
          document.getElementsByClassName('.checkbox-elem--type-browser-default').classList.remove('hidden');
        } else if (user[0].value == 1){
          document.getElementsByClassName('.checkbox-elem--type-material').classList.remove('hidden');
          document.getElementsByClassName('.checkbox-elem--type-browser-default').classList.add('hidden');
        }

        if (user[1].value == 2) {
          document.getElementsByClassName('.datepicker-elem-group--type-browser-default').classList.remove('hidden');
          document.getElementsByClassName('.datepicker-elem-group--type-material').classList.add('hidden');
        } else if (user[1].value == 1) {
          document.getElementsByClassName('.datepicker-elem-group--type-browser-default').classList.add('hidden');
          document.getElementsByClassName('.datepicker-elem-group--type-material').classList.remove('hidden');
        }

        if (user[2].value == 2) {
          document.getElementsByClassName('.input-elem-group__input').classList.add('browser-default');
          document.getElementsByClassName('.input-elem-group__label').classList.add('browser-default');
        } else if (user[2].value == 1) {
          document.getElementsByClassName('.input-elem-group__input:not(.input-test)').classList.remove('browser-default');
          document.getElementsByClassName('.input-elem-group__label:not(.input-test)').classList.remove('browser-default');
        }

        if (user[3].value == 2) {
          document.getElementsByClassName('.select-elem').classList.add('browser-default');
          document.getElementsByClassName('.select-elem__label').classList.add('browser-default');
        } else if (user[3].value == 1) {
          document.getElementsByClassName('.select-elem').classList.remove('browser-default');
          document.getElementsByClassName('.select-elem__label').classList.remove('browser-default');
        }

        if (user[4].value == 2) {
          document.getElementsByClassName('.timepicker-elem-group--type-browser-default').classList.remove('hidden');
          document.getElementsByClassName('.timepicker-elem-group--type-material').classList.add('hidden');
        } else if (user[4].value == 1) {
          document.getElementsByClassName('.timepicker-elem-group--type-browser-default').classList.add('hidden');
          document.getElementsByClassName('.timepicker-elem-group--type-material').classList.remove('hidden');
        }

        if (user[5].value == 2) {
          document.getElementsByClassName('.speech-elem:not(.speech-test)').classList.remove('hidden');
        } else if (user[5].value == 1) {
          document.getElementsByClassName('.speech-elem:not(.speech-test)').classList.add('hidden');
        }

        if (user[7].value == 2) {
          document.getElementsByClassName('.card__card-image:not(.card__card-image--test)').classList.add('card__card-image--hidden');
        } else if (user[7].value == 1) {
          document.getElementsByClassName('.card__card-image').classList.remove('card__card-image--hidden');
        }

        if (user[9].value == 2) {
          document.getElementsByClassName('.card').classList.add('swipe-elem');
        } else if (user[9].value == 1) {
          document.getElementsByClassName('.card').classList.remove('swipe-elem');
        }
      }
    }
  } 