import { Typography } from 'antd';
import type { PageProps } from '@tsdocgen/core/types/theme';
import Properties from '../Properties';
import Methods from '../Methods';

const { Title, Paragraph } = Typography;

export const Page: React.FC<PageProps> = ({ doc }) => {
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
