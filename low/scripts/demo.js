function click_large() {
    document.getElementById("large").addEventListener("click", getLarge);
}

function click_small() {
    document.getElementById("small").addEventListener("click", getSmall);
}

function click_speak() {
    document.getElementById("speak").addEventListener("click", getSpeak);
}

function click_pause() {
    document.getElementById("pause").addEventListener("click", getPause);
}

function click_resume() {
    document.getElementById("resume").addEventListener("click", getResume);
}

function click_cancel() {
    document.getElementById("cancel").addEventListener("click", getCancel);
}

function getLarge() {
    var element = document.getElementById('news'),
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height'),
        width = style.getPropertyValue('width');

    height = height.substring(0, height.length - 2);
    height = parseInt(height) + 100;
    height = height + "px";
    width = width.substring(0, width.length - 2);
    width = parseInt(width) + 100;
    width = width + "px";

    var element = document.getElementById('info'),
        style = window.getComputedStyle(element),
        ft_size = style.getPropertyValue('font-size');

    ft_size = ft_size.substring(0, ft_size.length - 2);
    ft_size = parseInt(ft_size) + 5;
    ft_size = ft_size + "px";

    document.getElementById("news").style.width=width;
    document.getElementById("news").style.height=height;
    document.getElementById("news_img").style.width=width;
    document.getElementById("news_img").style.height=height;
    document.getElementById("info").style.width=width;
    document.getElementById("info").style.height=height;
    document.getElementById("info").style.fontSize=ft_size;
    
}

function getSmall() {
    var element = document.getElementById('news'),
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height'),
        width = style.getPropertyValue('width');

    height = height.substring(0, height.length - 2);
    height = parseInt(height) - 100;
    height = height + "px";
    width = width.substring(0, width.length - 2);
    width = parseInt(width) - 100;
    width = width + "px";

    var element = document.getElementById('info'),
        style = window.getComputedStyle(element),
        ft_size = style.getPropertyValue('font-size');

    ft_size = ft_size.substring(0, ft_size.length - 2);
    ft_size = parseInt(ft_size) - 5;
    ft_size = ft_size + "px";

    document.getElementById("news").style.width=width;
    document.getElementById("news").style.height=height;
    document.getElementById("news_img").style.width=width;
    document.getElementById("news_img").style.height=height;
    document.getElementById("info").style.width=width;
    document.getElementById("info").style.height=height;
    document.getElementById("info").style.fontSize=ft_size;
}

//const utterance1 = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say');

function getSpeak() {
    const container = document.getElementById('info');
    let utterance = new SpeechSynthesisUtterance(container.textContent);
    speechSynthesis.speak(utterance);
}

function getPause() {
    speechSynthesis.pause();

}

function getResume() {
    speechSynthesis.resume();
}

function getCancel() {
    speechSynthesis.cancel();
}
