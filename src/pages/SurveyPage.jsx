import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e2e8f0;
  border-radius: 5px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  width: ${props => props.percent}%;
  transition: width 0.3s ease-in-out;
`;

const QuestionCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const QuestionText = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #1e293b;
  line-height: 1.4;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  background: white;
  font-size: 1.1rem;
  color: #475569;
  transport: transition all 0.2s;
  text-align: left;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: #f0f9ff;
    color: var(--primary-color);
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  padding: 0.5rem 1rem;
  color: #94a3b8;
  background: none;
  font-size: 0.9rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function SurveyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: type_char }
  const navigate = useNavigate();

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionClick = (type) => {
    const newAnswers = { ...answers, [currentQuestion.id]: type };
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex(currentIndex + 1), 200);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    let scores = { T: 0, P: 0, E: 0, C: 0, I: 0, G: 0, S: 0, F: 0 };

    Object.values(finalAnswers).forEach(type => {
      scores[type] = (scores[type] || 0) + 1;
    });

    const typeCode = [
      scores.T >= scores.P ? 'T' : 'P',
      scores.E >= scores.C ? 'E' : 'C',
      scores.I >= scores.G ? 'I' : 'G',
      scores.S >= scores.F ? 'S' : 'F'
    ].join('');

    localStorage.setItem('lastResult', typeCode);
    navigate('/result', { state: { resultType: typeCode, scores } });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <PageContainer>
      <ProgressBarContainer>
        <ProgressFill percent={progress} />
      </ProgressBarContainer>

      <p style={{ textAlign: 'right', marginBottom: '0.5rem', color: '#64748b' }}>
        {currentIndex + 1} / {questions.length}
      </p>

      <QuestionCard>
        <QuestionText>{currentQuestion.question}</QuestionText>
        <OptionsContainer>
          {currentQuestion.options.map((option, idx) => (
            <OptionButton key={idx} onClick={() => handleOptionClick(option.type)}>
              {option.text}
            </OptionButton>
          ))}
        </OptionsContainer>
      </QuestionCard>

      <NavigationButtons>
        <NavButton onClick={handlePrev} disabled={currentIndex === 0}>
          &lt; 이전 문제
        </NavButton>
      </NavigationButtons>
    </PageContainer>
  );
}

export default SurveyPage;
