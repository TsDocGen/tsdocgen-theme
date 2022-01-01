import React from "react";
import type { TsDocGenDocPageJSON } from '@tsdocgen/core/models/page/DocPage'
import { Card } from "../Card";
import { Typography } from "antd";

const { Title } = Typography;
type TableOfContentsProps = {
    tableOfContents: TsDocGenDocPageJSON['tableOfContents'];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ tableOfContents }) => {
    return (
        <>
            <Title level={3}>Table of Contents</Title>
            <Card title={() => null} headStyle={{ display: "none" }}>
                <div>
                {'constructor' in tableOfContents && (
                    <>
                    <Title level={4}>Constructors</Title>
                        {tableOfContents.constructor.map((constructor) => (
                            <a href={constructor.url}>{constructor.name}</a>
                        ))}
                    </>
                )}
                </div>
                <div>
                {'property' in tableOfContents && (
                    <>
                    <Title level={4}>Properties</Title>
                        {tableOfContents.property.map((property) => (
                            <div>
                            <a href={property.url}>{property.name}</a>
                            </div>
                        ))}
                    </>
                )}
                </div>
            </Card>
        </>
    );
}

export default TableOfContents;