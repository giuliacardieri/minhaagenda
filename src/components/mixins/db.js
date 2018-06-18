export const db = {  
  methods: {
    filterJSONByDate: function(array) {
      var today = moment().format('YYYY-MM-DD');
      var new_db = [];

      for (var i = 0; i<Object.keys(array).length; i++) {
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
    setDB: function(new_db) {
      if (new_db)
       localStorage.setItem('agenda_db', JSON.stringify(new_db));
      else {
        var db = [
          {
            'title': 'Levar mila ao veterinário',
            'date': '2018-06-07',
            'time_start': '17:00',
            'time_end': '19:00',
            'image': 'https://github.com/giuliacardieri/agenda-pwa/blob/master/images/pets.jpg?raw=true',
            'location': 'Veterinário Ishizuka',
            'icon': 'pets',
            'category': 'Pets',
            'completed': 0
          },
          {
            'title': 'Limpar apartamento',
            'date': '2018-06-07',
            'time_start': '10:00',
            'time_end': '12:00',
            'image': 'https://github.com/giuliacardieri/agenda-pwa/blob/master/images/exercise.jpg?raw=true',
            'location': 'Meu apartamento',
            'icon': 'face',
            'category': 'Personal',
            'completed': 0
          }
        ];
        localStorage.setItem('agenda_db', JSON.stringify(db));
      }
    },
    getDB: function() {
      if (!localStorage.getItem('agenda_db'))
        this.setDB();
      return JSON.parse(localStorage.getItem('agenda_db'));
    }
  }
}