import React, { useState } from 'react';
import styled from 'styled-components';
import { tools } from '../data/tools';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  min-width: 200px;
  
  &:focus {
    outline: 2px solid var(--primary-color);
    border-color: transparent;
  }
`;

const Select = styled.select`
  padding: 0.8rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
`;

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ToolCard = styled.a`
  display: block;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-color);
  }
`;

const ToolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  
  h3 {
    font-size: 1.2rem;
    color: #1e293b;
  }
  
  span.badge {
    font-size: 0.75rem;
    background: #eff6ff;
    color: var(--primary-color);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    white-space: nowrap;
  }
`;

const ToolDesc = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const ToolMeta = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: #94a3b8;
  
  span {
    background: #f8fafc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
  }
`;

function ToolLibraryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('All');
    const [difficulty, setDifficulty] = useState('All');

    const categories = ['All', ...new Set(tools.map(t => t.category))];
    const difficulties = ['All', 'Low', 'Mid', 'High'];

    const filteredTools = tools.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = category === 'All' || tool.category === category;
        const matchesDifficulty = difficulty === 'All' || tool.difficulty === difficulty;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    return (
        <PageContainer>
            <h1 style={{ marginBottom: '2rem', color: '#1e293b' }}>AI 디지털 도구 전체 보기 ({filteredTools.length})</h1>

            <FilterSection>
                <SearchInput
                    placeholder="도구 이름이나 기능 검색..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map(c => <option key={c} value={c}>{c === 'All' ? '모든 카테고리' : c}</option>)}
                </Select>
                <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    {difficulties.map(d => <option key={d} value={d}>{d === 'All' ? '모든 난이도' : d}</option>)}
                </Select>
            </FilterSection>

            <ToolGrid>
                {filteredTools.map(tool => (
                    <ToolCard key={tool.id} href={tool.url} target="_blank" rel="noopener noreferrer">
                        <ToolHeader>
                            <h3>{tool.name}</h3>
                            <span className="badge">{tool.category}</span>
                        </ToolHeader>
                        <ToolDesc>{tool.description}</ToolDesc>
                        <ToolMeta>
                            <span>{tool.pricing}</span>
                            <span>난이도: {tool.difficulty}</span>
                        </ToolMeta>
                    </ToolCard>
                ))}
            </ToolGrid>
        </PageContainer>
    );
}

export default ToolLibraryPage;
