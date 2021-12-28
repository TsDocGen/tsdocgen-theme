import { Tag, Typography } from "antd";
import React from "react";
import type { PropertyComponentProps } from '@tsdocgen/core';
import { Card } from "../Card";
import getScopeColor from "../Utils/getScopeColor";

const { Paragraph } = Typography;

const CardHeader: React.FC<PropertyComponentProps> = ({ property }) => {
    return (
        <span>
            {property.scope ? (
            <Tag color={getScopeColor(property.scope)}>{property.scope}</Tag>
            ) : null}
            <span>{property.name}</span>
        </span>
    );
}

const Property: React.FC<PropertyComponentProps> = ({ property }) => {
    return (
        <Card title={<CardHeader property={property}/>}>
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
