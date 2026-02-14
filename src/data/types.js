export const teacherTypes = {
    TEIS: {
        code: "TEIS",
        name: "디지털 마에스트로",
        keywords: ["체계", "AI", "맞춤"],
        features: [
            "체계적인 커리큘럼 + 최신 테크 도구 활용의 달인",
            "개별 학생 맞춤형 디지털 학습 설계",
            "데이터 기반으로 학생 성장 추적"
        ],
        strengths: [
            "AI 기반 개별화 학습 구현",
            "학습 분석 대시보드 활용",
            "체계적인 디지털 포트폴리오 관리"
        ],
        recommendedTools: ["Notion", "ChatGPT", "클래스카드", "Quizlet", "Google Forms", "Loom"]
    },
    TEIF: {
        code: "TEIF",
        name: "실험적 교육자",
        keywords: ["혁신", "개별", "유연"],
        features: [
            "새로운 테크 도구로 강의를 혁신",
            "개별 학생에게 즉각적 피드백",
            "유연한 진도 조정"
        ],
        strengths: [
            "트렌디한 AI 도구 빠른 적용",
            "1:1 디지털 코칭",
            "상황에 맞는 도구 선택"
        ],
        recommendedTools: ["Obsidian", "Claude", "Suno AI", "DALL-E 3 (OpenAI)", "Perplexity", "Nearpod"]
    },
    TEGS: {
        code: "TEGS",
        name: "스마트 클래스 매니저",
        keywords: ["협업테크", "체계", "데이터"],
        features: [
            "최신 협업 도구로 모둠 학습 운영",
            "체계적인 학급 데이터 관리",
            "기술 기반 협력 학습 설계"
        ],
        strengths: [
            "디지털 협업 플랫폼 활용",
            "그룹 프로젝트 온라인 관리",
            "학급 전체 학습 분석"
        ],
        recommendedTools: ["Google Workspace", "Gemini", "Kahoot", "Slack", "Miro", "Padlet"]
    },
    TEGF: {
        code: "TEGF",
        name: "트렌디 티처",
        keywords: ["최신트렌드", "자유", "협업"],
        features: [
            "최신 테크 트렌드를 수업에 바로 적용",
            "모둠 활동 중심, 유연한 운영",
            "학생들과 함께 새로운 도구 탐험"
        ],
        strengths: [
            "바이럴 에듀테크 빠른 도입",
            "학생 주도 디지털 협업",
            "즉흥적 활동 설계"
        ],
        recommendedTools: ["Notion", "Canva", "ChatGPT", "Gamma", "ZEP 퀴즈", "Discord"]
    },
    TCIS: {
        code: "TCIS",
        name: "정밀 교육 설계자",
        keywords: ["검증", "개인", "체계"],
        features: [
            "검증된 도구로 완벽한 학습 설계",
            "개별 학생 세밀한 관찰과 기록",
            "안정적이고 체계적인 시스템"
        ],
        strengths: [
            "신뢰할 수 있는 평가 시스템",
            "장기적 학생 성장 기록",
            "정확한 개별 피드백"
        ],
        recommendedTools: ["Notion", "ChatGPT", "Google Forms", "Quizizz", "OneNote", "Evernote"]
    },
    TCIF: {
        code: "TCIF",
        name: "차분한 멘토",
        keywords: ["안정", "개별", "유연"],
        features: [
            "검증된 도구로 안정적 운영",
            "학생 개별 관심사 존중",
            "필요에 따라 유연하게 대응"
        ],
        strengths: [
            "신뢰 기반 1:1 관계",
            "꾸준한 개별 관찰",
            "안정적 학습 환경"
        ],
        recommendedTools: ["Google Docs", "ChatGPT", "Google Forms", "Wakelet", "심스페이스 마음일기", "클래스팅"]
    },
    TCGS: {
        code: "TCGS",
        name: "클래식 오거나이저",
        keywords: ["전통", "협업", "체계"],
        features: [
            "검증된 방식으로 체계적 학급 운영",
            "모둠별 명확한 역할과 규칙",
            "안정적인 협업 시스템"
        ],
        strengths: [
            "전통적 협동학습 + 디지털",
            "명확한 평가 기준",
            "체계적 그룹 관리"
        ],
        recommendedTools: ["Google Workspace", "Google Forms", "Canva", "Padlet", "네이버 밴드", "리로스쿨"]
    },
    TCGF: {
        code: "TCGF",
        name: "온화한 가이드",
        keywords: ["편안", "협업", "자율"],
        features: [
            "익숙한 도구로 편안한 학습 분위기",
            "학생들의 자율적 협업 존중",
            "유연하고 여유로운 진행"
        ],
        strengths: [
            "학생 자율성 보장",
            "부담 없는 협업 환경",
            "자연스러운 학습 흐름"
        ],
        recommendedTools: ["Google Docs", "Canva", "Padlet", "위두랑", "ClassDojo", "멘티미터 (Mentimeter)"]
    },
    PEIS: {
        code: "PEIS",
        name: "혁신 아키텍트",
        keywords: ["AI", "프로젝트", "맞춤"],
        features: [
            "최신 AI로 학생 주도 프로젝트 설계",
            "개별 학습 여정 디지털 기록",
            "데이터 기반 맞춤형 프로젝트"
        ],
        strengths: [
            "AI 활용 개인별 탐구 지원",
            "창의적 산출물 제작",
            "체계적 프로젝트 관리"
        ],
        recommendedTools: ["Notion", "ChatGPT", "Canva", "NotebookLM", "Replit", "Google Apps Script"]
    },
    PEIF: {
        code: "PEIF",
        name: "창의적 실험가",
        keywords: ["창작", "실험", "자유"],
        features: [
            "새로운 도구로 학생 창작 활동 지원",
            "개별 관심사 기반 자유 탐구",
            "예측 불가능한 창의적 수업"
        ],
        strengths: [
            "최신 AI 창작 도구 활용",
            "학생별 독특한 결과물",
            "즉흥적 영감 포착"
        ],
        recommendedTools: ["Obsidian", "Claude", "Suno AI", "Midjourney", "자작자작", "Antigravity"]
    },
    PEGS: {
        code: "PEGS",
        name: "협업 이노베이터",
        keywords: ["팀프로젝트", "테크", "협업"],
        features: [
            "최신 협업 도구로 그룹 프로젝트 설계",
            "체계적인 팀 프로젝트 관리",
            "디지털 기반 협력 학습"
        ],
        strengths: [
            "온라인 협업 플랫폼 마스터",
            "그룹별 역할과 일정 관리",
            "집단 창의성 발현"
        ],
        recommendedTools: ["Notion", "ChatGPT", "Canva", "Miro", "Slack", "Gamma"]
    },
    PEGF: {
        code: "PEGF",
        name: "자유로운 크리에이터",
        keywords: ["즉흥", "협업", "창작"],
        features: [
            "트렌디한 도구로 즉흥적 프로젝트",
            "학생들의 자유로운 협업 격려",
            "과정 중심의 유연한 진행"
        ],
        strengths: [
            "제약 없는 창의적 환경",
            "학생 주도성 최대화",
            "즉각적 아이디어 실현"
        ],
        recommendedTools: ["다했니?", "Canva", "ChatGPT", "Prezi", "Blooket", "YouTube"]
    },
    PCIS: {
        code: "PCIS",
        name: "세심한 프로젝트 매니저",
        keywords: ["탐구", "관리", "체계"],
        features: [
            "검증된 도구로 안정적 탐구 활동",
            "개별 학생 프로젝트 세밀 관리",
            "단계별 체크포인트 설정"
        ],
        strengths: [
            "학생별 진도 추적",
            "안정적 프로젝트 진행",
            "명확한 평가 루브릭"
        ],
        recommendedTools: ["Google Docs", "ChatGPT", "Google Forms", "Notion", "Evernote", "Google Sheets"]
    },
    PCIF: {
        code: "PCIF",
        name: "자유로운 탐구자",
        keywords: ["관심사", "여유", "자율"],
        features: [
            "익숙한 도구로 편안한 탐구 환경",
            "학생 개별 관심사 최대 존중",
            "여유로운 프로젝트 진행"
        ],
        strengths: [
            "학생 내적 동기 중시",
            "부담 없는 탐구 과정",
            "개별 속도 존중"
        ],
        recommendedTools: ["Google Docs", "Canva", "ChatGPT", "Wakelet", "Pinterest", "YouTube"]
    },
    PCGS: {
        code: "PCGS",
        name: "안정적 팀 빌더",
        keywords: ["전통", "모둠", "체계"],
        features: [
            "검증된 방식으로 모둠 프로젝트 운영",
            "명확한 역할 분담과 일정 관리",
            "전통적 협동학습 구조"
        ],
        strengths: [
            "체계적 그룹 프로세스",
            "공정한 모둠 평가",
            "안정적 협업 환경"
        ],
        recommendedTools: ["Google Workspace", "Google Forms", "Canva", "Padlet", "Zoom", "Google Slides"]
    },
    PCGF: {
        code: "PCGF",
        name: "여유로운 조력자",
        keywords: ["편안", "자율", "과정"],
        features: [
            "익숙한 도구로 자율적 협업 지원",
            "학생들의 자연스러운 상호작용",
            "과정 자체를 즐기는 학습"
        ],
        strengths: [
            "학생 자율성 극대화",
            "편안한 협업 분위기",
            "자연스러운 배움 촉진"
        ],
        recommendedTools: ["다했니?", "Canva", "Padlet", "Google Slides", "ClassDojo", "Blooket"]
    }
};

