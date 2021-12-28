import { Typography } from "antd";
import React from "react";
import type { MethodsComponentProps } from '@tsdocgen/core';
import Method from "../Method";

const { Title } = Typography;

const Methods: React.FC<MethodsComponentProps> = ({ methods }) => {
    return (
        <div>
            <Title level={3}>Methods</Title>
            {methods.map((method) => (
                    <Method method={method} key={method.name} />
            ))}
        </div>
    );
}

export default Methods;
