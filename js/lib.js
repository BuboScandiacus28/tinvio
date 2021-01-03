let drawImg = (src, id) => {
    let img = document.createElement('img');

    img.setAttribute('src', src);
    img.setAttribute('id', id);

    img.style.cssText = `   
        position: absolute;
        z-index: 9998;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        margin: auto;
        opacity: 0.3;
        display: none;
        max-width: ${id};
    `;

    document.body.appendChild(img);

    img.addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none';
    });
}

let drawBtn = (text, indent) => {
    let btn = document.createElement('button');

    btn.style.cssText = `   
        position: fixed;
        z-index: 9999;
        color: #fff;
        background-color: #0d73fc;
        padding: 15px 30px;
        bottom: 50px;
        right: ${indent}px;
        border-radius: 15px;
        border: 0px;
    `;

    btn.textContent = text;

    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        document.getElementById(text).style.display = 'block';
    });

    return btn.offsetWidth + 25;
}

let lib = () => {
    let script = document.getElementById('pixelPerfectLib');
    let arr_imgs = script.getAttribute('data-src-to-imgs').split(', ');
    let arr_btns_description = script.getAttribute('data-btns-description').split(', ');
    let enabled_layot_id = script.getAttribute('data-enabled-layot');
    let indent = 25;

    document.body.style.position = 'response';

    arr_imgs.forEach((item, index) => {
        drawImg(item, arr_btns_description[index]);
    });

    arr_btns_description.forEach((item) => {
        indent += drawBtn(item, indent);
    });

    if (enabled_layot_id) document.getElementById(enabled_layot_id).style.display = 'block';
}

lib();