import { Card } from "antd";
import React from "react";
import type { PropertyComponentProps } from 'tsdocgen';

const Property: React.FC<PropertyComponentProps> = ({ property }) => {
    return (
        <Card title={property.name}>
            <code>
             {JSON.stringify(property, null, 2)}
            </code>
        </Card>
    );
}

export default Property;
