import React, { useState } from 'react';

function SelectData() {
    const [displayList, setDisplayList] = useState(false); 

    return (
        <div className='selectData'>
            <fieldset className={`fieldset fieldsetSelect ${displayList ? 'focuseFieldset' : ''}`}>
                {displayList && <legend className='legend focuseLegend'>Выберите город *</legend>}
                <button 
                    type='button'
                    className={`buttonShowOptions buttonShowSelectData ${displayList ? 'focuseButton' : ''}`}
                    onClick={() => setDisplayList(!displayList)}>
                    Выберите город *
                    <span className={`arrow ${displayList ? 'up' : 'down'}`}></span>
                </button>
            </fieldset>
            { displayList &&
                <ul className='selectDataList'>
                    <li className='selectItem'>Пример текста</li>
                    <li className='selectItem'>Пример текста</li>
                    <li className='selectItem'>Пример текста</li>
                    <li className='selectItem'>Пример текста</li>
                </ul>
            }
        </div>
    );
}

export default SelectData;