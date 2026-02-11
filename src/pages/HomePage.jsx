import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #475569;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;
`;

const StartButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.25rem;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2), 0 2px 4px -1px rgba(79, 70, 229, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 1000px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  text-align: left;

  h3 {
    font-size: 1.25rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }
`;

function HomePage() {
    return (
        <HomeContainer>
            <Title>
                나만의 <span>교육 스타일</span>을<br />찾아보세요
            </Title>
            <Subtitle>
                간단한 설문을 통해 16가지 교사 유형 중 나에게 맞는 유형을 진단하고,
                수업과 업무 효율을 높여줄 최적의 디지털 도구를 추천해 드립니다.
            </Subtitle>
            <StartButton to="/survey">지금 진단하기</StartButton>

            <FeatureGrid>
                <FeatureCard>
                    <h3>🔍 정밀한 진단</h3>
                    <p>수업 스타일, 테크 친화도, 상호작용, 업무 관리 4가지 축으로 분석합니다.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>🤖 맞춤형 도구 추천</h3>
                    <p>내 성향에 딱 맞는 AI 도구와 활용법을 제안합니다.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>🚀 실전 적용 가이드</h3>
                    <p>바로 교실에서 사용할 수 있는 실질적인 팁을 제공합니다.</p>
                </FeatureCard>
            </FeatureGrid>
        </HomeContainer>
    );
}

export default HomePage;
