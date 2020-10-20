import React from 'react'
import { Layout } from 'antd'

const { Header, Content } = Layout

const MainLayout = ({ children }) => (
  <Layout className="page">
    <Header className="header">
      <img className="logo" src="logo.svg" alt="Logo" />
    </Header>
    <Content className="content">{children}</Content>
  </Layout>
)

export default MainLayout
