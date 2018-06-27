export const modalities = {  
  methods: {
    startSpeech: function(element) {
      var speak = new webkitSpeechRecognition();

      speak.lang = 'pt-BR';

      speak.start();

      speak.onresult = function(event) {
        var text = ''
        , i;

        for(i = event.resultIndex; i < event.results.length; ++i) {
          text += event.results[i][0].transcript;
        }
        console.log('text: ' + text); // showing what he heard
        
        if (text !== '') {
          
          document.getElementById(element).setAttribute('value', text.toLowerCase());
          if (element === 'title'){
            var event1 = new Event('change');
            document.getElementById(element).dispatchEvent(event1);
          } else {
            var event2 = new Event('change')
            document.getElementById(element).dispatchEvent(event2);
          }

          M.updateTextFields();
        }
      }
    },
    speechSynthesis: function(text) {
      var synth = new SpeechSynthesisUtterance(text);
      synth.lang = 'pt-BR';
      window.speechSynthesis.speak(synth);
    },
    activateSwipe: function(type, active, id) {
      if (active == 2) {

        if (id === 'test') {
          document.getElementById('card-' +  id).classList.remove('swipeleft', 'swiperight');
        }

        if (type === 1)
          document.getElementById('card-' +  id).classList.add('swipeleft');
        else
          document.getElementById('card-' +  id).classList.add('swiperight');
      }
    },
  }
}