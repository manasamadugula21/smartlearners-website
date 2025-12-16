'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const mainFeatures = [
  {
    icon: '📝',
    title: 'Exam Preparation Guide',
    desc: 'Comprehensive exam prep with mock tests, chapter-wise practice, and AI-generated remedial plans based on your performance.',
    color: '#3b82f6',
    highlights: ['Mock Tests', 'Chapter-wise Practice', 'Previous Year Papers', 'AI Remedial Plans']
  },
  {
    icon: '🤖',
    title: '24/7 AI Chatbot',
    desc: 'Get instant answers to your doubts anytime, anywhere. Our AI chatbot explains concepts step-by-step in simple language.',
    color: '#a855f7',
    highlights: ['24/7 Available', 'Step-by-step Solutions', 'Multi-language', 'Voice Support']
  },
  {
    icon: '✅',
    title: 'AI Auto-Correction',
    desc: 'Submit your answers and get instant AI correction with detailed feedback on where you went wrong and how to improve.',
    color: '#f472b6',
    highlights: ['Instant Feedback', 'Detailed Explanations', 'Error Analysis', 'Improvement Tips']
  },
  {
    icon: '📊',
    title: 'Progress Tracking',
    desc: 'Visual graphs and reports showing your improvement over time. Track chapter-wise and concept-wise progress.',
    color: '#34d399',
    highlights: ['Visual Graphs', 'Chapter Progress', 'Concept Mastery', 'Weekly Reports']
  },
]

const examPrepFeatures = [
  {
    icon: '📋',
    title: 'Mock Tests',
    desc: 'Take full-length mock tests that simulate real exam conditions',
    color: '#3b82f6'
  },
  {
    icon: '🎯',
    title: 'AI Remedial Plan',
    desc: 'Get personalized study plan based on your mock test performance',
    color: '#a855f7'
  },
  {
    icon: '📚',
    title: 'Chapter-wise Analysis',
    desc: 'See your strengths and weaknesses for each chapter',
    color: '#f472b6'
  },
  {
    icon: '💡',
    title: 'Concept-wise Report',
    desc: 'Deep dive into which concepts need more practice',
    color: '#34d399'
  },
  {
    icon: '📈',
    title: 'Progress Graph',
    desc: 'Visual representation of your improvement over time',
    color: '#f59e0b'
  },
  {
    icon: '🏆',
    title: 'Score Prediction',
    desc: 'AI predicts your expected score based on preparation',
    color: '#ef4444'
  },
]

const selfStudyFeatures = [
  {
    icon: '🎬',
    title: 'Video Tutorials',
    desc: 'Learn concepts through engaging video lessons by expert teachers',
    items: ['HD Quality Videos', 'Expert Explanations', 'Animated Concepts', 'Downloadable']
  },
  {
    icon: '📖',
    title: 'Concept Notes',
    desc: 'Crisp and clear notes for quick revision and understanding',
    items: ['Easy Language', 'Diagrams & Charts', 'Key Points', 'Printable PDF']
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    desc: 'Get step-by-step AI-generated solutions for any problem',
    items: ['Step-by-step', 'Multiple Methods', 'Instant Solutions', 'Save for Later']
  },
  {
    icon: '❓',
    title: 'Practice Questions',
    desc: 'Unlimited practice questions with varying difficulty levels',
    items: ['Easy to Hard', 'Topic-wise', 'Timed Practice', 'Hints Available']
  },
]

const subjects = [
  { name: 'Mathematics', icon: '📐', chapters: 15, color: 'from-blue-500 to-blue-600' },
  { name: 'Science', icon: '🔬', chapters: 18, color: 'from-green-500 to-green-600' },
  { name: 'English', icon: '📚', chapters: 12, color: 'from-purple-500 to-purple-600' },
  { name: 'Social Studies', icon: '🌍', chapters: 20, color: 'from-yellow-500 to-yellow-600' },
  { name: 'Hindi', icon: '📝', chapters: 14, color: 'from-orange-500 to-orange-600' },
  { name: 'Computer', icon: '💻', chapters: 10, color: 'from-pink-500 to-pink-600' },
]

const howExamPrepWorks = [
  {
    step: '01',
    title: 'Take Mock Test',
    desc: 'Attempt a full mock test under real exam conditions',
    icon: '📝'
  },
  {
    step: '02',
    title: 'AI Analyzes Results',
    desc: 'Our AI identifies your weak chapters and concepts',
    icon: '🤖'
  },
  {
    step: '03',
    title: 'Get Remedial Plan',
    desc: 'Receive personalized study plan to improve weak areas',
    icon: '📋'
  },
  {
    step: '04',
    title: 'Track Progress',
    desc: 'See your improvement through visual graphs',
    icon: '📈'
  },
]

