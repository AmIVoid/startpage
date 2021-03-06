/////////////////////////////////////////////////////////////////////////////////////////////////
//                                      FOR USER 
// LEFT ----> RIGHT [] [] [] [] []
//Social    
const category1_titles = ['Youtube', 'Twitter', 'Twitch', 'Reddit', '4chan', 'Discord'];
const category1_links = [`https://www.youtube.com`, `https://twitter.com`, `https://twitch.tv`, `https://reddit.com`, `https://4chan.org`, `https://discord.com`];
//Anime
const category2_titles = ['Anilist', 'Anichart', 'Wonderfulsubs', 'Kissanime', 'Twist.moe', 'Konachan', 'Wall Haven'];
const category2_links = [`https://anilist.co/home`, `https://anichart.net/`, `https://beta.wonderfulsubs.com/`, `https://kissanime.ru/`, `https://twist.moe`, `https://konachan.net`, 'https://wallhaven.cc/search?q=id:5&ref=fp'];
//Favorites
const category3_titles = ['Anilist',  'Wonderfulsubs', 'Kissanme', 'Youtube', 'Twitter'];
const category3_links = [`https://anilist.co/home`, `https://beta.wonderfulsubs.com/`, `https://kissanime.ru/`, `https://www.youtube.com/`, `https://twitter.com/home`];
//Programming
const category4_titles = ['Github', 'W3 Schools', 'Stack Overflow', 'MDN'];
const category4_links = [`https://github.com`, `https://www.w3schools.com`, `https://stackoverflow.com`, `https://developer.mozilla.org/en-US/docs/Learn`];
//Music
const category5_titles = ['Gmail', 'Outlook', 'ProtonMail'];
const category5_links = [`https://mail.google.com/mail/u/0/`, `https://outlook.office.com/mail/inbox`, `https://mail.protonmail.com/inbox`];
//In order of left -> right
const categories = ['ソーシャル','アニメ','お気に入り','プログラミング','メイル'];
                                                                          //Background Color
const card_colors = ['#28796B','#693273','#410E1A', '#7A94AB', '#D79052', '#17181F', '#17181F'];
                                                                            //Dark  //Light
//////////////////////////////////////////////////////////////////////////////////////////////

let root = document.documentElement;
root.style.setProperty("--youmu", card_colors[0]);
root.style.setProperty("--suwako", card_colors[1]);
root.style.setProperty("--reimu", card_colors[2]);
root.style.setProperty("--marisa", card_colors[3]);
root.style.setProperty("--koishi", card_colors[4]);
root.style.setProperty("--bg", card_colors[5]);

let links = '';

function showTitles() {
    links = '';
    for (let i=0; i<categories.length; i++) {
        document.getElementById(`category${i+1}`).innerHTML = `<h3>${categories[i]}</h3>`;
    }
}

function showLinks(category_titles, category_links) {
    links ='<div>'
    for (let i=0; i<category_titles.length; i++) {
        links += `<a href='${category_links[i]}'>${category_titles[i]}</a>`;
    }
    links +='</div>'
}

function blurImage(character) {
    document.getElementById(`${character}`).classList.add("blur");
    document.getElementById('settings-btn').classList.add('cardHover');
}

function unblurImage(character) {
    document.getElementById(`${character}`).classList.remove("blur");
    document.getElementById('settings-btn').classList.remove('cardHover');
}

let current_bg = '';
function getSettings() {
    let bg = document.getElementById('bg');
    bg.value = localStorage.getItem("background");
    let message = document.getElementById('message')
    message.value = localStorage.getItem('message');
    if (bg.value != '') {
        document.body.style.background = `url(${bg.value})`;
        document.body.style.backgroundSize = `cover`;
        current_bg = `url(${bg.value})`;
    }
    if (message.value != '') {
       document.getElementById('welcome-message').innerHTML = message.value;
    }
    if (localStorage.getItem("theme") == 'dark') {
        darkTheme();
    }
    if (localStorage.getItem("theme") == 'light') {
        lightTheme();
    }
}

let currentTheme = 'dark';
function darkTheme() {
    if (document.getElementById('bg').value == '') {
        document.body.style.background = card_colors[5];
        current_bg = card_colors[5];
    }
    document.getElementById('settings-btn').style.color = card_colors[6];
    document.getElementById('welcome-message').style.color = card_colors[6];
    document.getElementById('welcome-message').style.textShadow = '4px 4px rgb(0, 0, 0, 0.3)';
    currentTheme = 'dark';
    localStorage.setItem("theme", currentTheme);
}

function lightTheme() {
    if (document.getElementById('bg').value == '') {
        document.body.style.background = card_colors[6];
        current_bg = card_colors[6];
    }
    document.getElementById('settings-btn').style.color = card_colors[5];
    document.getElementById('welcome-message').style.color = card_colors[5];
    document.getElementById('welcome-message').style.textShadow =' 4px 0px rgb(255, 255, 255, 0.7)';
    currentTheme = 'light';
    localStorage.setItem("theme", currentTheme);
}

showTitles();
getSettings();

//Add Event Listeners

let settings = document.getElementById('settings-btn');
settings.onclick = () => {
    document.getElementById(`settings`).classList.toggle("show");
}

let bg = document.getElementById('bg');
bg.onchange = () => {
    current_bg = `url(${bg.value})`;
    current_link = bg.value;
    if (bg.value == '') {
        if (currentTheme == 'dark') {
            current_bg = card_colors[5];
        }
        if (currentTheme == 'light') {
            current_bg = card_colors[6];
        }
    }
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    localStorage.setItem("background", current_link);
}

let message = document.getElementById('message');
message.onchange = () => {
    document.getElementById('welcome-message').innerHTML = message.value;
    localStorage.setItem("message", message.value);
}

let category1 = document.getElementById("category1");
category1.onmouseenter = function() {
    blurImage('youmu-img');
    showLinks(category1_titles,category1_links);
    this.innerHTML = links;
};

category1.onmouseleave = function() {
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('youmu-img');
    showTitles();
}

let category2 = document.getElementById("category2");
category2.onmouseenter = function() {
    blurImage('suwako-img');
    showLinks(category2_titles,category2_links);
    this.innerHTML = links;
};

category2.onmouseleave = function() {
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('suwako-img');
    showTitles();
}

let category3 = document.getElementById("category3");
category3.onmouseenter = function() {
    blurImage('reimu-img');
    showLinks(category3_titles,category3_links);
    this.innerHTML = links;
};

category3.onmouseleave = function() {
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('reimu-img');
    showTitles();
}

let category4 = document.getElementById("category4");
category4.onmouseenter = function() {
    blurImage('marisa-img');
    showLinks(category4_titles,category4_links);
    this.innerHTML = links;
};

category4.onmouseleave = function() {
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('marisa-img');
    showTitles();
}

let category5 = document.getElementById("category5");
category5.onmouseenter = function() {
    blurImage('koishi-img');
    showLinks(category5_titles,category5_links);
    this.innerHTML = links;
};

category5.onmouseleave = function() {
    document.body.style.background = current_bg;
    document.body.style.backgroundSize = `cover`;
    unblurImage('koishi-img');
    showTitles();
}

