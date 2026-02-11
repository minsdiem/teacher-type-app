import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #f1f5f9;
  text-align: center;
  color: #64748b;
  margin-top: auto;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
`;

function Footer() {
    return (
        <FooterContainer>
            <Copyright>&copy; {new Date().getFullYear()} 교사 유형 진단 & 도구 추천 서비스. All rights reserved.</Copyright>
        </FooterContainer>
    );
}

export default Footer;
