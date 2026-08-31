import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Terminal, ChevronRight, CheckCircle2, 
  ArrowRight, Loader2, BookOpen, Code2, Award, RefreshCw, XCircle, ArrowLeft, Layers, Compass
} from 'lucide-react';

const CURRICULUM = [
  {
    id: 'mod-1',
    title: 'Module 01: Hello World & Syntax',
    description: 'เรียนรู้โครงสร้างพื้นฐานและการแสดงผลข้อความออกทางหน้าจอ',
    detailLesson: {
      concept: 'โครงสร้างพื้นฐานของภาษา C และฟังก์ชัน printf()',
      explanation: 'ภาษา C เป็นภาษาโปรแกรมมิ่งแบบโครงสร้าง ทุกโปรแกรมจะต้องมีฟังก์ชันหลักชื่อ main() ซึ่งเป็นจุดเริ่มต้นที่คอมพิวเตอร์จะเข้ามาทำงาน\n\n- #include <stdio.h>: เป็นการใช้งานไลบรารีมาตรฐานสำหรับการรับและแสดงผลข้อมูล (Standard Input Output)\n- printf("..."): คำสั่งสำหรับพิมพ์ข้อความหรือค่าตัวแปรออกทางหน้าจอเทอร์มินัล\n- return 0;: เป็นการบอกระบบปฏิบัติการว่าโปรแกรมทำงานเสร็จสิ้นสมบูรณ์ไม่มีข้อผิดพลาด',
      example: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}'
    },
    targetCode: '#include <stdio.h>\n\nint main() {\n    printf("Hello World");\n    return 0;\n}',
    initialCode: '// เขียนคำสั่ง printf เพื่อแสดงคำว่า Hello World\n\n',
    task: 'เขียนโปรแกรม C เพื่อพิมพ์ข้อความ "Hello World" ออกทางหน้าจอ',
    hint: 'ใช้คำสั่ง printf("Hello World"); ภายในฟังก์ชัน main()',
    type: 'coding'
  },
  {
    id: 'mod-2',
    title: 'Module 02: Variables & Data Types',
    description: 'ทำความรู้จักกับตัวแปรชนิดต่างๆ เช่น int, float, char',
    detailLesson: {
      concept: 'การประกาศตัวแปรและการแสดงผลข้อมูลด้วย Format Specifiers',
      explanation: 'ตัวแปร (Variables) เปรียบเสมือนกล่องเก็บข้อมูลในหน่วยความจำ ในภาษา C เราต้องระบุชนิดข้อมูล (Data Type) ก่อนสร้างตัวแปรเสมอ\n\n- int: เก็บตัวเลขจำนวนเต็ม (เช่น 10, -5, 20)\n- float / double: เก็บตัวเลขทศนิยม (เช่น 3.14, 9.81)\n- char: เก็บตัวอักษรเดี่ยวๆ (เช่น \'A\', \'z\')\n\nเมื่อต้องการแสดงผลตัวแปรผ่าน printf เราต้องใช้ Format Specifier ให้ตรงกับชนิดข้อมูล:\n- %d สำหรับ int\n- %f สำหรับ float\n- %c สำหรับ char',
      example: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    float height = 175.5;\n    printf("Age: %d, Height: %.1f", age, height);\n    return 0;\n}'
    },
    targetCode: '#include <stdio.h>\n\nint main() {\n    int age = 20;\n    printf("Age: %d", age);\n    return 0;\n}',
    initialCode: '// สร้างตัวแปร int ชื่อ age มีค่าเท่ากับ 20\n\n',
    task: 'สร้างตัวแปร int เก็บค่า 20 และแสดงผลด้วย %d',
    hint: 'ประกาศตัวแปร int age = 20; แล้วใช้ printf("Age: %d", age);',
    type: 'coding'
  },
  {
    id: 'mod-3',
    title: 'Module 03: Control Flow (Conditions)',
    description: 'การควบคุมทิศทางโปรแกรมด้วยเงื่อนไข if-else',
    detailLesson: {
      concept: 'การตัดสินใจของโปรแกรมด้วยคำสั่งเงื่อนไข (Conditional Statements)',
      explanation: 'ในสถานการณ์จริง โปรแกรมต้องมีการตัดสินใจเลือกเส้นทางทำงาน คำสั่ง if-else ช่วยให้คอมพิวเตอร์เลือกกระทำชุดคำสั่งตามเงื่อนไขที่เป็นจริง (True) หรือเป็นเท็จ (False)\n\n- เปรียบเทียบด้วยเครื่องหมาย: == (เท่ากับ), != (ไม่เท่ากับ), >, <, >=, <=\n- โครงสร้าง:\nif (เงื่อนไข) {\n    // ทำงานเมื่อเงื่อนไขเป็นจริง\n} else {\n    // ทำงานเมื่อเงื่อนไขเป็นเท็จ\n}',
      example: '#include <stdio.h>\n\nint main() {\n    int score = 75;\n    if (score >= 50) {\n        printf("Passed");\n    } else {\n        printf("Failed");\n    }\n    return 0;\n}'
    },
    targetCode: '#include <stdio.h>\n\nint main() {\n    int score = 80;\n    if (score >= 50) {\n        printf("Pass");\n    }\n    return 0;\n}',
    initialCode: '// เขียนเงื่อนไขตรวจสอบว่า score มากกว่าหรือเท่ากับ 50 หรือไม่\n\n',
    task: 'สร้างตัวแปร score = 80 และเขียนเงื่อนไขพิมพ์ "Pass" หากถึงเกณฑ์',
    hint: 'ใช้ if (score >= 50) { printf("Pass"); }',
    type: 'coding'
  },
  {
    id: 'mod-4',
    title: 'Module 04: Quiz - บททดสอบความเข้าใจ & โค้ดปฏิบัติ',
    description: 'ทดสอบความรู้ทั้งแบบปรนัย (สุ่มข้อสอบ) และโจทย์เขียนโค้ดภาษา C จริง',
    detailLesson: {
      concept: 'สรุปทบทวนความรู้ภาพรวมภาษา C และการประยุกต์เขียนโปรแกรม',
      explanation: 'ในส่วนนี้จะเป็นการทดสอบความเข้าใจทั้งภาคทฤษฎีและภาคปฏิบัติ เมื่อเริ่มทำแบบทดสอบแล้วจะไม่สามารถเปลี่ยนบทเรียน ออกนอกหน้าต่าง หรือดูคู่มือได้จนกว่าจะส่งคำตอบ!',
      example: '#include <stdio.h>\n\nint main() {\n    return 0;\n}'
    },
    type: 'quiz',
    // Expanded Question Pool for Randomization
    questionPool: [
      {
        question: 'ข้อใดคือจุดเริ่มต้น (Entry Point) หลักของโปรแกรมภาษา C ทุกโปรแกรม?',
        options: ['start()', 'main()', 'begin()', 'init()'],
        correct: 1,
        explanation: 'โปรแกรม C ทุกโปรแกรมต้องมีฟังก์ชัน main() เป็นจุดเริ่มต้นในการทำงานเสมอ'
      },
      {
        question: 'Format Specifier ใดที่ใช้สำหรับแสดงผลข้อมูลประเภทตัวเลขจำนวนเต็ม (Integer)?',
        options: ['%f', '%c', '%d', '%s'],
        correct: 2,
        explanation: '%d ใช้สำหรับ int, %f สำหรับ float, และ %s สำหรับ string'
      },
      {
        question: 'ไลบรารีใดที่จำเป็นต้อง include หากต้องการใช้งานคำสั่ง printf() และ scanf()?',
        options: ['<stdlib.h>', '<math.h>', '<stdio.h>', '<string.h>'],
        correct: 2,
        explanation: '<stdio.h> ย่อมาจาก Standard Input Output Library ซึ่งรวมคำสั่งแสดงผลและรับค่า'
      },
      {
        question: 'สัญลักษณ์ใดใช้สำหรับใส่ข้อความคอมเมนต์แบบบรรทัดเดียว (Single-line Comment) ในภาษา C?',
        options: ['//', '/* ... */', '#', '<!-- ... -->'],
        correct: 0,
        explanation: '// ใช้สำหรับคอมเมนต์บรรทัดเดียว ส่วน /* ... */ ใช้สำหรับคอมเมนต์หลายบรรทัด'
      },
      {
        question: 'ชนิดข้อมูล (Data Type) ข้อใดเหมาะสมที่สุดสำหรับการเก็บค่าเกรดที่เป็นตัวอักษรเดี่ยว เช่น \'A\', \'B\'?',
        options: ['int', 'float', 'char', 'double'],
        correct: 2,
        explanation: 'char ใช้สำหรับเก็บข้อมูลตัวอักษรเดี่ยวขนาด 1 ไบต์'
      }
    ],
    codingTask: {
      title: 'Coding Challenge: พิมพ์ข้อความต้อนรับ',
      task: 'เขียนโปรแกรม C เพื่อพิมพ์ข้อความ "Welcome to Titan C" ออกทางหน้าจอ',
      initialCode: '#include <stdio.h>\n\nint main() {\n    // เขียนโค้ดที่นี่\n    \n    return 0;\n}'
    }
  }
];

