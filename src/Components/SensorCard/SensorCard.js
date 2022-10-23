import React from 'react';
import CardBody from './CardBody';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

const SensorCard = (props) => {
  return (
    <div key={props.data.name}>
      <Card
        actions={[
          <EditOutlined key='edit' />,
          <SettingOutlined key='setting' />,
        ]}
      >
        <CardBody
          data={props.data}
          value={props.value}
          updateConnection={props.updateConnection}
        />
      </Card>
    </div>
  );
};

export default SensorCard;
