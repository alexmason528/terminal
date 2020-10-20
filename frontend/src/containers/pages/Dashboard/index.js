import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Col, Drawer, Input, Modal, Row, Table } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {
  listAddress,
  createAddress,
  updateAddress,
  deleteAddress,
  selectAddressData,
  selectAddressStatus,
  LIST_ADDRESS,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
} from 'store/modules/main'
import { AddressForm } from 'components'
import { successAction } from 'utils/request-helpers'

const { Search } = Input

const Dashboard = () => {
  const data = useSelector(selectAddressData)
  const status = useSelector(selectAddressStatus)

  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)

  useEffect(() => {
    dispatch(listAddress())
  }, [dispatch])

  useEffect(() => {
    if (
      [successAction(CREATE_ADDRESS), successAction(UPDATE_ADDRESS)].indexOf(
        status,
      ) !== -1
    ) {
      setEditingAddress(null)
      setIsOpen(false)
    }
  }, [status])

  const isLoading = useMemo(() => {
    return (
      [LIST_ADDRESS, CREATE_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS].indexOf(
        status,
      ) !== -1
    )
  }, [status])

  function handleTableChange(pagination) {
    fetchData(pagination, search)
  }

  function fetchData(pagination, search) {
    const { current, pageSize } = pagination

    const params = Object.assign(
      {
        page: current,
        pageSize,
      },
      search && { search },
    )

    dispatch(listAddress({ params }))
  }

  function handleEdit(address) {
    setEditingAddress(address)
    toggleDrawer()
  }

  function handleDelete(id) {
    Modal.confirm({
      title: 'Are you sure delete this address?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      maskClosable: true,
      onOk() {
        dispatch(deleteAddress(id))
      },
      onCancel() {},
    })
  }

  function handleSearch(search) {
    const { current, pageSize } = data
    const pagination = { current, pageSize }

    setSearch(search)
    fetchData(pagination, search)
  }

  function handleSubmit(data) {
    if (editingAddress) {
      dispatch(updateAddress({ id: editingAddress.id, data }))
    } else {
      dispatch(createAddress(data))
    }
  }

  function toggleDrawer() {
    if (isOpen) {
      setEditingAddress(null)
    }

    setIsOpen(!isOpen)
  }

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Adress Line 1',
      dataIndex: 'line1',
      key: 'line1',
    },
    {
      title: 'Adress Line 2',
      dataIndex: 'line2',
      key: 'line2',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Zipcode',
      dataIndex: 'zipcode',
      key: 'zipcode',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <React.Fragment>
          <Button
            type="primary"
            shape="circle"
            icon={<EditOutlined />}
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(record)}
          />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            size="small"
            danger
            onClick={() => handleDelete(record.id)}
          />
        </React.Fragment>
      ),
    },
  ]

  return (
    <Card className="dashboard">
      <Row justify="space-between" className="mb-1">
        <Col sm={8}>
          <Search placeholder="Search" enterButton onSearch={handleSearch} />
        </Col>
        <Col sm={12} className="text-right">
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={toggleDrawer}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <Table
            dataSource={data.results}
            columns={columns}
            bordered
            rowKey="id"
            loading={isLoading}
            pagination={{
              current: data.currentPage,
              total: data.totalCount,
              pageSize: data.pageSize,
            }}
            onChange={handleTableChange}
          />
        </Col>
      </Row>
      <Drawer
        title={!editingAddress ? 'Create Address' : 'Update Address'}
        visible={isOpen}
        width={500}
        destroyOnClose
        onClose={toggleDrawer}
      >
        <AddressForm
          initialValues={editingAddress}
          isLoading={isLoading}
          onSubmit={handleSubmit}
        />
      </Drawer>
    </Card>
  )
}

export default Dashboard
