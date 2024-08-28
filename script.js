const easyFlags = [
    { src: '--', name: 'example' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/255px-Flag_of_Latvia.svg.png', name: 'Letônia' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/800px-Flag_of_Kazakhstan.svg.png', name: 'Cazaquistão' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/255px-Flag_of_Bulgaria.svg.png', name: 'Bulgária' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/234px-Flag_of_Norway.svg.png', name: 'Noruega' },
    { src: 'https://s2.static.brasilescola.uol.com.br/be/2022/10/bandeira-da-australia.jpg', name: 'Austrália' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/196px-Flag_of_Belgium.svg.png', name: 'Bélgica' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg', name: 'Malásia' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg', name: 'Chipre' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/640px-Flag_of_Morocco.svg.png', name: 'Marrocos' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg', name: 'Madagascar' },
];  

const hardFlags = [
    { src: '--', name: 'example'},
    { src: 'https://recreio.com.br/media/uploads/legacy/2020/01/16/bandeiras-1210923.png', name: 'Ilha de Man'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210926.jpg', name: 'Frísia'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210922.png', name: 'Quirguistão'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210921.png', name: 'Ilha de Guan'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210927.png', name: 'Veneto'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210920.png', name: 'Martinica'},
    { src: 'https://recreio.uol.com.br/images/large/2020/01/16/bandeiras-1210924.png', name: 'Ulster'},
    { src: 'https://hypescience.com/wp-content/uploads/2009/10/bandeira-3.jpg', name: 'Império de Benin'},
    { src: 'https://hypescience.com/wp-content/uploads/2009/10/bandeira-6.gif', name: 'Antuérpia' },
    { src: 'https://hypescience.com/wp-content/uploads/2009/10/bandeira-13.gif', name: 'Lombardia' },

]

let currentFlagIndex = 0;
let flags = easyFlags; // Default to easy level


function loadNextFlag() {
    if (currentFlagIndex < flags.length - 1) {
        currentFlagIndex++;
        const flag = flags[currentFlagIndex];
        document.getElementById('flag-image').src = flag.src;
        document.getElementById('feedback').textContent = '';
        document.getElementById('answer').value = '';
        document.getElementById('next-button').style.display = 'none';
    } else {
        document.getElementById('feedback').textContent = 'Você completou o jogo!';
        document.getElementById('next-button').style.display = 'none';
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = flags[currentFlagIndex].name.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correto! Parabéns!';
        document.getElementById('next-button').style.display = 'inline';
    } else {
        document.getElementById('feedback').textContent = 'Incorreto. Tente novamente.';
    }
}

window.onload = loadNextFlag;

function changeLevel() {
    const level = document.getElementById('level').value;
    if (level === 'easy') {
        flags = easyFlags;
    } else {
        flags = hardFlags;
    }
    currentFlagIndex = 0;
    loadNextFlag();
}
