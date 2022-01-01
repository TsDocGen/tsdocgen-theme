import { Typography, Collapse, Tag } from "antd";
import React from "react";
import type { MethodComponentProps } from '@tsdocgen/core/types/theme';
import { Card } from "../Card";
import getScopeColor from "../Utils/getScopeColor";

const { Paragraph } = Typography;

const CardHeader: React.FC<MethodComponentProps> = ({ method }) => {
    return (
        <span>
            <Tag color={getScopeColor(method.scope)}>{method.scope}</Tag>
            <span>{method.name}</span>
        </span>
    );
}

const PanelHeader: React.FC<MethodComponentProps> = ({ method }) => {
    return (
        <span>
            {`${method.name}(): ${method.returnType}`}
        </span>
    );
}

const Method: React.FC<MethodComponentProps> = ({ method }) => {
    return (
        <Card title={<CardHeader method={method} />}>

            <Collapse defaultActiveKey="1">
                <Collapse.Panel header={<PanelHeader method={method} />} key="1">
                    <Paragraph>
                        Source: {method.sourceFileRelativePath}:{method.startLineNumber}
                    </Paragraph>
                    <Paragraph>
                        {method.jsDoc.description}
                    </Paragraph>
                    <code>
                        {JSON.stringify(method, null, 2)}
                    </code>
                </Collapse.Panel>
            </Collapse>
        </Card>
    );
}

export default Method;