export default function StudentsPage() {
  return (
    <div className="overflow-hidden">
      {/* ========== FLOATING BACKGROUND ========== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-shape" style={{ width: 400, height: 400, background: '#3b82f6', top: '10%', left: '-10%' }} />
        <div className="floating-shape" style={{ width: 300, height: 300, background: '#a855f7', top: '60%', right: '-5%', animationDelay: '2s' }} />
        <div className="floating-shape" style={{ width: 250, height: 250, background: '#f472b6', bottom: '10%', left: '30%', animationDelay: '4s' }} />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-primary mb-6">
              👨‍🎓 For Students (B2C)
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Complete <span className="gradient-text">AI Learning Companion</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Exam preparation with mock tests, 24/7 AI chatbot for doubts, auto-correction, progress tracking, video tutorials, and personalized remedial plans.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">Start Learning Free →</Link>
              <Link href="#features" className="btn-secondary text-lg px-8 py-4">Explore Features</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STATS BAR ========== */}
      <section className="py-8 border-y border-white/5 bg-white/[0.02]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '50K+', label: 'Active Students' },
              { stat: '1M+', label: 'Questions Solved' },
              { stat: '10K+', label: 'Video Lessons' },
              { stat: '24/7', label: 'AI Support' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{item.stat}</div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MAIN FEATURES ========== */}
      <section className="section-padding" id="features">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powerful <span className="gradient-text">Features</span></h2>
            <p className="text-xl text-gray-400">Everything you need to excel in your exams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `${feature.color}20` }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{feature.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-gray-300">
                          <span style={{ color: feature.color }}>✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXAM PREPARATION SECTION ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-primary mb-4">📝 Exam Preparation</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI-Powered <span className="gradient-text">Exam Prep</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Take mock tests and get personalized remedial plans based on your performance
            </p>
          </div>

          {/* How Exam Prep Works */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {howExamPrepWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl mb-4">
                  {item.icon}
                </div>
                <div className="text-blue-400 font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < howExamPrepWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-8 text-gray-600">→</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Exam Prep Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examPrepFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover-lift"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MOCK TEST & REMEDIAL PLAN VISUAL ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <div className="badge badge-secondary mb-4">🎯 AI Remedial Plan</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Personalized <span className="gradient-text">Study Plan</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                After every mock test, our AI analyzes your performance and creates a personalized remedial plan focusing on your weak chapters and concepts.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl flex-shrink-0">📚</div>
                  <div>
                    <h4 className="font-semibold text-white">Chapter-wise Focus</h4>
                    <p className="text-gray-500 text-sm">Know exactly which chapters need more attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl flex-shrink-0">💡</div>
                  <div>
                    <h4 className="font-semibold text-white">Concept-wise Breakdown</h4>
                    <p className="text-gray-500 text-sm">Deep dive into specific concepts you struggle with</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-xl flex-shrink-0">📅</div>
                  <div>
                    <h4 className="font-semibold text-white">Daily Study Schedule</h4>
                    <p className="text-gray-500 text-sm">AI creates a day-by-day plan to improve weak areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sample Remedial Plan Visual */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Your Remedial Plan</h3>
                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">After Mock Test 3</span>
              </div>

              {/* Weak Chapters */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">📚 Chapters to Focus</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Trigonometry', progress: 45, color: '#ef4444' },
                    { name: 'Quadratic Equations', progress: 55, color: '#f59e0b' },
                    { name: 'Statistics', progress: 70, color: '#34d399' },
                  ].map((chapter) => (
                    <div key={chapter.name} className="bg-white/5 rounded-xl p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-sm">{chapter.name}</span>
                        <span className="text-gray-400 text-xs">{chapter.progress}% mastery</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all"
                          style={{ width: `${chapter.progress}%`, background: chapter.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weak Concepts */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">💡 Concepts to Revise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Sin/Cos Identities', 'Roots Formula', 'Mean & Median', 'Graph Plotting', 'Word Problems'].map((concept) => (
                    <span key={concept} className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-full">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Today's Plan */}
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">📅 Today&apos;s Plan</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▶</span> Watch: Trigonometry Basics (15 min)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▶</span> Practice: 10 Sin/Cos problems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">▶</span> Quiz: Chapter test (20 questions)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROGRESS TRACKING VISUAL ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Progress Graph Visual */}
            <div className="glass-card p-6 lg:order-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Progress Overview</h3>
                <select className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm text-gray-300">
                  <option>Last 30 Days</option>
                  <option>Last 7 Days</option>
                  <option>All Time</option>
                </select>
              </div>

              {/* Mock Graph */}
              <div className="mb-6">
                <div className="flex items-end justify-between h-40 gap-2">
                  {[40, 55, 50, 65, 60, 75, 72, 80, 78, 85, 82, 90].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-500 to-purple-500 transition-all hover:opacity-80"
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-gray-600 text-xs">{index + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-2 text-gray-500 text-xs">Mock Test Number</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">+25%</div>
                  <div className="text-gray-500 text-xs">Improvement</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">85%</div>
                  <div className="text-gray-500 text-xs">Best Score</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-purple-400">12</div>
                  <div className="text-gray-500 text-xs">Tests Taken</div>
                </div>
              </div>
            </div>

            {/* Right: Description */}
            <div className="lg:order-2">
              <div className="badge badge-primary mb-4">📊 Progress Tracking</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Visual <span className="gradient-text">Progress Graphs</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Track your improvement over time with beautiful visual graphs. See your scores, identify trends, and stay motivated with your progress.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-2xl">📈</div>
                  <div>
                    <h4 className="font-semibold text-white">Score Trend</h4>
                    <p className="text-gray-500 text-sm">See how your scores improve test after test</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-white">Subject-wise Progress</h4>
                    <p className="text-gray-500 text-sm">Compare progress across all subjects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl">🎯</div>
                  <div>
                    <h4 className="font-semibold text-white">Goal Tracking</h4>
                    <p className="text-gray-500 text-sm">Set targets and track achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 24/7 AI CHATBOT SECTION ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <div className="badge badge-secondary mb-4">🤖 AI Chatbot</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                <span className="gradient-text">24/7 Doubt Solving</span> Assistant
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Stuck on a problem at midnight? No worries! Our AI chatbot is available 24/7 to answer your questions with step-by-step explanations.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '💬', title: 'Instant Answers', desc: 'Get solutions in seconds' },
                  { icon: '📝', title: 'Step-by-Step', desc: 'Detailed explanations' },
                  { icon: '🎤', title: 'Voice Input', desc: 'Ask questions by speaking' },
                  { icon: '📸', title: 'Photo Input', desc: 'Upload question images' },
                  { icon: '🌐', title: 'Multi-language', desc: 'Hindi & English support' },
                  { icon: '💾', title: 'Save Answers', desc: 'Bookmark for revision' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Chat Visual */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-semibold text-white">SmartBot</h3>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online 24/7
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-white text-sm">How do I solve quadratic equations?</p>
                  </div>
                </div>

                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-md px-4 py-3 max-w-[80%]">
                    <p className="text-gray-300 text-sm mb-2">Great question! Here&apos;s how to solve quadratic equations:</p>
                    <p className="text-gray-300 text-sm mb-2"><strong className="text-white">Step 1:</strong> Write in form ax² + bx + c = 0</p>
                    <p className="text-gray-300 text-sm mb-2"><strong className="text-white">Step 2:</strong> Use the quadratic formula:</p>
                    <div className="bg-white/10 rounded-lg p-2 text-center mb-2">
                      <span className="text-blue-400 font-mono">x = (-b ± √(b²-4ac)) / 2a</span>
                    </div>
                    <p className="text-gray-300 text-sm">Would you like me to solve an example?</p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 rounded-2xl rounded-br-md px-4 py-2 max-w-[80%]">
                    <p className="text-white text-sm">Yes, solve x² + 5x + 6 = 0</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center gap-2 p-2 bg-white/5 rounded-xl">
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">📷</button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">🎤</button>
                <input 
                  type="text" 
                  placeholder="Ask your doubt..." 
                  className="flex-1 bg-transparent outline-none text-white text-sm px-2"
                />
                <button className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                  <span className="text-white">➤</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SELF STUDY SECTION ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="badge badge-primary mb-4">📖 Self Study</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Learn at Your <span className="gradient-text">Own Pace</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Video tutorials, concept notes, AI solutions, and unlimited practice questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfStudyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-blue-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SUBJECTS ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Subjects <span className="gradient-text">Covered</span></h2>
            <p className="text-xl text-gray-400">Complete CBSE & NCERT curriculum for Class 6-12</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((subject) => (
              <motion.div 
                key={subject.name} 
                className="glass-card p-6 text-center hover-lift cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl mb-3`}>
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{subject.name}</h3>
                <p className="text-gray-500 text-xs">{subject.chapters} Chapters</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="cta-gradient p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of students already improving their grades with AI-powered learning.
              </p>
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">Start Learning Free →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}