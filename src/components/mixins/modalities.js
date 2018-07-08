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
          
          document.getElementById(element).value = text.toLowerCase();
          if (element === 'title') {
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
    activateSwipe: function(type, id) {
      let element = document.getElementById('card-' +  id);
  
      this.deactivateSwipe(type, element);
      element.classList.add(type);
    },
    deactivateSwipe: function(type, element) {
      element.classList.remove('swipeleft');
      element.classList.remove('swiperight');

      void element.offsetWidth;
    }
  }
}