import React, { useEffect } from 'react';

function Text(props){
    
    useEffect(() => {
        const textarea = document.querySelector(`textarea[name="${props.name}"]`);
        setHeight(textarea);
    }, [props.value]);

    function setHeight(textarea) {
        textarea.style.height = 'auto';
        if (textarea.scrollHeight < 300) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        } else {
            textarea.style.height = `300px`;
            textarea.style.overflow = 'auto';
        }
    }

    

    return (
        <div>
            <textarea 
                
                className='text' 
                placeholder={props.placeholder} 
                name = {props.name} 
                readOnly= {props.readOnly} 
                spellCheck = 'false' 
                value = {props.value}
                onChange={(event)=>{
                    if(!props.readOnly){
                        setHeight(event.target);
                        props.encodeMsg(event.target.value);
                        props.setInputVal(event.target.value);
                    }
                    
                    
                    }}
                
            />
        </div>
    )
}

export default Text;