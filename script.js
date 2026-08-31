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
    detailLesson: { concept: '', explanation: '' },
    type: 'quiz',
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
  { id: 'intro', message: '👋 ยินดีต้อนรับสู่ Titan C Academy! แพลตฟอร์มฝึกเขียนโค้ดภาษา C แบบมินิมอล พร้อมลุยหรือยัง?', actionLabel: 'เริ่มบทเรียนแรก' },
  { id: 'guide-page', message: '📖 หน้านี้คือ "Lesson Guide" สำหรับศึกษาทฤษฎีและตัวอย่างโค้ดก่อนลงมือปฏิบัติ แยกจากหน้าเขียนโค้ดอย่างชัดเจน', actionLabel: 'ไปที่หน้าเขียนโค้ด' },
  { id: 'editor', message: '💻 ตรงนี้คือ Code Editor ระบบกำลังจะช่วยพิมพ์โครงสร้างให้ดูเป็นตัวอย่าง...', actionLabel: 'ให้ AI พิมพ์ตัวอย่าง (Ghost Type)' },
  { id: 'typing', message: '⏳ ระบบกำลังเขียนโค้ดให้คุณ สังเกตโครงสร้าง #include และ printf() ดีๆ นะ...', actionLabel: '' },
  { id: 'run', message: '🚀 เยี่ยมมาก! โค้ดพร้อมแล้ว คลิกที่ปุ่ม "Run Code" เพื่อคอมไพล์และผ่านด่านนี้กันเลย!', actionLabel: '' },
  { id: 'success', message: '🎉 ยอดเยี่ยม! คุณรันโปรแกรมสำเร็จและได้รับ XP เป็นการปูพื้นฐานที่สมบูรณ์แบบ!', actionLabel: 'เริ่มเรียนรู้ต่อ' }
];

let currentModuleIndex = parseInt(localStorage.getItem('titan_c_current_mod')) || 0;
let xp = parseInt(localStorage.getItem('titan_c_xp')) || 0;
let level = parseInt(localStorage.getItem('titan_c_level')) || 1;
let completedModules = JSON.parse(localStorage.getItem('titan_c_completed')) || [];
let savedCodes = JSON.parse(localStorage.getItem('titan_c_saved_codes')) || {};
let activeView = 'guide';
let currentStepIndex = 0;
let isTutorialActive = true;
let isGhostTyping = false;

let quizQuestions = [];
let selectedAnswers = {};
let isQuizSubmitted = false;
let quizScore = 0;

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  updateStats();
  renderCurriculum();
  loadModule(currentModuleIndex);
  updateLineNumbers();
  
  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateStats() {
  document.getElementById('xp-display').innerText = xp;
  document.getElementById('level-display').innerText = level;
}

