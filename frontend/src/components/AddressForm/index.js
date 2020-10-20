/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Form, Button, Input } from 'antd'

const AddressForm = ({ isLoading, initialValues, onSubmit }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  const validateMessages = {
    required: '${label} is required!',
    string: {
      len: '${label} must be exactly ${len} characters',
    },
  }

  return (
    <Form
      {...layout}
      initialValues={initialValues}
      validateMessages={validateMessages}
      onFinish={onSubmit}
    >
      <Form.Item
        name="line1"
        label="Address Line 1"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="line2" label="Address Line 2">
        <Input />
      </Form.Item>
      <Form.Item name="city" label="City" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="state"
        label="State"
        rules={[{ required: true, len: 2 }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="zipcode"
        label="Zipcode"
        rules={[{ required: true, len: 5 }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddressForm
