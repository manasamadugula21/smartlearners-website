'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// 7 Powerful Features for Students
const powerfulFeatures = [
  {
    number: '1️⃣',
    title: 'AI SOLUTION',
    subtitle: 'Step-by-Step Exam Format',
    icon: '📝',
    color: '#3b82f6',
    points: [
      'Complete solutions in CBSE exam style',
      'Each step explained (why this formula?)',
      'Marks distribution shown',
      'Learn HOW to write for maximum marks',
    ],
    result: 'No more "I know answer but can\'t write properly"'
  },
  {
    number: '2️⃣',
    title: 'CONCEPTS REQUIRED',
    subtitle: 'Understand Before You Solve',
    icon: '💡',
    color: '#a855f7',
    points: [
      'Simple concept explanation',
      'Real-life examples',
      'Formula breakdown',
      'Video explanation (3-5 mins)',
    ],
    result: 'No blind solving. Full clarity.'
  },
  {
    number: '3️⃣',
    title: 'AI CORRECTION',
    subtitle: 'Most Powerful Feature',
    icon: '⭐',
    color: '#f59e0b',
    isHighlight: true,
    points: [
      'Exact line where you went wrong',
      'Which concept you misunderstood',
      'Why it\'s wrong',
      'Correct method step-by-step',
      'How to avoid repeating',
    ],
    result: 'Learn from EVERY mistake. Marks improve.'
  },
  {
    number: '4️⃣',
    title: '24/7 AI CHATBOT',
    subtitle: 'Your Personal Tutor',
    icon: '🤖',
    color: '#22c55e',
    points: [
      'Ask doubts anytime (even 2 AM)',
      'Explains concepts differently if you don\'t get it',
      'Knows YOUR weak areas',
      'Suggests what to study next',
    ],
    result: 'Never stuck. Always moving forward.'
  },
  {
    number: '5️⃣',
    title: 'PERFORMANCE ANALYSIS',
    subtitle: 'Know Exactly Where You Stand',
    icon: '📊',
    color: '#ec4899',
    points: [
      'Chapter-wise performance (85%, 60%, 92%)',
      'Strong concepts vs weak concepts',
      'Mistake patterns (formula errors? missing units?)',
      'Improvement tracking (Last week: 65% → This week: 78%)',
    ],
    result: 'No guessing. Clear data on what to fix.'
  },
  {
    number: '6️⃣',
    title: 'EXAM GUIDE',
    subtitle: '1 Week Before Exam Plan',
    icon: '🎯',
    color: '#ef4444',
    isHighlight: true,
    examPlan: [
      { day: 'Day 1', task: 'Test on weak chapters' },
      { day: 'Day 2-5', task: '30-min daily remedial (focus ONLY on weak concepts)' },
      { day: 'Day 6', task: 'Confidence practice (easy wins)' },
      { day: 'Day 7', task: 'Full revision + exam tips' },
    ],
    result: 'Confidence 60% → 75% → 85% → 99% ✅'
  },
  {
    number: '7️⃣',
    title: 'PARENT UPDATES',
    subtitle: 'They See Your Progress',
    icon: '📱',
    color: '#25D366',
    points: [
      'Weekly performance summary',
      'Weak areas identified',
      'Exam readiness score',
      'Daily study time',
    ],
    result: 'Less "Did you study?" More trust. Better support.'
  },
]

// Student Daily Routine
const dailyRoutine = {
  morning: { time: '10 mins', task: 'Check AI\'s topic suggestion → Watch 1 concept video' },
  evening: { time: '30-40 mins', task: 'Read concept → Solve 5 questions → Upload answers → AI correction → Fix mistakes → Ask doubts' },
  weekend: { task: 'Check weak chapters → Practice targeted questions' },
  examWeek: { task: 'Follow 7-day AI plan → Confidence 60% → 99%' },
}

// Motivational Quotes
const motivationalQuotes = [
  'Marks don\'t improve by studying MORE. They improve when mistakes STOP repeating.',
  'Confidence comes from clarity, not memorization.',
  'Every mistake teaches something. Don\'t ignore it.',
  '60% confidence → 99% in 7 days. Yes, possible.',
]

export default function StudentsPage() {
  return (
    <div className="overflow-hidden">
      {/* ========== FLOATING BACKGROUND ========== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute rounded-full" style={{ width: 400, height: 400, background: '#3b82f6', top: '10%', left: '-10%', filter: 'blur(80px)', opacity: 0.3 }} />
        <div className="absolute rounded-full" style={{ width: 300, height: 300, background: '#a855f7', top: '60%', right: '-5%', filter: 'blur(80px)', opacity: 0.3 }} />
        <div className="absolute rounded-full" style={{ width: 250, height: 250, background: '#f472b6', bottom: '10%', left: '30%', filter: 'blur(80px)', opacity: 0.3 }} />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-primary mb-6">
              🎓 For Students
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Study Smart. <span className="gradient-text">Not Harder.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
              Everything you need to crack exams — in ONE place.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              No confusion. No panic. Just clarity. 🎯
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
              <Link href="/free-trial" className="btn-primary text-lg px-8 py-4">Start Free Trial - 7 Days →</Link>
              <Link href="#features" className="btn-secondary text-lg px-8 py-4">See 7 Features</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 7 POWERFUL FEATURES ========== */}
      <section className="section-padding" id="features">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              🔥 7 POWERFUL FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Everything You Need to <span className="gradient-text">Crack Exams</span>
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {powerfulFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`glass-card p-6 md:p-8 ${feature.isHighlight ? 'border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-900/10 to-orange-900/10' : ''}`}
                style={{ borderLeft: feature.isHighlight ? undefined : `4px solid ${feature.color}` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${feature.color}20` }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{feature.number}</span>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      {feature.isHighlight && <span className="text-yellow-400 text-sm">⭐ Most Powerful</span>}
                    </div>
                    <p className="text-gray-400">{feature.subtitle}</p>
                  </div>
                </div>

                {/* Points or Exam Plan */}
                {feature.examPlan ? (
                  <div className="space-y-2 mb-4">
                    {feature.examPlan.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                        <span className="text-blue-400 font-bold min-w-[70px]">📅 {item.day}</span>
                        <span className="text-gray-300 text-sm">{item.task}</span>
                      </div>
                    ))}
                  </div>
                ) : feature.points && (
                  <div className="grid sm:grid-cols-2 gap-2 mb-4">
                    {feature.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span style={{ color: feature.color }}>✅</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Result */}
                <div
                  className="inline-block px-4 py-2 rounded-xl text-sm font-medium"
                  style={{ background: `${feature.color}15`, color: feature.color }}
                >
                  → Result: {feature.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== YOUR DAY WITH SMARTLEARNERS ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              💪 Your Day With <span className="gradient-text">SmartLearners.ai</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl">🌅</div>
                <div>
                  <h3 className="font-bold text-white">Morning</h3>
                  <span className="text-yellow-400 text-sm">{dailyRoutine.morning.time}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{dailyRoutine.morning.task}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🌆</div>
                <div>
                  <h3 className="font-bold text-white">Evening</h3>
                  <span className="text-blue-400 text-sm">{dailyRoutine.evening.time}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{dailyRoutine.evening.task}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">📅</div>
                <h3 className="font-bold text-white">Weekend</h3>
              </div>
              <p className="text-gray-400 text-sm">{dailyRoutine.weekend.task}</p>
            </div>

            <div className="glass-card p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">🎯</div>
                <h3 className="font-bold text-white">Week Before Exam</h3>
              </div>
              <p className="text-green-400 text-sm font-medium">{dailyRoutine.examWeek.task}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== REMEMBER THIS - Motivational ========== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              🔥 <span className="gradient-text">REMEMBER THIS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {motivationalQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >
                <p className="text-lg text-gray-300 italic">&quot;{quote}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL MESSAGE FOR STUDENTS ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 max-w-4xl mx-auto">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Final Message</h2>
            <p className="text-2xl text-gray-300 mb-6">
              &quot;You&apos;re Not Weak. You Just Didn&apos;t See the Mistake.&quot;
            </p>
            <div className="max-w-xl mx-auto mb-8 space-y-2 text-left">
              <p className="text-gray-300">✅ You understand concepts <span className="text-blue-400 font-semibold">clearly</span></p>
              <p className="text-gray-300">✅ You correct mistakes <span className="text-blue-400 font-semibold">immediately</span></p>
              <p className="text-gray-300">✅ You practice <span className="text-blue-400 font-semibold">smartly</span> (not randomly)</p>
              <p className="text-gray-300">✅ You track progress <span className="text-blue-400 font-semibold">honestly</span></p>
              <p className="text-gray-300">✅ You walk into exams with <span className="text-green-400 font-semibold">99% confidence</span></p>
            </div>
            <p className="text-lg text-gray-400 mb-8">
              When you know <span className="text-white font-semibold">WHAT</span>, <span className="text-white font-semibold">HOW</span>, and <span className="text-white font-semibold">WHY</span> to write —<br />
              <span className="text-green-400 font-semibold">Marks follow automatically. 📈</span>
            </p>
            <Link href="/free-trial" className="btn-primary text-lg px-8 py-4">Start Free Trial - 7 Days →</Link>
            <p className="text-sm text-gray-500 mt-4">
              ✅ No credit card • ✅ All features unlocked • ✅ Cancel anytime
            </p>
            <p className="text-sm text-green-400 mt-2 font-medium">
              Your exam success starts today. 🚀
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
