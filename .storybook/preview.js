import '../src/index.scss'
import React from 'react';

export const decorators = [
  (Story) => (
    <div 
      data-theme-style='dark'
      style={{
        fontFamily: "'Roboto', sans-serif",
        fontSize: "14px",
        lineHeight: "22px",
        fontWeight: 400,
        color: "rgba(255, 255, 255, 0.96)",
      }}
    >      
      <Story />
    </div>
  ),
];

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1F1F1F',
      },
      {
        name: 'light',
        value: '#FFFFFF',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}