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
        { id: 0, name: 'Exercício' },
        { id: 1, name: 'Família' },
        { id: 2, name: 'Casa' },
        { id: 3, name: 'Comida' },
        { id: 4, name: 'Compras' },
        { id: 5, name: 'Estudo' },
        { id: 6, name: 'Outros' },
        { id: 7, name: 'Pessoal' },
        { id: 8, name: 'Pets' },
        { id: 9, name: 'Saúde' },
        { id: 10, name: 'Social' },
        { id: 11, name: 'Trabalho' },
        { id: 12, name: 'Viagem' }
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
            'title': 'Ir ao supermercado',
            'date': today,
            'time_start': '17:00',
            'time_end': '19:00',
            'location': 'Mercado do zé',
            'icon': 'local_mall',
            'category': 'Compras',
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
          case 'Exercício': final_data.icon = 'fitness_center'; break;
          case 'Família': final_data.icon = 'child_care'; break;
          case 'Comida': final_data.icon = 'restaurant'; break;
          case 'Saúde': final_data.icon = 'local_hospital'; break;
          case 'Casa': final_data.icon = 'home'; break;
          case 'Pessoal': final_data.icon = 'face'; break;
          case 'Pets': final_data.icon = 'pets'; break;
          case 'Estudo': final_data.icon = 'school'; break;
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