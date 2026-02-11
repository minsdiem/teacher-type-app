import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { teacherTypes, typeCodeDescriptions } from '../data/types';
import { tools } from '../data/tools';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 6rem;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const TypeTitle = styled.h1`
  font-size: 2rem;
  color: #1e293b; /* Dark slate 800 - High contrast */
  margin-bottom: 0.5rem;
  font-weight: 800;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TypeCode = styled.div`
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px; /* Pill shape */
  font-weight: 800;
  margin-bottom: 1rem;
  font-size: 1.5rem; /* Larger for emphasis */
  letter-spacing: 2px;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
`;

const Keywords = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const KeywordBadge = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const CodeExplanationSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const CodeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CodeCard = styled.div`
  background: #F8FAFC;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  
  h4 {
    color: var(--primary-color);
    margin-bottom: 0.25rem;
    font-weight: 700;
    font-size: 1.1rem;
  }
  
  p {
    font-size: 0.95rem;
    color: #334155; /* Darker slate for better contrast */
    line-height: 1.5;
    font-weight: 500;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  height: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 0.5rem;
  }

  ul {
    list-style-position: inside;
    color: #475569;
    line-height: 1.6;
    padding-left: 0.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const RecommendationSection = styled.div`
  margin-top: 4rem;
`;

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ToolCard = styled.a`
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  text-decoration: none;
  color: inherit;
  height: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }

  h4 {
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span.category {
    font-size: 0.75rem;
    background: #eff6ff;
    color: var(--primary-color);
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: auto;
    line-height: 1.5;
    padding-bottom: 1rem;
  }

  div.meta {
    font-size: 0.8rem;
    color: #94a3b8;
    display: flex;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding-top: 0.5rem;
    border-top: 1px solid #f1f5f9;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &.primary {
    background: var(--primary-color);
    color: white;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
  }
  
  &.secondary {
    background: white;
    border: 1px solid #e2e8f0;
    color: #475569;
  }
`;

const OpposingInfo = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #e2e8f0;
  font-size: 0.85rem;
  color: #94a3b8;
  
  strong {
    display: block;
    margin-bottom: 0.2rem;
    color: #64748b;
  }
`;

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [resultType, setResultType] = useState(null);

  // Initial Load & Persistence Logic
  useEffect(() => {
    const queryType = searchParams.get('type');

    if (queryType && teacherTypes[queryType]) {
      setResultType(queryType);
      localStorage.setItem('lastResult', queryType);
    } else if (location.state?.resultType) {
      setResultType(location.state.resultType);
      localStorage.setItem('lastResult', location.state.resultType);
    } else {
      const savedResult = localStorage.getItem('lastResult');
      if (savedResult) {
        setResultType(savedResult);
      } else {
        navigate('/');
      }
    }
  }, [location, navigate, searchParams]);

  if (!resultType) return null;

  const typeData = teacherTypes[resultType];

  // Safety check if typeData exists
  if (!typeData) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>데이터를 불러올 수 없습니다.</div>;
  }

  // Find tool objects for the recommended tools
  const recommendedTools = typeData.recommendedTools.map(name => {
    return tools.find(t => t.name === name) || { name, description: '정보 없음', url: '#', category: '기타' };
  });

  const renderCodeExplanation = () => {
    if (!typeCodeDescriptions) return null;

    return resultType.split('').map((char, index) => {
      const info = typeCodeDescriptions[char];
      const opposingChar = info?.opposing;
      const opposingInfo = typeCodeDescriptions[opposingChar];

      return (
        <CodeCard key={index}>
          <h4>{char} - {info?.title}</h4>
          <p>{info?.desc}</p>
          {opposingInfo && (
            <OpposingInfo>
              <strong>↔ {opposingChar} ({opposingInfo.title.split('(')[1].replace(')', '')})</strong>
              {opposingInfo.desc}
            </OpposingInfo>
          )}
        </CodeCard>
      );
    });
  };

  const handleShare = () => {
    const url = `${window.location.origin}/result?type=${resultType}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('결과 링크가 복사되었습니다! 원하시는 곳에 붙여넣기 하세요.');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <PageContainer>
      <HeaderSection>
        <div style={{ marginBottom: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>나의 에듀테크 유형은?</div>
        <TypeCode>{typeData.code}</TypeCode>
        <TypeTitle>{typeData.name}</TypeTitle>
        <Keywords>
          {typeData.keywords.map(k => <KeywordBadge key={k}>#{k}</KeywordBadge>)}
        </Keywords>
      </HeaderSection>

      <CodeExplanationSection>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>🔍 유형 코드 분석</h3>
        <CodeGrid>
          {renderCodeExplanation()}
        </CodeGrid>
      </CodeExplanationSection>

      <ContentGrid>
        <Card>
          <h3>📋 유형 특징</h3>
          <ul>
            {typeData.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </Card>
        <Card>
          <h3>💪 강점 & 전략</h3>
          <ul>
            {typeData.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </Card>
      </ContentGrid>

      {/* Placeholder Image area */}
      <div style={{ textAlign: 'center', margin: '2rem 0', padding: '3rem 1rem', background: '#f8fafc', borderRadius: '1rem', border: '2px dashed #e2e8f0' }}>
        <p style={{ color: '#94a3b8' }}>* 캐릭터 이미지는 준비 중입니다 *</p>
      </div>

      <RecommendationSection>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
          ✨ {typeData.name}님을 위한 추천 도구
        </h2>
        <ToolGrid>
          {recommendedTools.map((tool, idx) => (
            <ToolCard key={idx} href={tool.url} target="_blank" rel="noopener noreferrer">
              <h4>
                {tool.name}
                <span className="category">{tool.category}</span>
              </h4>
              <p>{tool.description}</p>
              <div className="meta">
                <span>{tool.pricing || '무료'}</span>
                <span>•</span>
                <span>난이도: {tool.difficulty || '상'}</span>
              </div>
            </ToolCard>
          ))}
        </ToolGrid>
      </RecommendationSection>

      <ActionButtons>
        <Button as="button" onClick={handleShare} className="secondary" style={{ cursor: 'pointer' }}>🔗 결과 공유하기</Button>
        <Button to="/survey" className="secondary">다시 진단하기</Button>
        <Button to="/tools" className="primary">전체 도구 보기</Button>
      </ActionButtons>
    </PageContainer>
  );
}

export default ResultPage;
