import React from 'react';
import styled from 'styled-components';

const code = `import {
  select,
  scaleOrdinal,
  schemeSpectral
} from 'd3';
import { loadAndProcessData } from './loadAndProcessData';
import { colorLegend } from './colorLegend';
import { choroplethMap } from './choroplethMap';

const svg = select('svg');
const choroplethMapG = svg.append('g');
const colorLegendG = svg.append('g')
    .attr('transform', \`translate(40,310)\`);

const colorScale = scaleOrdinal();

// const colorValue = d => d.properties.income_grp;
const colorValue = d => d.properties.economy;

// State
let features;
let selectedCountryId;

const onCountryClick = id => {
  selectedCountryId = id;
  render();
};

loadAndProcessData().then(countries => {
  features = countries.features;
  render();
});

const render = () => {
  colorScale
    .domain(features.map(colorValue))
    .domain(colorScale.domain().sort().reverse())
    .range(schemeSpectral[colorScale.domain().length]);
  
  colorLegendG.call(colorLegend, {
    colorScale,
    circleRadius: 8,
    spacing: 20,
    textOffset: 12,
    backgroundRectWidth: 235
  });
  
  choroplethMapG.call(choroplethMap, { features, colorScale, colorValue, selectedCountryId, onCountryClick });
};
`;

const Code = styled.pre`
  font-family: monospace;
  margin-top: 2px;
  margin-left: 2px;
  position: absolute;
`;

export const Editor = () => 
  <Code>{code}</Code>
