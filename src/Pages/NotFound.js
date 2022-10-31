import React from 'react';
import { Spin } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export const NotFound = () => {
  return (
    <div className='not-found'>
      <Title>Server not responding</Title>
      <Spin size='large' />
    </div>
  );
};
