import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ProjectForm from './ProjectForm';

function setup(saving) {
  const props = {
   project: {}, saving: saving, errors: {},
   onSave: () => {},
   onChange: () => {}
 };
   let renderer = TestUtils.createRenderer();
   renderer.render(<ProjectForm {...props}/>);
   let output = renderer.getRenderOutput();
   return {
     props,
     output,
     renderer
   };
  }


describe('ProjectForm React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');

  });

  it('save button is labeled "Saving..." when it is not saving', () => {
    const { output } = setup(true);

    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');


  });

});
