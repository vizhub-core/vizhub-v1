import React from 'react';
import { Section, File } from './styles';

export const Configurator = ({ onFileClick }) => (
  <>
    <Section>Design</Section>
    <input type="color" value="#e66465" readOnly /> Color
    <input type="range" min="0" max="100" value="50" readOnly /> Number
    <input type="text" /> String
    <input type="checkbox" /> Boolean
    <Section>Code</Section>
    <File onClick={onFileClick}>index.html</File>
    <File onClick={onFileClick}>index.js</File>
    <File onClick={onFileClick}>styles.css</File>
    <Section>Dependencies</Section>
    <Section>Settings</Section>
  </>
);
