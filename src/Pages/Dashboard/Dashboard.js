import React, { useState } from 'react';
import SensorCard from '../../Components/SensorCard/SensorCard';
import Logo from '../../Assets/Images/logo.png';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import {
  Divider,
  Image,
  Row,
  Col,
  Layout,
  Segmented,
  Card,
  Typography,
  Switch,
} from 'antd';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

export const Dashboard = ({ sensorValue, updateConnection }) => {
  const [showConnected, setShowConnected] = useState(false);

  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  if (status === 'loading') {
    return null;
  }

  const handleToggle = () => {
    setShowConnected((preVal) => !preVal);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Row align='center' justify='space-between'>
            <Col>
              <Image preview={false} width={120} src={Logo} />
            </Col>
            <Col>
              <Switch
                block
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedChildren={'☀️'}
                unCheckedChildren={'🌙'}
              />
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            padding: '50px',
          }}
        >
          <Card>
            <Row align='middle' justify='center'>
              <Col>
                <Title level={2} style={{ marginBottom: 0 }}>
                  Sensor Management
                </Title>
              </Col>
              <Col flex='auto'></Col>
              <Col>
                <Segmented
                  options={[
                    { label: 'Connected', value: true },
                    { label: 'All', value: false },
                  ]}
                  value={showConnected}
                  onChange={handleToggle}
                />
              </Col>
            </Row>
          </Card>

          <Divider />
          <Row gutter={[24, 24]}>
            {Object.keys(sensorValue).map((element, index) => {
              if (showConnected) {
                if (sensorValue[element].connected) {
                  return (
                    <Col key={sensorValue[element].name} xs={24} md={12} xl={8}>
                      <SensorCard
                        key={sensorValue[element].name}
                        data={sensorValue[element]}
                        updateConnection={updateConnection}
                      />
                    </Col>
                  );
                }
                return null;
              } else {
                return (
                  <Col key={sensorValue[element].name} xs={24} md={12} xl={8}>
                    <SensorCard
                      key={sensorValue[element].name}
                      data={sensorValue[element]}
                      updateConnection={updateConnection}
                    />
                  </Col>
                );
              }
            })}
          </Row>
        </Content>
        <Footer>
          <Text strong code level={1}>
            Designed & Developed by Omar Shaikh
          </Text>
        </Footer>
      </Layout>
    </>
  );
};
