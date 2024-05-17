import { AiFillMoneyCollect } from "react-icons/ai";
import {
  Anchor,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Space,
  Steps,
  Table,
  Tag,
  Typography,
  Form,
  Input,
  TimePicker,
  Empty,
} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import "./styles/app.scss";
import { HiOutlineHome, HiOutlineInformationCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import ButtonGroup from "antd/es/button/button-group";
import dayjs from "dayjs";
function App() {
  const [collapse, setCollapse] = useState(false);
  interface DataObject {
    id: number;
    name: string;
    email: string;
    status: boolean;
  }
  const dataGen = (): DataObject[] => {
    const data = [];
    for (let i = 0; i < 34; i++) {
      data.push({
        id: faker.datatype.number(1000),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        status: Math.random() > 0.5 ? true : false,
      });
    }
    return data;
  };
  const tableData = dataGen();
  return (
    <>
      <Layout className="container">
        <Header className="header">
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setCollapse(!collapse)}
          />
          <div className="brand">Dashboard</div>
        </Header>
        <Layout>
          <Sider collapsed={collapse}>
            <Menu
              mode="inline"
              items={[
                {
                  label: "Home",
                  key: "home",
                  icon: <HiOutlineHome />,
                  children: [
                    {
                      label: "Add Profile",
                      key: "add profile",
                    },
                    {
                      label: "Add User",
                      key: "add user",
                    },
                    {
                      label: "Add haha",
                      key: "add haha",
                    },
                  ],
                },
                {
                  label: "About Us",
                  key: "about us",
                  icon: <HiOutlineInformationCircle />,
                },
              ]}
            />
          </Sider>
          <Content className="content">
            <Card>
              <Typography.Title>Sales</Typography.Title>
              <Typography.Paragraph>
                When you develop a mockup page or backend API is not ready for
                data fetching and you have to make Frontend Development with
                static data until it comes, react-lorem-ipsum will create your
                gibberish texts for you.
              </Typography.Paragraph>
            </Card>
            <Space direction="horizontal">
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiFillMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$4545</Typography.Title>
              </Card>
            </Space>
            <Divider />
            <Row gutter={10} align={"top"} justify={"end"}>
              <Col span={6}>
                <Card>
                  <Typography.Title>Hello</Typography.Title>
                </Card>
              </Col>
              <Col span={6}>
                <Card>
                  <Typography.Title>Hello</Typography.Title>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={6}>
                <Card>
                  <Anchor
                    // direction="horizontal"
                    affix={false}
                    items={[
                      {
                        key: 1,
                        href: "www.google.com",
                        title: "demo",
                      },
                      {
                        key: 2,
                        href: "www.google.com",
                        title: "demo2",
                        children: [
                          {
                            key: 3,
                            href: "www.google.com",
                            title: "demo2",
                          },
                          {
                            key: 4,
                            href: "www.google.com",
                            title: "demo2",
                          },
                        ],
                      },
                    ]}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card>
                  <Steps
                    current={1}
                    items={[
                      {
                        title: "Sign UP",
                        description: "Register forst",
                      },
                      {
                        title: "Subscribe",
                        description: "Register forst",
                      },
                      {
                        title: "Purchase",
                        description: "Register forst",
                      },
                      {
                        title: "Finished",
                        description: "Register forst",
                      },
                    ]}
                  />
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Table
                  dataSource={tableData}
                  columns={[
                    {
                      dataIndex: "id",
                      title: "ID",
                      key: "id",
                      fixed: true,
                    },
                    {
                      dataIndex: "name",
                      title: "name",
                      key: "name",
                      fixed: true,
                    },
                    {
                      dataIndex: "email",
                      title: "Email id",
                      key: "email",
                    },
                    {
                      dataIndex: "status",
                      title: "status",
                      render: (val) =>
                        val ? <Tag>Active</Tag> : <Tag>Not Active</Tag>,
                    },
                    {
                      title: "Actions",
                      render: () => (
                        <ButtonGroup>
                          <Button type="primary">Edit</Button>
                          <Button type="primary" danger>
                            Delete
                          </Button>
                          <Button>Update</Button>
                        </ButtonGroup>
                      ),
                    },
                  ]}
                />
              </Col>
            </Row>
            <Divider />
            <Card>
              <Form
                layout="vertical"
                onFinish={(values) => {
                  console.log(values);
                }}
              >
                <Form.Item label={"Name"} name={"name"}>
                  <Input />
                </Form.Item>
                <Form.Item label={"Email"} name={"email"}>
                  <Input type="email" />
                </Form.Item>
                <Form.Item label={"Password"} name={"password"}>
                  <Input type="password" />
                </Form.Item>
                <Form.Item>
                  <TimePicker
                    name={"time"}
                    defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                  />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Signup
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Card>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
