import moment from 'moment'
export const db = {  
  methods: {
    filterJSONByDate: function(array) {
      var today = moment().format('YYYY-MM-DD');
      var new_db = [];

      for (var i = 0; i < Object.keys(array).length; i++) {
        if (array[i].date === today)
          new_db.push(array[i])
      }

      return new_db;
    },
    sortDB: function(array, key) {
      return array.sort(function(a, b) {
        var x = a[key]; 
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
    },
    areAllDone: function() {
      let db = this.getDB();

      for (var i = 0; i < Object.keys(db).length; i++) {
        if (db[i].completed === 0 && db[i].canceled === 0)
          return false;
      }
      return true;
    },
    getCategories: function() {
      let categories = [
        { id: 0, name: 'Exercise' },
        { id: 1, name: 'Family' },
        { id: 2, name: 'Home' },
        { id: 3, name: 'Food' },
        { id: 4, name: 'Shopping' },
        { id: 5, name: 'Study' },
        { id: 6, name: 'Other' },
        { id: 7, name: 'Personal' },
        { id: 8, name: 'Pets' },
        { id: 9, name: 'Health' },
        { id: 10, name: 'Social' },
        { id: 11, name: 'Work' },
        { id: 12, name: 'Travel' }
      ];

      return categories;
    },
    getCategoryName: function(id) {
      let categories = this.getCategories();
      console.log(JSON.stringify(categories[id]));
      return categories[id].name;
    }, 
    setDB: function(new_db) {
      if (new_db)
       localStorage.setItem('agenda_db', JSON.stringify(new_db));
      else {
        let today = moment().format('YYYY-MM-DD');
        let db = [
          {
            'id': 0,
            'title': 'Go to the supermarket',
            'date': today,
            'time_start': '5:00',
            'time_end': '7:00',
            'location': 'Market',
            'icon': 'local_mall',
            'category': 'Shopping',
            'completed': 0,
            'canceled': 0,
            'allday': false
          },
        ];
        localStorage.setItem('agenda_db', JSON.stringify(db));
      }
    },
    getDB: function() {
      if (!localStorage.getItem('agenda_db'))
        this.setDB();
      return this.filterJSONByDate(this.sortDB(JSON.parse(localStorage.getItem('agenda_db')),'time_start'));
    },
    addData: function(user, data) {
        var db = this.getDB();
        var final_data = {};

        final_data.id = Object.keys(db).length;
        final_data.title = data.title;
        final_data.location = data.location;
        final_data.completed = 0;
        final_data.canceled =  0;
        final_data.time_start = '';
        final_data.time_end = '';
        final_data.allday = data.allday;
        final_data.date = data.date;
        final_data.category = this.getCategoryName(data.category);

        if (!final_data.allday) {
          final_data.time_start = data.time_start;
          final_data.time_end = data.time_end;
        }

        switch(final_data.category) {
          case 'Exercise': final_data.icon = 'fitness_center'; break;
          case 'Family': final_data.icon = 'child_care'; break;
          case 'Food': final_data.icon = 'restaurant'; break;
          case 'Health': final_data.icon = 'local_hospital'; break;
          case 'Home': final_data.icon = 'home'; break;
          case 'Personal': final_data.icon = 'face'; break;
          case 'Pets': final_data.icon = 'pets'; break;
          case 'Study': final_data.icon = 'school'; break;
          case 'Shopping': final_data.icon = 'local_mall'; break;
          case 'Social': final_data.icon = 'people'; break;
          case 'Other': final_data.icon = 'info'; break;
          case 'Travel': final_data.icon = 'flight_land'; break;
          case 'Work': final_data.icon = 'work'; break;
        }

        db.push(final_data);
        this.setDB(db);
    }
  }
}