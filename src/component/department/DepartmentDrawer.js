import React, { useEffect } from "react";
import { Form, Input } from "antd";
import GradientButton from "../common/GradientButton";

const DepartmentDrawer = ({ initialValues, onSave, isEditing }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (isEditing && initialValues) {
            form.setFieldsValue(initialValues);
        }
    }, [isEditing, initialValues, form]);

    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={initialValues}
            onFinish={onSave}
            className="department-form"
        >
            <Form.Item
                label="Department Code"
                name="departmentCode"
                rules={[{ required: true, message: "Department Code is required" }]}
            >
                <Input placeholder="Enter department code" />
            </Form.Item>

            <Form.Item
                label="Department Name"
                name="departmentName"
                rules={[{ required: true, message: "Department Name is required" }]}
            >
                <Input placeholder="Enter department name" />
            </Form.Item>

            <Form.Item>
                <GradientButton
                    name={isEditing ? "Update Department" : "Create Department"}
                    onClick={() => form.submit()}
                    width="100%"
                />
            </Form.Item>
        </Form>
    );
};

export default DepartmentDrawer;
