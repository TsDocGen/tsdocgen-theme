import React from 'react';
import { Typography } from 'antd';
import type { DocPageComponentProps } from '@tsdocgen/core/types/theme';
import Registry from '../Registry';
import TableOfContents from '../TableOfContents';

const { Title, Paragraph } = Typography;

export const DocPage: React.FC<DocPageComponentProps> = ({ page }) => {
    const Properties = Registry.get('Properties');
    const Methods = Registry.get('Methods');

    const { doc, tableOfContents } = page;

    return (
        <>
            <Title level={2}>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
            <TableOfContents tableOfContents={tableOfContents} />
            {'properties' in doc ? (
                <Properties properties={doc.properties} />
            ) : null}
            {doc.type === 'class' ? (
                <Methods methods={doc.methods} />
            ) : null}
        </>
    );
}

export default DocPage;
