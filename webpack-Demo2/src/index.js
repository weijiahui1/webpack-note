import _ from 'lodash';
import './style.css';
import BackImg from './a.jpg';

function component () {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // 将图像添加到我们已经存在的 div 中。
    let myBackImg = new Image();
    myBackImg.src = BackImg;

    element.appendChild(myBackImg);
    return element;
}
document.body.appendChild(component());