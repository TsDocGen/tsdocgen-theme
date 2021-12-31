import React from 'react';
import { Typography } from 'antd';
import type { PageProps } from '@tsdocgen/core/types/theme';
import Registry from '../Registry';

const { Title, Paragraph } = Typography;

export const Page: React.FC<PageProps> = ({ doc }) => {
    const Properties = Registry.get('Properties');
    const Methods = Registry.get('Methods');

    return (
        <>
            <Title level={2}>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
            {'properties' in doc ? (
                <Properties properties={doc.properties} />
            ) : null}
            {doc.type === 'class' ? (
                <Methods methods={doc.methods} />
            ) : null}
        </>
    );
}

export default Page;
