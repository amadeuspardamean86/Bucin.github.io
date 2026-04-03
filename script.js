document.getElementById('lovebutton').addEventListener('click', function() {
    var message = document.getElementById('hiddenMessage');
    message.classList.toggle('hidden');
    message.classList.toggle('show');
    this.innerText = message.classList.contains('hidden') ? 'klik ini' : 'tutup';

});