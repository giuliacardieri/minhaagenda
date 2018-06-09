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
        //userPreferencesDesign();
      },
      setNewItem: function (id, value) {
        var user;
        user = this.getUser();
        user[id].value = value;
        this.setUser(JSON.stringify(user));
      }
    }
  } 