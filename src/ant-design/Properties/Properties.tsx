import { Typography } from "antd";
import React from "react";
import type { PropertiesComponentProps } from 'tsdocgen';
import Property from "../Property";

const { Title } = Typography;

const Properties: React.FC<PropertiesComponentProps> = ({ properties }) => {
    return (
        <div>
            <Title>Properties</Title>
            {properties.map((property) => (
                    <Property property={property} />
            ))}
        </div>
    );
}

export default Properties;
