import { Typography } from "antd";
import React from "react";
import type { MethodsComponentProps } from '@tsdocgen/core/types/theme';
import Registry from "../Registry";

const { Title } = Typography;

const Methods: React.FC<MethodsComponentProps> = ({ methods }) => {
    const Method = Registry.get('Method');

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
