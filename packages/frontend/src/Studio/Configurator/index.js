import React from 'react';
import {
  Wrapper,
  Section,
  SectionHeader,
  SectionHeaderIcon,
  SectionHeaderTitle,
  SectionBody,
  File,
  Header,
  HeaderIcon,
  HeaderTitle,
  Widget,
  WidgetTitle,
  WidgetValue
} from './styles';
import { ArrowBackSVG, ArrowRightSVG } from '../../icons';

const files = ['index.html', 'index.js', 'styles.css'];

export const Configurator = ({ onFileClick }) => (
  <Wrapper>
    <Header>
      <HeaderIcon>
        <ArrowBackSVG fill={'white'} />
      </HeaderIcon>
      <HeaderTitle>Configurator</HeaderTitle>
    </Header>
    <Section>
      <SectionHeader>
        <SectionHeaderIcon>
          <ArrowRightSVG />
        </SectionHeaderIcon>
        <SectionHeaderTitle>Design</SectionHeaderTitle>
      </SectionHeader>
      <SectionBody>
        <Widget>
          <WidgetTitle>Color</WidgetTitle>
          <WidgetValue fill="#e66465" />
        </Widget>
        <Widget isLast={true}>
          <WidgetTitle>Color</WidgetTitle>
          <WidgetValue fill="#e66465" />
        </Widget>
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>Code</SectionHeader>
      <SectionBody>
        {files.map(file => (
          <File key={file} onClick={() => onFileClick(file)}>
            {file}
          </File>
        ))}
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>Settings</SectionHeader>
    </Section>
  </Wrapper>
);
