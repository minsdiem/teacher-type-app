import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  
  @media (min-width: 768px) {
    padding: 5rem 2rem 3rem;
  }
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.9);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  display: inline-block;
  backdrop-filter: blur(4px);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;
  word-break: keep-all;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  color: #475569;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  word-break: keep-all;

  p {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const MainContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2rem;
    align-items: start;
    padding: 3rem 2rem;
  }
`;

const SectionBox = styled.section`
  background: ${props => props.bg || 'transparent'};
  border-radius: 1.5rem;
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
    padding: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #334155;
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;
  letter-spacing: -0.5px;
  
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: var(--primary-color);
    margin: 0.5rem auto 0;
    border-radius: 2px;
    opacity: 0.7;
    
    @media (min-width: 1024px) {
      margin: 0.5rem 0 0;
    }
  }
`;

const PreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TypeCard = styled.div`
  background: white;
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  border: 1px solid #f1f5f9;
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
  }
  
  h4 {
    color: var(--primary-color);
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: #64748b;
    font-weight: 600;
    margin: 0;
    font-size: 0.9rem;
  }
`;

const MoreTypes = styled.div`
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 1rem;
  font-weight: 500;
  text-align: center;
`;

const AxesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const AxisItem = styled.div`
  background: white;
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  border: 1px solid #f8fafc;
  
  strong {
    color: var(--primary-color);
    font-weight: 800;
    margin-right: 1rem;
    min-width: 60px;
  }
  
  div.info {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
    
    span.title {
      font-weight: 700;
      color: #334155;
      margin-bottom: 0.1rem;
    }
    
    span.desc {
      font-size: 0.8rem;
      color: #94a3b8;
    }
  }
`;

const SummarySection = styled.div`
  background: #f8fafc;
  padding: 3rem 1.5rem;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
`;

const SummaryBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  max-width: 400px;
  margin: 0 auto 2rem;
  text-align: left;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
`;

const CheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.8rem;
    color: #475569;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &:before {
      content: '✓';
      color: var(--primary-color);
      font-weight: 900;
      margin-right: 0.8rem;
      font-size: 1.1rem;
    }
  }
`;

const StartButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 800;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.5);
  }
`;

const AxisRow = ({ code, title, desc }) => (
  <AxisItem>
    <strong>{code}</strong>
    <div className="info">
      <span className="title">{title}</span>
      <span className="desc">{desc}</span>
    </div>
  </AxisItem>
);

function HomePage() {
  return (
    <Container>
      <HeroSection>
        <Badge>🎯 티처타입</Badge>
        <Title>나만의 교육 스타일을<br />찾아보세요</Title>
        <Description>
          <p>
            간단한 16문항으로 당신의 TPEC 코드를 발견하고,<br />
            16가지 티처타입 중 나에게 딱 맞는 유형을 진단받으세요.
          </p>
          <p>
            수업과 업무 효율을 높여줄<br />
            최적의 AI 디지털 도구를 추천해 드립니다.
          </p>
        </Description>
        <StartButton to="/survey">🚀 3분 만에 진단하기</StartButton>
      </HeroSection>

      <MainContent>
        <SectionBox>
          <SectionTitle>[ 16가지 티처타입 미리보기 ]</SectionTitle>
          <PreviewGrid>
            <TypeCard>
              <h4>💼 TEIS</h4>
              <p>디지털 마에스트로</p>
            </TypeCard>
            <TypeCard>
              <h4>🎨 PEIF</h4>
              <p>창의적 실험가</p>
            </TypeCard>
            <TypeCard>
              <h4>📚 TCGS</h4>
              <p>클래식 오거나이저</p>
            </TypeCard>
          </PreviewGrid>
          <MoreTypes>... (더 많은 유형이 기다리고 있어요)</MoreTypes>
        </SectionBox>

        <SectionBox>
          <SectionTitle>[ 4가지 축 분석 ]</SectionTitle>
          <AxesList>
            <AxisRow code="T vs P" title="수업 스타일" desc="강의형 ↔ 프로젝트형" />
            <AxisRow code="E vs C" title="테크 친화도" desc="얼리어답터형 ↔ 신중형" />
            <AxisRow code="I vs G" title="상호작용" desc="개별화형 ↔ 협업형" />
            <AxisRow code="S vs F" title="업무 관리" desc="체계적 ↔ 유연" />
          </AxesList>
        </SectionBox>
      </MainContent>

      <SummarySection>
        <SummaryBox>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 'bold', color: '#334155' }}>[ 진단 요약 ]</h3>
          <CheckList>
            <li>소요시간 3-5분</li>
            <li>총 16문항</li>
            <li>즉시 결과 확인</li>
            <li>맞춤 도구 추천</li>
          </CheckList>
        </SummaryBox>
      </SummarySection>
    </Container>
  );
}

export default HomePage;
