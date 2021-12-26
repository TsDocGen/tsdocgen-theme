import { Card, Typography } from "antd";
import React from "react";
import type { PropertyComponentProps } from '@tsdocgen/core';

const { Paragraph } = Typography;

const Property: React.FC<PropertyComponentProps> = ({ property }) => {
    return (
        <Card title={property.name}>
            <Paragraph>
                {property.jsDoc.description}
            </Paragraph>
            <code>
                {JSON.stringify(property, null, 2)}
            </code>
        </Card>
    );
}

export default Property;