export const typeCodeDescriptions = {
    T: {
        title: "Teaching (강의형)",
        desc: "지식을 체계적으로 전달하는 것을 선호합니다.",
        opposing: "P"
    },
    P: {
        title: "Project (프로젝트형)",
        desc: "학생 주도의 탐구와 프로젝트 활동을 선호합니다.",
        opposing: "T"
    },
    E: {
        title: "Early Adopter (얼리어답터형)",
        desc: "최신 기술과 새로운 도구 도입에 적극적입니다.",
        opposing: "C"
    },
    C: {
        title: "Careful (신중형)",
        desc: "검증되고 안정적인 도구 사용을 선호합니다.",
        opposing: "E"
    },
    I: {
        title: "Individual (개별화형)",
        desc: "학생 개개인의 특성에 맞춘 지도를 중요시합니다.",
        opposing: "G"
    },
    G: {
        title: "Group (협업형)",
        desc: "학생들 간의 상호작용과 협력 학습을 중시합니다.",
        opposing: "I"
    },
    S: {
        title: "Systematic (체계적)",
        desc: "미리 계획된 구조와 체계적인 관리를 선호합니다.",
        opposing: "F"
    },
    F: {
        title: "Flexible (유연)",
        desc: "상황에 따른 유연한 대처와 즉흥성을 즐깁니다.",
        opposing: "S"
    }
};
