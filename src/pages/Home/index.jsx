import { Layout, Menu} from 'antd';
import {Header} from "antd/es/layout/layout";

const Home = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme={"dark"}
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item key={"1"}>item 1</Menu.Item>
          <Menu.Item key={"2"}>item 2</Menu.Item>
          <Menu.Item key={"3"}>item 3</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
export default Home