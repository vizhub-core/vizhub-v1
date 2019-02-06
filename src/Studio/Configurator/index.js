import React from 'react';
import { Section, File } from './styles';

export const Configurator = () => (
  <>
    <Section>Design</Section>
    <input type='color' value='#e66465'/> Color
    <input type='range' min='0' max='100' value='50'/> Number
    <input type='text' /> String
    <input type='checkbox' /> Boolean
    <Section>Code</Section>
    <File>index.html</File>
    <File>index.js</File>
    <File>styles.css</File>
    <Section>Dependencies</Section>
    <Section>Settings</Section>
  </>
);
