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
    setDB: function(new_db) {
      if (new_db)
       localStorage.setItem('agenda_db', JSON.stringify(new_db));
      else {
        var db = [
          {
            'id': 0,
            'title': 'Levar mila ao veterinário',
            'date': '2018-06-24',
            'time_start': '17:00',
            'time_end': '19:00',
            'location': 'Veterinário Ishizuka',
            'icon': 'pets',
            'category': 'Pets',
            'completed': 0,
            'canceled': 0,
            'allday': false
          },
          {
            'id': 1,
            'title': 'Limpar apartamento',
            'date': '2018-06-24',
            'time_start': '',
            'time_end': '',
            'location': 'Meu apartamento',
            'icon': 'home',
            'category': 'Casa',
            'completed': 0,
            'canceled': 0,
            'allday': true,
          },
        ];
        localStorage.setItem('agenda_db', JSON.stringify(db));
      }
    },
    getDB: function() {
      if (!localStorage.getItem('agenda_db'))
        this.setDB();
      return this.filterJSONByDate(JSON.parse(localStorage.getItem('agenda_db')));
    },
    addData: function(user, data) {
        var db = this.getDB();
        var final_data = {};

        final_data.id = Object.keys(db).length;
        final_data.title = data.title;
        final_data.location = data.location;
        final_data.completed = 0;
        final_data.canceled =  0;

        if (user[0].value == 1)
          final_data.allday = data.allday1;
        else 
          final_data.allday = data.allday2;

        if (user[1].value == 1)
          final_data.date = data.date1;
        else
          final_data.date = data.date2;
        
        if (user[4].value == 1) {
          final_data.time_start = data.time_start1;
          final_data.time_end = data.time_end1;
        } else {
          final_data.time_start = data.time_start2;
          final_data.time_end = data.time_end2;
        }

        if (user[3].value == 1) {
          final_data.category = data.category1;
        } else {
          final_data.category = data.category2;
        }

        switch(final_data.category) {
          case 'Diabetes': final_data.icon = 'local_pharmacy'; break;
          case 'Exercício': final_data.icon = 'fitness_center'; break;
          case 'Família': final_data.icon = 'child_care'; break;
          case 'Comida': final_data.icon = 'restaurant'; break;
          case 'Saúde': final_data.icon = 'local_hospital'; break;
          case 'Casa': final_data.icon = 'home'; break;
          case 'Pessoal': final_data.icon = 'face'; break;
          case 'Pets': final_data.icon = 'pets'; break;
          case 'Escola': final_data.icon = 'school'; break;
          case 'Compras': final_data.icon = 'local_mall'; break;
          case 'Social': final_data.icon = 'people'; break;
          case 'Outros': final_data.icon = 'info'; break;
          case 'Viagem': final_data.icon = 'flight_land'; break;
          case 'Trabalho': final_data.icon = 'work'; break;
        }

        db.push(final_data);
        this.setDB(db);
    }
  }
}