var buttons = document.querySelectorAll('button')

document.getElementById('no').addEventListener('click', function(){buttons.forEach(function(button) {button.remove();});
    
    var
    img = document.getElementById('img');
    img.src = '/aset/mahasiswi.png';
    document.getElementById('judul').innerText = 'Anda Benar!';
    document.querySelector('.container').style.backgroundColor = '#6FD240';
    document.querySelector('.container > p').innerText = 'Anda adalah seorang Mahasiswa'
});

document.getElementById('ya').addEventListener('click', function(){buttons.forEach(function(button) {button.remove();});

    var
    img = document.getElementById('img');
    img.src = '/aset/mahasiswa.png';
    document.getElementById('judul').innerText = 'Anda Berbohong!';
    document.querySelector('.container').style.backgroundColor = '#E12E2E';
    document.querySelector('.container > p').innerText = 'Anda adalah seorang Teknisi'
});

