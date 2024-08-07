import {useState} from 'react';

function ColorPicker(){
    function colorhandle(event){
        setColor(event.target.value);
    }
    const [color, setColor] = useState('#FFFFFF');

    return (<div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: <b/> {color}</p>
        </div>
       <label>select a color:</label>
       <input type="color" value={color} onChange={colorhandle}/>
          </div>)
    }
    
    export default ColorPicker