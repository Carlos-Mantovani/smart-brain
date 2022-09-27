import React from 'react';
import './ImageUrlForm.css';

const ImageUrlForm = () => {
    return (
        <div>
            <p className='f3'>{'The brain will detect faces in your pictures. Try it!'}</p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 p2 w-70 center' type='text'></input>
                    <button className='w-30 grow f4 ph4 pv2 dib white bg-gold bw0 br2'>Detect</button>
                </div>

            </div>
        </div>
    )
}

export default ImageUrlForm;