function renderCurriculum() {
  const container = document.getElementById('curriculum-list');
  container.innerHTML = '';
  
  const currentMod = CURRICULUM[currentModuleIndex];
  const isInActiveQuiz = currentMod.type === 'quiz' && !isQuizSubmitted;

  CURRICULUM.forEach((mod, idx) => {
    const isCompleted = completedModules.includes(idx);
    const isCurrent = currentModuleIndex === idx;
    
    const btn = document.createElement('button');
    btn.className = `curriculum-item ${isCurrent ? 'active' : ''} ${isInActiveQuiz ? 'disabled' : ''}`;
    btn.disabled = isInActiveQuiz;
    btn.onclick = () => selectModule(idx);
    
    btn.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <i data-lucide="${mod.type === 'quiz' ? 'award' : 'code-2'}"></i>
        <div>
          <div class="title">${mod.title}</div>
          <div class="subtitle">${mod.type === 'quiz' ? 'Randomized Exam' : 'Coding Exercise'}</div>
        </div>
      </div>
      ${isCompleted ? '<i data-lucide="check-circle-2" style="color: #fff;"></i>' : ''}
    `;
    container.appendChild(btn);
  });
  if (window.lucide) lucide.createIcons();
}

function selectModule(idx) {
  currentModuleIndex = idx;
  localStorage.setItem('titan_c_current_mod', idx);
  isQuizSubmitted = false;
  selectedAnswers = {};
  loadModule(idx);
  renderCurriculum();
}

function loadModule(idx) {
  const mod = CURRICULUM[idx];
  if (mod.type === 'quiz') {
    activeView = 'workspace';
    setupQuiz(mod);
  } else {
    document.getElementById('guide-title').innerText = mod.title;
    document.getElementById('guide-concept').innerHTML = `<i data-lucide="compass"></i> ${mod.detailLesson.concept}`;
    document.getElementById('guide-explanation').innerText = mod.detailLesson.explanation;
    document.getElementById('guide-example').innerText = mod.detailLesson.example;
    
    document.getElementById('mission-text').innerText = mod.task;
    document.getElementById('mission-hint').innerText = `💡 Hint: ${mod.hint}`;
    
    const codeArea = document.getElementById('code-textarea');
    codeArea.value = savedCodes[idx] !== undefined ? savedCodes[idx] : (mod.initialCode || '');
    updateLineNumbers();
    document.getElementById('terminal-output').innerText = 'Terminal ready. Waiting for execution...';
  }
  switchView(activeView);
}

function switchView(view) {
  activeView = view;
  const mod = CURRICULUM[currentModuleIndex];
  
  const switchers = document.getElementById('view-switchers');
  if (mod.type === 'quiz') {
    switchers.classList.add('hidden');
    document.getElementById('view-guide-content').classList.add('hidden');
    document.getElementById('view-workspace-content').classList.remove('hidden');
    document.getElementById('coding-workspace').classList.add('hidden');
    document.getElementById('quiz-workspace').classList.remove('hidden');
  } else {
    switchers.classList.remove('hidden');
    if (view === 'guide') {
      document.getElementById('view-guide-content').classList.remove('hidden');
      document.getElementById('view-workspace-content').classList.add('hidden');
    } else {
      document.getElementById('view-guide-content').classList.add('hidden');
      document.getElementById('view-workspace-content').classList.remove('hidden');
      document.getElementById('coding-workspace').classList.remove('hidden');
      document.getElementById('quiz-workspace').classList.add('hidden');
    }
  }
  if (window.lucide) lucide.createIcons();
}

function handleCodeInput(val) {
  const codeArea = document.getElementById('code-textarea');
  savedCodes[currentModuleIndex] = codeArea.value;
  localStorage.setItem('titan_c_saved_codes', JSON.stringify(savedCodes));
  updateLineNumbers();
}

function updateLineNumbers() {
  const codeArea = document.getElementById('code-textarea');
  const lineNumbers = document.getElementById('line-numbers');
  const lines = codeArea.value.split('\n').length;
  let html = '';
  for(let i=1; i<=Math.max(lines, 14); i++) {
    html += `<div>${i}</div>`;
  }
  lineNumbers.innerHTML = html;
}

function executeCode() {
  if (isGhostTyping) return;
  const btn = document.getElementById('run-code-btn');
  const terminal = document.getElementById('terminal-output');
  btn.disabled = true;
  terminal.innerText = 'Compiling C program with GCC v12.2...';

  setTimeout(() => {
    const code = document.getElementById('code-textarea').value;
    const sanitized = code.replace(/\s+/g, '');
    let isSuccess = false;

    if (currentModuleIndex === 0) {
      isSuccess = sanitized.includes('printf("HelloWorld"') || sanitized.includes("printf('HelloWorld'");
    } else if (currentModuleIndex === 1) {
      isSuccess = sanitized.includes('intage=20') && sanitized.includes('printf("Age:%d",age)');
    } else if (currentModuleIndex === 2) {
      isSuccess = sanitized.includes('score=80') && sanitized.includes('if(score>=50)') && sanitized.includes('printf("Pass")');
    }

    if (isSuccess) {
      let outputText = 'Hello World';
      if (currentModuleIndex === 1) outputText = 'Age: 20';
      if (currentModuleIndex === 2) outputText = 'Pass';

      terminal.innerText = '> Program Output:\n' + outputText + '\n\n[Process completed with exit code 0]';
      terminal.style.color = '#A1A1AA';

      if (!completedModules.includes(currentModuleIndex)) {
        completedModules.push(currentModuleIndex);
        localStorage.setItem('titan_c_completed', JSON.stringify(completedModules));
        xp += 50;
        if (xp >= 150) level = 2;
        updateStats();
        renderCurriculum();
      }

      if (isTutorialActive && currentStepIndex === 4) {
        currentStepIndex = 5;
        renderTutorial();
      }
    } else {
      terminal.innerText = 'Error: Compilation failed.\nCheck syntax, missing semicolons, or logic conditions.\n[Process completed with exit code 1]';
      terminal.style.color = 'rgb(248, 113, 113)';
    }
    btn.disabled = false;
  }, 1000);
}

function setupQuiz(mod) {
  const pool = [...mod.questionPool];
  quizQuestions = pool.sort(() => 0.5 - Math.random()).slice(0, 3);
  
  document.getElementById('quiz-title').innerText = mod.title;
  document.getElementById('quiz-task-desc').innerHTML = `<h3><i data-lucide="compass"></i> โจทย์:</h3><p>${mod.codingTask.task}</p>`;
  document.getElementById('quiz-code-textarea').value = mod.codingTask.initialCode;
  document.getElementById('quiz-terminal-output').innerText = 'Quiz Terminal ready.';
  document.getElementById('quiz-submit-container').classList.remove('hidden');
  document.getElementById('quiz-result-box').classList.add('hidden');
  
  renderQuizQuestions();
}

function renderQuizQuestions() {
  const container = document.getElementById('quiz-questions-container');
  container.innerHTML = `<div class="guide-subtitle">Part 1: Randomized Multiple Choice (${quizQuestions.length} Questions)</div>`;
  
  quizQuestions.forEach((q, qIndex) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    
    let optionsHtml = '';
    q.options.forEach((opt, optIndex) => {
      const isSelected = selectedAnswers[qIndex] === optIndex;
      const isCorrect = isQuizSubmitted && q.correct === optIndex;
      const isWrong = isQuizSubmitted && isSelected && !isCorrect;
      
      let btnClass = 'quiz-option-btn';
      if (isCorrect) btnClass += ' correct';
      else if (isWrong) btnClass += ' wrong';
      else if (isSelected) btnClass += ' selected';

      optionsHtml += `
        <button class="${btnClass}" ${isQuizSubmitted ? 'disabled' : ''} onclick="selectQuizOption(${qIndex}, ${optIndex})">
          <span>${opt}</span>
          ${isQuizSubmitted && isCorrect ? '<i data-lucide="check-circle-2" style="color: rgb(74, 222, 128); width: 16px; height: 16px;"></i>' : ''}
          ${isQuizSubmitted && isWrong ? '<i data-lucide="x-circle" style="color: rgb(248, 113, 113); width: 16px; height: 16px;"></i>' : ''}
        </button>
      `;
    });

    card.innerHTML = `
      <p class="quiz-question-title">${qIndex + 1}. ${q.question}</p>
      <div class="quiz-options">${optionsHtml}</div>
      ${isQuizSubmitted ? `<div class="quiz-explanation">💡 คำอธิบาย: ${q.explanation}</div>` : ''}
    `;
    container.appendChild(card);
  });
  if (window.lucide) lucide.createIcons();
}

function selectQuizOption(qIdx, optIdx) {
  selectedAnswers[qIdx] = optIdx;
  renderQuizQuestions();
}

function executeQuizCode() {
  const terminal = document.getElementById('quiz-terminal-output');
  terminal.innerText = 'Compiling Quiz C program...';
  setTimeout(() => {
    const code = document.getElementById('quiz-code-textarea').value;
    const sanitized = code.replace(/\s+/g, '');
    const isSuccess = sanitized.includes('printf("WelcometoTitanC")') || sanitized.includes("printf('WelcometoTitanC')");
    if (isSuccess) {
      terminal.innerText = '> Program Output:\nWelcome to Titan C\n\n[Process completed with exit code 0]';
    } else {
      terminal.innerText = 'Error: Output does not match expected result "Welcome to Titan C".';
    }
  }, 1000);
}

function handleQuizSubmit() {
  let score = 0;
  quizQuestions.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correct) score++;
  });
  
  const code = document.getElementById('quiz-code-textarea').value;
  const sanitized = code.replace(/\s+/g, '');
  const isCodePass = sanitized.includes('printf("WelcometoTitanC")') || sanitized.includes("printf('WelcometoTitanC')");
  
  const totalItems = quizQuestions.length + 1;
  quizScore = score + (isCodePass ? 1 : 0);
  isQuizSubmitted = true;
  
  renderQuizQuestions();
  document.getElementById('quiz-submit-container').classList.add('hidden');
  const resultBox = document.getElementById('quiz-result-box');
  resultBox.classList.remove('hidden');
  
  document.getElementById('quiz-score-text').innerText = `ผลคะแนนรวมของคุณ: ${quizScore} / ${totalItems}`;
  document.getElementById('quiz-score-desc').innerText = quizScore === totalItems ? 'ยอดเยี่ยม! คุณผ่านการทดสอบแบบประเมินทั้งหมดเรียบร้อย' : 'คุณยังทำคะแนนไม่ผ่านเกณฑ์ สามารถกดทดสอบใหม่อีกครั้งได้';

  if (quizScore === totalItems && !completedModules.includes(currentModuleIndex)) {
    completedModules.push(currentModuleIndex);
    localStorage.setItem('titan_c_completed', JSON.stringify(completedModules));
    xp += 100;
    updateStats();
    renderCurriculum();
  }
}

function resetQuiz() {
  isQuizSubmitted = false;
  selectedAnswers = {};
  loadModule(currentModuleIndex);
}

function skipTutorial() {
  isTutorialActive = false;
  document.getElementById('tutorial-overlay').classList.add('hidden');
}

function renderTutorial() {
  if (!isTutorialActive) {
    document.getElementById('tutorial-overlay').classList.add('hidden');
    return;
  }
  const step = TUTORIAL_STEPS[currentStepIndex];
  if (!step) {
    document.getElementById('tutorial-overlay').classList.add('hidden');
    return;
  }
  
  document.getElementById('tutorial-overlay').classList.remove('hidden');
  document.getElementById('tutorial-step-indicator').innerText = `System Guide (${currentStepIndex + 1}/${TUTORIAL_STEPS.length})`;
  document.getElementById('tutorial-message').innerText = step.message;
  
  const actionBtn = document.getElementById('tutorial-action-btn');
  if (step.actionLabel) {
    actionBtn.classList.remove('hidden');
    actionBtn.innerHTML = `${step.actionLabel} <i data-lucide="arrow-right"></i>`;
  } else {
    actionBtn.classList.add('hidden');
  }
  if (window.lucide) lucide.createIcons();
}

function handleNextStep() {
  const step = TUTORIAL_STEPS[currentStepIndex];
  if (step.id === 'intro') {
    currentStepIndex = 1;
    renderTutorial();
  } else if (step.id === 'guide-page') {
    switchView('workspace');
    currentStepIndex = 2;
    renderTutorial();
  } else if (step.id === 'editor') {
    startGhostTyping();
  } else if (step.id === 'success') {
    isTutorialActive = false;
    renderTutorial();
  }
}

function startGhostTyping() {
  isGhostTyping = true;
  currentStepIndex = 3;
  renderTutorial();
  
  const mod = CURRICULUM[currentModuleIndex];
  const target = mod.targetCode;
  let i = 0;
  const codeArea = document.getElementById('code-textarea');
  codeArea.value = '';
  
  function typeChar() {
    if (i < target.length) {
      codeArea.value = target.substring(0, i + 1);
      savedCodes[currentModuleIndex] = codeArea.value;
      updateLineNumbers();
      i++;
      setTimeout(typeChar, Math.random() * 40 + 15);
    } else {
      isGhostTyping = false;
      currentStepIndex = 4;
      renderTutorial();
    }
  }
  typeChar();
}
