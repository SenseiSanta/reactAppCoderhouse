import React from 'react';
import '../LoadingWidget/LoadingWidget.css'
import svg from '../../icons/loadingSVG.svg'

function LoadingWidget({ items }) {
    return (<>
    <div id='loadingGif'>
        <img src={svg} alt="Loading Icon" />
    </div>
    </>)
    }
export default LoadingWidget