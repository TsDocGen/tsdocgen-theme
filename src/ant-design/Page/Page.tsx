import { Typography } from 'antd';
import type { PageProps } from 'tsdocgen';
import Properties from '../Properties';

const { Title, Paragraph } = Typography;

const Page: React.FC<PageProps> = ({ doc }) => {
    return (
        <>
            <Title>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
            <Properties properties={doc.properties} />
        </>
    );
}

export default Page;
