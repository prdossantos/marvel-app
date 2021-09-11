import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../components/Header';
import "../themes/theme-default.scss";

export default {
  title: 'MarvelAPp/Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  showBackLink: false,
  showRightButton: false,
  title: "Titulo"
};