const TUTORIAL_STEPS = [
  {
    id: 'intro',
    message: '👋 ยินดีต้อนรับสู่ Titan C Academy! แพลตฟอร์มฝึกเขียนโค้ดภาษา C แบบมินิมอล พร้อมลุยหรือยัง?',
    actionLabel: 'เริ่มบทเรียนแรก',
    position: 'center'
  },
  {
    id: 'guide-page',
    message: '📖 หน้านี้คือ "Lesson Guide" สำหรับศึกษาทฤษฎีและตัวอย่างโค้ดก่อนลงมือปฏิบัติ แยกจากหน้าเขียนโค้ดอย่างชัดเจน',
    actionLabel: 'ไปที่หน้าเขียนโค้ด',
    position: 'center'
  },
  {
    id: 'editor',
    message: '💻 ตรงนี้คือ Code Editor ระบบกำลังจะช่วยพิมพ์โครงสร้างให้ดูเป็นตัวอย่าง...',
    actionLabel: 'ให้ AI พิมพ์ตัวอย่าง (Ghost Type)',
    position: 'editor'
  },
  {
    id: 'typing',
    message: '⏳ ระบบกำลังเขียนโค้ดให้คุณ สังเกตโครงสร้าง #include และ printf() ดีๆ นะ...',
    actionLabel: '', 
    position: 'typing'
  },
  {
    id: 'run',
    message: '🚀 เยี่ยมมาก! โค้ดพร้อมแล้ว คลิกที่ปุ่ม "Run Code" เพื่อคอมไพล์และผ่านด่านนี้กันเลย!',
    actionLabel: '', 
    position: 'run-button'
  },
  {
    id: 'success',
    message: '🎉 ยอดเยี่ยม! คุณรันโปรแกรมสำเร็จและได้รับ XP เป็นการปูพื้นฐานที่สมบูรณ์แบบ!',
    actionLabel: 'เริ่มเรียนรู้ต่อ',
    position: 'center'
  }
];

