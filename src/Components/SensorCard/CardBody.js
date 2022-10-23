import React from 'react';
import { Switch, Statistic, Col, Row } from 'antd';

const CardBody = ({ data, updateConnection }) => {
  return (
    <>
      <Row justify='space-between'>
        <Col>
          <h2>{data.name}</h2>
        </Col>
        <Col>
          <Switch
            checked={data.connected}
            onChange={() =>
              updateConnection(
                JSON.stringify({
                  command: data.connected ? 'disconnect' : 'connect',
                  id: data.id,
                })
              )
            }
          />
        </Col>
      </Row>
      <Row justify='center'>
        <Col>
          <Statistic
            title='Reading'
            value={data.value ?? '-'}
            suffix={data.unit}
          />
        </Col>
      </Row>
    </>
  );
};

export default CardBody;
