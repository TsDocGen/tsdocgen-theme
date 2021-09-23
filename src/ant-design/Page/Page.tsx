import { Typography } from 'antd';
import type { PageProps } from 'tsdocgen';

const { Title, Paragraph } = Typography;

const Page: React.FC<PageProps> = ({ doc }) => {
    return (
        <>
            <Title>{doc.name}</Title>
            <Paragraph>
                {doc.jsDoc.description}
            </Paragraph>
        </>
    );
}

export default Page;
