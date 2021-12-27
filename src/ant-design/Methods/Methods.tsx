import { Typography } from "antd";
import React from "react";
import type { MethodsComponentProps } from '@tsdocgen/core';
import Method from "../Method";

const { Title } = Typography;

const Methods: React.FC<MethodsComponentProps> = ({ methods }) => {
    return (
        <div>
            <Title>Methods</Title>
            {methods.map((method) => (
                    <Method method={method} />
            ))}
        </div>
    );
}

export default Methods;
