'use strict';

if (window.File && window.FileReader && window.FileList) {
  console.log('Todas las APIs soportadas');
} else {
  alert('La API de FILE no es soportada en este navegador.');
}

function handleFileSelect(e) {
  var file = e.target.files[0]; //archivo subido
  var reader = new FileReader();

    reader.onload = function (e) {
    var src = document.createAttribute('src');
    src.value = e.target.result;
    videoFile.setAttributeNode(src); //añade atributo src
    alert('Cargando el video');
};
 reader.readAsDataURL(file);
}

function muted() {
  var video = document.getElementById('videoFile');
  var buttonMuted = document.getElementById('btnMutted');
  if (video.muted) {
    video.muted = false;
    buttonMuted.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  } else {
    video.muted = true;
    buttonMuted.innerHTML = '<i class="fa-solid fa-volume-off"></i>';
  }
}

document.getElementById('videoSelected').addEventListener('change', handleFileSelect, false);
