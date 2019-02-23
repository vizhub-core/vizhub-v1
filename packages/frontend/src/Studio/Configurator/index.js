import React from 'react';
import { Wrapper, Section, File } from './styles';

const files = ['index.html', 'index.js', 'styles.css'];

export const Configurator = ({ onFileClick }) => (
  <Wrapper>
    <Section>Design</Section>
    <input type="color" value="#e66465" readOnly /> Color
    <input type="range" min="0" max="100" value="50" readOnly /> Number
    <input type="text" /> String
    <input type="checkbox" /> Boolean
    <Section>Code</Section>
    {files.map(file => (
      <File key={file} onClick={() => onFileClick(file)}>
        {file}
      </File>
    ))}
    <Section>Settings</Section>
  </Wrapper>
);