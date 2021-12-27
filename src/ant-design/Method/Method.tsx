import { Card, Typography } from "antd";
import React from "react";
import type { MethodComponentProps } from '@tsdocgen/core';

const { Paragraph } = Typography;

const Method: React.FC<MethodComponentProps> = ({ method }) => {
    return (
        <Card title={`(${method.scope}) ${method.name}(): ${method.returnType}`}>
            <Paragraph>
                {method.jsDoc.description}
            </Paragraph>
            <code>
                {JSON.stringify(method, null, 2)}
            </code>
        </Card>
    );
}

export default Method;
