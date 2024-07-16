import React , {useState, useEffect} from 'react';
import Text from "./Text";


function Body(){
    const [outerImg, setOuterImg] = useState([0,0]);
    const [outputVal, setOutputVal] = useState('');
    const [inputVal, setInputVal] = useState('');


    useEffect(() => {
        const textbox = document.getElementById('text-shift');
        textbox.value = String.fromCharCode((outerImg[1])%26 + 65);
        encodeMsg(inputVal);
    }, [outerImg]);

    function rotateImg(name){
        console.log(name);
        if(name === 'outer'){
            setOuterImg([outerImg[0]+360/26, (outerImg[1]+1)%26]);
        }
 
    }

    function encodeMsg(msg){
        //console.log(msg);

        setInputVal(msg);
        let newMsg = "";
        for(let i = 0; i<msg.length ; i++){
            if(msg[i]>='A' && msg[i]<= 'Z'){

                newMsg += String.fromCharCode((msg.charCodeAt(i)+outerImg[1]-65)%26 + 65);
            }
            else if(msg[i]>='a' && msg[i]<= 'z'){
                newMsg += String.fromCharCode((msg.charCodeAt(i)+outerImg[1]-97)%26 + 97);
            }
            else{
                newMsg += msg[i];
            }
        }
        setOutputVal(newMsg);
    }

    function shiftLetter(letter){
        if(letter.length == 1){
            const l = letter.toUpperCase();
            const x = l.charCodeAt(0)-65;
            if(x<26 && x>=0){
                setOuterImg([x*360/26, x])
            }
            
        }

    }


    return (<div className="app-container">
        <div className="horizontal-content">
            <Text name = "input"  placeholder = "Enter text to be encoded..."  encodeMsg = {encodeMsg} setInputVal = {setInputVal}/>
            <div className="outer-wheel-container">
                <img className = 'inner wheel' src = {require('./images/wheel-new.png')} alt = "Image"  />
                <img className = 'outer wheel' src = {require('./images/wheel-new.png')} alt = "Image" onClick = {()=>{rotateImg('outer')}} style = {{transform:`rotate(${outerImg[0]}deg)`}} />
                
            </div>            
            <Text name = "output" placeholder = "Output will appear here" readOnly = {true} value = {outputVal}/>
        </div>
        <div className="horizontal-content-bottom">
        <label for = 'text-shift' value = "A" className='text-shift'>A</label>
        <p>➡️</p>
        <input type='text' id = 'text-shift' className = "text-shift" maxLength={1}  onChange={(event)=>{shiftLetter(event.target.value)}}/>
        </div>
        
        

    </div>
        
    )
}

export default Body;