import { Typography } from 'antd';
import type { PageProps } from 'tsdocgen';
import Layout from '../Layout';

const { Title, Paragraph } = Typography;

const Page: React.FC<PageProps> = ({ doc, projectName }) => {
    return (
        <Layout projectName={projectName}>
            <Title>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
        </Layout>
    );
}

export default Page;
