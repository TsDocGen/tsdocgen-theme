import styled from 'styled-components';
import { Card as AntdCard } from 'antd';

export const Card = styled(AntdCard)`
    margin-bottom: 16px;

    & > .ant-card-body {
        padding: 0px;
    }
    
    & .ant-collapse {
        border: 0px;
    }
`;