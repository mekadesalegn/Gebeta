import '../css/style.global.css'
import './SpinnerFullScreen.css'

function SpinnerFullScreen(msg: string = '') {
    const container = document.createElement('div');
    container.classList.add('load-screen-container');
    container.id = "loader-screen";

    const elm = document.createElement('div');
    elm.classList.add('elm');

    const span = document.createElement('span');
    span.classList.add('open-sans-500');
    span.textContent = msg

    const img = document.createElement('img');
    img.src = '/3-dots-bounce.svg'

    elm.append(span, img)
    container.appendChild(elm)
    return container;
    // return `
    //     <div class="load-screen-container" id="loader-screen">
    //         <div class="elm">
    //             <span class="open-sans-500"> ${msg} </span>
    //             <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#633403">
    //                 <style>
    //                     .spinner_qM83{animation:spinner_8HQG 1.05s infinite}
    //                     .spinner_oXPr{animation-delay:.1s}
    //                     .spinner_ZTLf{animation-delay:.2s}
    //                     @keyframes spinner_8HQG{0%,57.14%{animation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)}28.57%{animation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)}100%{transform:translate(0)}}
    //                 </style>
    //                 <circle class="spinner_qM83" cx="4" cy="12" r="3"/>
    //                 <circle class="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3"/>
    //                 <circle class="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3"/>
    //             </svg>
    //         </div>
    //     </div>
    // `;
}


export default SpinnerFullScreen