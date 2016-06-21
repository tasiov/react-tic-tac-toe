import React from 'react';
import Slider from 'material-ui/Slider';

const SizeSlider = (props) => {
  return (
    <Slider
      min={3}
      max={12}
      step={1}
      defaultValue={3}
      value={props.slider}
      onChange={props.handler}
      style={{width: '450px', margin: 'auto', marginTop: '40px'}}
    />
  );
}

export default SizeSlider;
