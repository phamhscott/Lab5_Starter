// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore img');
  let voices = [];

  function voiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  voiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = voiceList;
  }

  talkButton.addEventListener('click', () => {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    if (textToSpeak.value !== '') {
      const utterThis = new SpeechSynthesisUtterance(textToSpeak.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }

      utterThis.onstart = () => {
        faceImage.src = 'assets/images/smiling-open.png';
      }

      utterThis.onend = () => {
        faceImage.src = 'assets/images/smiling.png';
      };

      synth.speak(utterThis);
    }
  });
}