import { Typography } from 'antd';
import type { PageProps } from '@tsdocgen/core';
import Properties from '../Properties';
import Methods from '../Methods';

const { Title, Paragraph } = Typography;

const Page: React.FC<PageProps> = ({ doc }) => {
    return (
        <>
            <Title>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
            <Properties properties={doc.properties} />
            {doc.type === 'class' ? (
                <Methods methods={[...doc.instanceMethods, ...doc.staticMethods]} />
            ) : null}
        </>
    );
}

export default Page;