export default function App() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(() => {
    const saved = localStorage.getItem('titan_c_current_mod');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem('titan_c_xp');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [level, setLevel] = useState(() => {
    const saved = localStorage.getItem('titan_c_level');
    return saved !== null ? parseInt(saved, 10) : 1;
  });

  const [completedModules, setCompletedModules] = useState(() => {
    const saved = localStorage.getItem('titan_c_completed');
    return saved !== null ? JSON.parse(saved) : [];
  });
  
  const [activeView, setActiveView] = useState('guide');
  
  const currentModule = CURRICULUM[currentModuleIndex];

  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    if (currentModule.type === 'quiz') {
      setActiveView('workspace');
      // Randomize 3 questions from the pool whenever entering Module 4
      const pool = [...currentModule.questionPool];
      const shuffled = pool.sort(() => 0.5 - Math.random());
      setQuizQuestions(shuffled.slice(0, 3));
    }
  }, [currentModuleIndex]);

  const [savedCodes, setSavedCodes] = useState(() => {
    const saved = localStorage.getItem('titan_c_saved_codes');
    return saved !== null ? JSON.parse(saved) : {};
  });

  const [code, setCode] = useState(() => {
    const saved = localStorage.getItem('titan_c_saved_codes');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed[currentModuleIndex] !== undefined) {
        return parsed[currentModuleIndex];
      }
    }
    return currentModule.initialCode || '';
  });

  const [output, setOutput] = useState('Terminal ready. Waiting for execution...');
  const [isRunning, setIsRunning] = useState(false);
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCode, setQuizCode] = useState(() => currentModule.codingTask ? currentModule.codingTask.initialCode : '');
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const [isTutorialActive, setIsTutorialActive] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isGhostTyping, setIsGhostTyping] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('titan_c_current_mod', currentModuleIndex);
  }, [currentModuleIndex]);

  useEffect(() => {
    localStorage.setItem('titan_c_xp', xp);
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('titan_c_level', level);
  }, [level]);

  useEffect(() => {
    localStorage.setItem('titan_c_completed', JSON.stringify(completedModules));
  }, [completedModules]);

  useEffect(() => {
    localStorage.setItem('titan_c_saved_codes', JSON.stringify(savedCodes));
  }, [savedCodes]);

  useEffect(() => {
    if (currentModule.type === 'coding') {
      const existingCode = savedCodes[currentModuleIndex];
      if (existingCode !== undefined) {
        setCode(existingCode);
      } else {
        setCode(currentModule.initialCode || '');
      }
      setOutput('Terminal ready. Waiting for execution...');
    } else if (currentModule.type === 'quiz') {
      setQuizCode(currentModule.codingTask.initialCode);
      setOutput('Quiz Terminal ready. Compile & Run your code to test.');
    }
  }, [currentModuleIndex]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    setSavedCodes(prev => ({
      ...prev,
      [currentModuleIndex]: newCode
    }));
  };

  useEffect(() => {
    let timeoutId;
    if (isGhostTyping && currentModule.type === 'coding') {
      handleCodeChange(''); 
      let i = 0;
      const target = currentModule.targetCode;
      
      const typeNextChar = () => {
        if (i < target.length) {
          handleCodeChange(target.substring(0, i + 1));
          i++;
          timeoutId = setTimeout(typeNextChar, Math.random() * 40 + 15);
        } else {
          setIsGhostTyping(false);
          setCurrentStepIndex(4); 
        }
      };
      typeNextChar();
    }
    return () => clearTimeout(timeoutId);
  }, [isGhostTyping, currentModuleIndex]);

  const handleNextStep = () => {
    const currentStep = TUTORIAL_STEPS[currentStepIndex];
    if (currentStep.id === 'intro') {
      setCurrentStepIndex(1);
    } else if (currentStep.id === 'guide-page') {
      setActiveView('workspace');
      setCurrentStepIndex(2);
    } else if (currentStep.id === 'editor') {
      setIsGhostTyping(true);
      setCurrentStepIndex(3); 
    } else if (currentStep.id === 'success') {
      setIsTutorialActive(false);
    } else {
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const executeCode = () => {
    if (isGhostTyping) return;
    setIsRunning(true);
    setOutput('Compiling C program with GCC v12.2...');
    
    setTimeout(() => {
      const sanitizedCode = code.replace(/\s+/g, '');
      let isSuccess = false;

      if (currentModuleIndex === 0) {
        isSuccess = sanitizedCode.includes('printf("HelloWorld"') || sanitizedCode.includes("printf('HelloWorld'");
      } else if (currentModuleIndex === 1) {
        isSuccess = sanitizedCode.includes('intage=20') && sanitizedCode.includes('printf("Age:%d",age)');
      } else if (currentModuleIndex === 2) {
        isSuccess = sanitizedCode.includes('score=80') && sanitizedCode.includes('if(score>=50)') && sanitizedCode.includes('printf("Pass")');
      }

      if (isSuccess) {
        let outputText = 'Hello World';
        if (currentModuleIndex === 1) outputText = 'Age: 20';
        if (currentModuleIndex === 2) outputText = 'Pass';

        setOutput('> Program Output:\n' + outputText + '\n\n[Process completed with exit code 0]');
        
        if (!completedModules.includes(currentModuleIndex)) {
          setCompletedModules(prev => [...prev, currentModuleIndex]);
          setXp(prev => {
            const nextXp = prev + 50;
            if (nextXp >= 150) setLevel(2);
            return nextXp;
          });
        }
        
        if (isTutorialActive && currentStepIndex === 4) {
          setCurrentStepIndex(5); 
        }
      } else {
        setOutput('Error: Compilation failed.\nCheck syntax, missing semicolons, or logic conditions.\n[Process completed with exit code 1]');
      }
      setIsRunning(false);
    }, 1000);
  };

  const executeQuizCode = () => {
    setIsRunning(true);
    setOutput('Compiling Quiz C program...');
    setTimeout(() => {
      const sanitized = quizCode.replace(/\s+/g, '');
      const isSuccess = sanitized.includes('printf("WelcometoTitanC")') || sanitized.includes("printf('WelcometoTitanC')");
      if (isSuccess) {
        setOutput('> Program Output:\nWelcome to Titan C\n\n[Process completed with exit code 0]');
      } else {
        setOutput('Error: Output does not match expected result "Welcome to Titan C".');
      }
      setIsRunning(false);
    }, 1000);
  };

  const handleQuizSubmit = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score++;
    });
    
    const sanitized = quizCode.replace(/\s+/g, '');
    const isCodePass = sanitized.includes('printf("WelcometoTitanC")') || sanitized.includes("printf('WelcometoTitanC')");
    
    const totalItems = quizQuestions.length + 1;
    const finalScore = score + (isCodePass ? 1 : 0);

    setQuizScore(finalScore);
    setIsQuizSubmitted(true);

    if (finalScore === totalItems && !completedModules.includes(currentModuleIndex)) {
      setCompletedModules(prev => [...prev, currentModuleIndex]);
      setXp(prev => prev + 100);
    }
  };

  const renderTutorialOverlay = () => {
    if (!isTutorialActive) return null;
    const step = TUTORIAL_STEPS[currentStepIndex];
    if (!step) return null;

    let overlayClasses = "absolute z-50 transition-all duration-300 ease-out p-5 bg-[#111111] rounded border border-[#333333] shadow-2xl max-w-sm w-[90vw]";
    let arrow = null;

    if (step.position === 'center') {
      overlayClasses += " top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
    } else if (step.position === 'editor') {
      overlayClasses += " top-20 right-8 lg:right-24";
      arrow = <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-[#666]"><ChevronRight className="w-6 h-6 rotate-180" /></div>;
    } else if (step.position === 'typing') {
      overlayClasses += " bottom-32 right-8 lg:right-24";
    } else if (step.position === 'run-button') {
      overlayClasses += " bottom-56 right-8";
      arrow = <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[#666]"><ChevronRight className="w-6 h-6 rotate-90" /></div>;
    }

    return (
      <div className="fixed inset-0 z-40 pointer-events-none flex">
        {step.position === 'center' && <div className="absolute inset-0 bg-black/70 backdrop-blur-xs pointer-events-auto" />}
        <div className={overlayClasses + " pointer-events-auto"}>
          {arrow}
          <h3 className="text-[10px] font-mono text-[#888] mb-2 uppercase tracking-widest flex items-center gap-2">
            System Guide ({currentStepIndex + 1}/{TUTORIAL_STEPS.length})
          </h3>
          <p className="text-[#EDEDED] text-xs leading-relaxed mb-4 font-light">
            {step.message}
          </p>
          {step.actionLabel && (
            <button 
              onClick={handleNextStep}
              className="w-full py-2 bg-white hover:bg-gray-200 text-black text-xs font-medium rounded transition-colors flex items-center justify-center gap-2"
            >
              {step.actionLabel}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#EDEDED] font-sans flex flex-col overflow-hidden selection:bg-[#333]">
      
      {/* Top Navigation */}
      <header className="h-14 border-b border-[#222] flex items-center justify-between px-6 z-30 bg-[#000000]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white rounded-xs"></div>
            <h1 className="text-sm font-semibold tracking-wide">Titan C Academy</h1>
          </div>
          
          {/* Page Switcher Tabs (Hidden during quiz or locked) */}
          {currentModule.type !== 'quiz' && (
            <div className="hidden md:flex items-center bg-[#111] border border-[#222] rounded p-0.5 ml-4">
              <button
                onClick={() => setActiveView('guide')}
                className={`px-3 py-1 text-xs rounded transition-all flex items-center gap-1.5 ${
                  activeView === 'guide' ? 'bg-[#222] text-white font-medium' : 'text-[#888] hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> Lesson Guide
              </button>
              <button
                onClick={() => setActiveView('workspace')}
                className={`px-3 py-1 text-xs rounded transition-all flex items-center gap-1.5 ${
                  activeView === 'workspace' ? 'bg-[#222] text-white font-medium' : 'text-[#888] hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" /> Coding Workspace
              </button>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-6 text-xs text-[#888] font-mono uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span>XP</span>
            <span className="text-[#EDEDED]">{xp}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>LVL</span>
            <span className="text-[#EDEDED]">{level}</span>
          </div>
          {isTutorialActive && (
            <button 
              onClick={() => setIsTutorialActive(false)}
              className="text-[10px] underline text-[#666] hover:text-white"
            >
              Skip Guide
            </button>
          )}
        </div>
      </header>

      {/* Main Layout */}
      <main className="flex-1 flex flex-col md:flex-row relative">
        {renderTutorialOverlay()}

        {/* Sidebar Curriculum */}
        <aside className="w-full md:w-[320px] bg-[#000000] border-r border-[#222] flex flex-col">
          <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
            <div className="text-[10px] font-mono text-[#666] mb-4 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Curriculum Roadmap
            </div>
            
            <div className="space-y-2">
              {CURRICULUM.map((mod, idx) => {
                const isCompleted = completedModules.includes(idx);
                const isCurrent = currentModuleIndex === idx;
                
                // Lock other modules if currently in active quiz session (Module 4)
                const isInActiveQuiz = currentModule.type === 'quiz' && !isQuizSubmitted;

                return (
                  <button
                    key={mod.id}
                    disabled={isInActiveQuiz}
                    onClick={() => {
                      if (isInActiveQuiz) return;
                      setCurrentModuleIndex(idx);
                      setIsQuizSubmitted(false);
                      setSelectedAnswers({});
                      if (mod.type === 'quiz') {
                        setActiveView('workspace');
                      } else {
                        setActiveView('guide');
                      }
                    }}
                    className={`w-full text-left p-3.5 rounded border transition-all flex items-center justify-between ${
                      isCurrent 
                        ? 'bg-[#111] border-[#444] text-white' 
                        : isInActiveQuiz
                          ? 'bg-transparent border-[#111] text-[#333] cursor-not-allowed opacity-40'
                          : 'bg-transparent border-[#1b1b1b] text-[#888] hover:border-[#333] hover:text-[#ccc]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {mod.type === 'quiz' ? <Award className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                      <div>
                        <div className="text-xs font-medium">{mod.title}</div>
                        <div className="text-[10px] text-[#666] mt-0.5">{mod.type === 'quiz' ? 'Randomized Exam' : 'Coding Exercise'}</div>
                      </div>
                    </div>
                    {isCompleted && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
            </div>

            {/* Mobile View Switcher */}
            {currentModule.type !== 'quiz' && activeView !== 'workspace' && (
              <div className="mt-8 pt-6 border-t border-[#1b1b1b] md:hidden flex flex-col gap-2">
                <button
                  onClick={() => setActiveView('guide')}
                  className={`w-full py-2 px-3 text-xs rounded border flex items-center justify-center gap-2 ${
                    activeView === 'guide' ? 'bg-[#222] border-white text-white' : 'bg-[#111] border-[#222] text-[#888]'
                  }`}
                >
                  <BookOpen className="w-4 h-4" /> View Lesson Guide
                </button>
                <button
                  onClick={() => setActiveView('workspace')}
                  className={`w-full py-2 px-3 text-xs rounded border flex items-center justify-center gap-2 ${
                    activeView === 'workspace' ? 'bg-[#222] border-white text-white' : 'bg-[#111] border-[#222] text-[#888]'
                  }`}
                >
                  <Code2 className="w-4 h-4" /> View Code Editor
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Content Section */}
        <section className="flex-1 flex flex-col min-w-0 bg-[#050505]">
          {activeView === 'guide' && currentModule.type !== 'quiz' ? (
            /* LESSON GUIDE PAGE */
            <div className="flex-1 p-8 overflow-y-auto max-w-4xl mx-auto w-full">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#222]">
                <div>
                  <div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">Lesson Guide & Theory</div>
                  <h2 className="text-xl font-semibold text-white">{currentModule.title}</h2>
                </div>
                <button
                  onClick={() => setActiveView('workspace')}
                  className="px-4 py-2 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  เริ่มลงมือเขียนโค้ด (Go to Editor)
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {currentModule.detailLesson && (
                <div className="space-y-6">
                  <div className="bg-[#0b0b0b] border border-[#222] p-6 rounded">
                    <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-gray-400" /> {currentModule.detailLesson.concept}
                    </h3>
                    <div className="text-xs text-[#aaa] whitespace-pre-line leading-relaxed font-light mt-3">
                      {currentModule.detailLesson.explanation}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-mono text-[#666] uppercase tracking-wider mb-2">ตัวอย่างโค้ดมาตรฐาน (Example Source Code):</h4>
                    <pre className="p-4 bg-[#030303] border border-[#222] rounded text-xs font-mono text-[#D4D4D4] overflow-x-auto leading-relaxed">
                      {currentModule.detailLesson.example}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* WORKSPACE / QUIZ PAGE */
            <>
              {currentModule.type === 'coding' ? (
                <>
                  {/* Editor Header */}
                  <div className="h-12 border-b border-[#222] flex items-center justify-between px-4 bg-[#0A0A0A]">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => setActiveView('guide')}
                        className="text-[11px] text-[#888] hover:text-white flex items-center gap-1.5 px-2.5 py-1 bg-[#111] border border-[#222] rounded mr-2"
                      >
                        <ArrowLeft className="w-3 h-3" /> ดูบทเรียน (Guide)
                      </button>
                      <div className="px-3 py-1.5 text-[#EDEDED] text-[11px] font-mono bg-[#111] border border-[#222] rounded flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#444]"></span>
                        main.c
                      </div>
                    </div>
                    <button 
                      onClick={executeCode}
                      disabled={isRunning || isGhostTyping || (isTutorialActive && currentStepIndex < 4)}
                      className={`
                        flex items-center gap-2 px-4 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-all
                        ${isRunning 
                          ? 'bg-[#111] text-[#666] cursor-not-allowed border border-[#222]' 
                          : (isTutorialActive && currentStepIndex === 4)
                            ? 'bg-white text-black hover:bg-gray-200'
                            : 'bg-[#111] text-[#EDEDED] hover:bg-[#222] border border-[#333]'}
                        disabled:opacity-50
                      `}
                    >
                      {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
                      {isRunning ? 'Compiling' : 'Run Code'}
                    </button>
                  </div>

                  {/* Task Banner */}
                  <div className="bg-[#080808] border-b border-[#1b1b1b] p-4 text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    <div>
                      <span className="text-[#666] uppercase font-mono tracking-wider mr-2">Mission:</span>
                      <span className="text-[#ccc]">{currentModule.task}</span>
                    </div>
                    <div className="text-[#666] font-mono text-[11px]">
                      💡 Hint: {currentModule.hint}
                    </div>
                  </div>

                  {/* Code Textarea Workspace */}
                  <div className="flex-1 relative p-4 group">
                    <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-[#111] flex flex-col items-end pt-4 pr-3 text-xs text-[#333] font-mono select-none bg-[#050505]">
                      {[...Array(14)].map((_, i) => <div key={i} className="h-6">{i + 1}</div>)}
                    </div>
                    <textarea
                      ref={textareaRef}
                      value={code}
                      onChange={(e) => handleCodeChange(e.target.value)}
                      disabled={isGhostTyping || (isTutorialActive && currentStepIndex < 2)}
                      className="w-full h-full bg-transparent text-[#D4D4D4] font-mono text-[13px] leading-6 outline-none resize-none pl-12 custom-scrollbar focus:ring-0"
                      spellCheck="false"
                      placeholder="// Write your C code here..."
                    />
                  </div>

                  {/* Console Output */}
                  <div className="h-1/3 border-t border-[#222] flex flex-col bg-[#000000]">
                    <div className="h-10 border-b border-[#111] flex items-center px-4 gap-2 text-[10px] font-mono text-[#666] uppercase tracking-widest">
                      <Terminal className="w-3 h-3" /> Execution Terminal
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto font-mono text-[13px]">
                      <pre className={`whitespace-pre-wrap ${output.includes('Error') ? 'text-red-400' : 'text-[#A1A1AA]'}`}>
                        {output}
                      </pre>
                    </div>
                  </div>
                </>
              ) : (
                /* QUIZ ASSESSMENT PAGE WITH RANDOMIZED QUESTIONS */
                <div className="flex-1 p-8 overflow-y-auto max-w-4xl mx-auto w-full">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#222]">
                    <div>
                      <h2 className="text-xl font-semibold mb-1 text-white">{currentModule.title}</h2>
                      <p className="text-xs text-[#888] font-light">แบบทดสอบวัดความรู้แบบสุ่มคำถาม (ห้ามสลับออกหรือดูคู่มือ)</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Multiple Choice Section with Randomized Questions */}
                    <div className="space-y-6">
                      <h3 className="text-xs font-mono text-[#888] uppercase tracking-wider">Part 1: Randomized Multiple Choice ({quizQuestions.length} Questions)</h3>
                      {quizQuestions.map((q, qIndex) => (
                        <div key={qIndex} className="bg-[#0c0c0c] border border-[#222] p-6 rounded">
                          <p className="text-sm font-medium mb-4 text-[#EDEDED]">
                            {qIndex + 1}. {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((opt, optIndex) => {
                              const isSelected = selectedAnswers[qIndex] === optIndex;
                              const isCorrect = isQuizSubmitted && q.correct === optIndex;
                              const isWrong = isQuizSubmitted && isSelected && !isCorrect;

                              return (
                                <button
                                  key={optIndex}
                                  disabled={isQuizSubmitted}
                                  onClick={() => setSelectedAnswers(prev => ({ ...prev, [qIndex]: optIndex }))}
                                  className={`w-full text-left p-3 rounded text-xs transition-all border flex items-center justify-between ${
                                    isCorrect 
                                      ? 'bg-green-950/30 border-green-800 text-green-300' 
                                      : isWrong 
                                        ? 'bg-red-950/30 border-red-800 text-red-300'
                                        : isSelected 
                                          ? 'bg-[#1b1b1b] border-white text-white' 
                                          : 'bg-[#111] border-[#222] text-[#aaa] hover:border-[#333]'
                                  }`}
                                >
                                  <span>{opt}</span>
                                  {isQuizSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-400" />}
                                  {isQuizSubmitted && isWrong && <XCircle className="w-4 h-4 text-red-400" />}
                                </button>
                              );
                            })}
                          </div>
                          {isQuizSubmitted && (
                            <div className="mt-3 text-[11px] text-[#888] font-light border-t border-[#1b1b1b] pt-2">
                              💡 คำอธิบาย: {q.explanation}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Coding Challenge Section */}
                    <div className="space-y-4 pt-4 border-t border-[#222]">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-mono text-[#888] uppercase tracking-wider">Part 2: Coding Challenge</h3>
                        <button
                          onClick={executeQuizCode}
                          disabled={isRunning}
                          className="px-4 py-1.5 bg-[#111] hover:bg-[#222] border border-[#333] text-white text-[11px] font-mono uppercase rounded flex items-center gap-2"
                        >
                          {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3 h-3 fill-current" />}
                          Run Code Test
                        </button>
                      </div>

                      <div className="bg-[#0c0c0c] border border-[#222] p-4 rounded text-xs text-[#ccc]">
                        <span className="text-white font-semibold">โจทย์:</span> {currentModule.codingTask.task}
                      </div>

                      <div className="h-48 relative border border-[#222] rounded bg-[#030303] overflow-hidden">
                        <textarea
                          value={quizCode}
                          onChange={(e) => setQuizCode(e.target.value)}
                          disabled={isQuizSubmitted}
                          className="w-full h-full bg-transparent text-[#D4D4D4] font-mono text-xs p-4 leading-6 outline-none resize-none custom-scrollbar"
                          spellCheck="false"
                        />
                      </div>

                      {/* Console Output for Quiz Coding */}
                      <div className="bg-black border border-[#222] p-4 rounded font-mono text-xs text-[#A1A1AA]">
                        <div className="text-[10px] text-[#666] uppercase mb-1">Terminal Output:</div>
                        <pre className="whitespace-pre-wrap">{output}</pre>
                      </div>
                    </div>

                    {!isQuizSubmitted ? (
                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                        className="w-full py-3 bg-white text-black text-xs font-medium rounded hover:bg-gray-200 transition-colors disabled:opacity-50 mt-6"
                      >
                        ส่งคำตอบทั้งหมด (Submit Assessment)
                      </button>
                    ) : (
                      <div className="p-4 bg-[#111] border border-[#222] rounded flex items-center justify-between mt-6">
                        <div>
                          <div className="text-xs font-medium text-white">ผลคะแนนรวมของคุณ: {quizScore} / {quizQuestions.length + 1}</div>
                          <div className="text-[11px] text-[#888] mt-0.5">
                            {quizScore === quizQuestions.length + 1 ? 'ยอดเยี่ยม! คุณผ่านการทดสอบแบบประเมินทั้งหมดเรียบร้อย' : 'คุณยังทำคะแนนไม่ผ่านเกณฑ์ สามารถกดทดสอบใหม่อีกครั้งได้'}
                          </div>
                        </div>
                        <button
                          onClick={() => { 
                            setIsQuizSubmitted(false); 
                            setSelectedAnswers({});
                            // Re-randomize on retry
                            const pool = [...currentModule.questionPool];
                            const shuffled = pool.sort(() => 0.5 - Math.random());
                            setQuizQuestions(shuffled.slice(0, 3));
                          }}
                          className="px-4 py-2 bg-[#222] hover:bg-[#333] text-white text-xs rounded transition-colors flex items-center gap-2"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> ทำแบบทดสอบอีกครั้ง (สุ่มใหม่)
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Global CSS scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #222; border-radius: 3px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background-color: #444; }
      `}} />
    </div>
  );
}