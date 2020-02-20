import './styles/index.scss';
import Buffer from './scripts/buffer';
import Selection from './scripts/selection';

document.addEventListener('DOMContentLoaded', () => {
    window.newBuffer = new Buffer();
    let selection = new Selection(window.newBuffer);
    selection.addModalClickListeners();
    window.newBuffer.addFirstPlayClickListener();

    setTimeout(() => {
        document.querySelector("#loading-bg").setAttribute("id", "hidden-loading-bg");
    }, 2000);
});