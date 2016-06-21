import React from 'react';
import Slider from 'material-ui/Slider';

const SizeSlider = (props) => {
  return (
    <Slider
      min={3}
      max={12}
      step={1}
      defaultValue={props.size}
      value={props.size}
      onChange={props.handler}
      style={{width: '450px', margin: 'auto', marginTop: '40px'}}
    />
  );
}

export default SizeSlider;
