import { Typography } from "antd";
import React from "react";
import type { PropertiesComponentProps } from '@tsdocgen/core/types/theme';
import Property from "../Property";

const { Title } = Typography;

const Properties: React.FC<PropertiesComponentProps> = ({ properties }) => {
    return (
        <div>
            <Title level={3}>Properties</Title>
            {properties.map((property) => (
                    <Property property={property} key={property.name} />
            ))}
        </div>
    );
}

export default Properties;
