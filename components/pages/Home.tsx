'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useUserType } from '@/contexts/UserTypeContext'
import UserTypeSelection from '@/components/UserTypeSelection'

const features = [
  { image: '/feature-ai-chatbot.png', title: 'AI-Chatbot', desc: 'Get instant help from our AI tutor available 24/7. Ask questions and receive personalized guidance.', color: '#60a5fa' },
  { image: '/feature-smart-analytics.png', title: 'Smart Analytics', desc: 'Track progress with detailed insights. Identify strengths and get recommendations.', color: '#a855f7' },
  { image: '/feature-exam-mode.png', title: 'Exam Mode', desc: 'Start your exam and get AI-powered remedial plans based on your weak areas. Prepare effectively for exams with personalized guidance.', color: '#f472b6' },
  { image: '/feature-practice-tests.png', title: 'Practice Tests', desc: 'Prepare with AI-generated practice tests that adapt to your skill level.', color: '#fbbf24' },
  { image: '/feature-cbse-jee.png', title: 'CBSE & JEE FOUNDATION', desc: 'Complete curriculum coverage for Class 6-12 aligned with CBSE and JEE FOUNDATION.', color: '#fb7185' },
  { image: '/feature-jee-advanced.png', title: 'JEE Mains & Advanced', desc: 'Complete JEE preparation with topic-wise practice, mock tests, challenging problems, and AI-powered solutions for Class 11 & 12.', color: '#f59e0b' },
]

// The Real Problem - Parent Pain Points
const realProblems = [
  { icon: '❌', text: 'Studies 3 hours daily → Still makes same errors' },
  { icon: '❌', text: 'Expensive tuitions → No clarity on weak areas' },
  { icon: '❌', text: 'Parents don\'t know → Where exactly child is struggling' },
  { icon: '❌', text: 'Board exams coming → Rising panic, no plan' },
]

// What Parents Get - WhatsApp Updates
const whatsappFeatures = [
  'Chapter-wise performance weekly',
  'Exact weak concepts identified',
  'Improvement progress tracked',
  'Exam readiness score (60%? 90%?)',
]

// Traditional vs SmartLearners comparison
const comparisonData = [
  { traditional: 'Videos only', smart: 'AI corrects YOUR answers' },
  { traditional: 'Bulk teaching', smart: 'Personalized for YOUR mistakes' },
  { traditional: 'Parents blind', smart: 'WhatsApp updates daily' },
  { traditional: 'Last-minute panic', smart: '7-day exam confidence plan' },
]

// How It Works - 3 Steps
const howItWorksSteps = [
  { step: '1', title: 'Child practices', desc: 'Solves questions, writes answers' },
  { step: '2', title: 'AI finds mistakes', desc: 'Shows exact wrong line + concept gap' },
  { step: '3', title: 'Learn & improve', desc: 'Step-by-step correction + progress tracked' },
]

// 7-Day Exam Guide
const examGuide = [
  { day: 'Day 1', task: 'AI tests weak chapters' },
  { day: 'Day 2-5', task: 'Daily remedial plan (30 mins)' },
  { day: 'Day 6', task: 'Confidence practice' },
  { day: 'Day 7', task: 'Full revision + exam tips' },
]

// Parent Testimonials
const parentTestimonials = [
  {
    name: 'Mr. Patel',
    location: 'Bangalore',
    quote: 'Finally could see WHERE she was making mistakes.',
    result: 'Priya: 62% → 87% in Math (2 months)'
  },
  {
    name: 'Mrs. Reddy',
    location: 'Hyderabad',
    quote: '7-day plan gave him clarity. Confidence changed everything.',
    result: 'Arjun stopped exam panic'
  },
]

const stats = [
  { value: '50,000+', label: 'Active Students' },
  { value: '200+', label: 'Partner Schools' },
  { value: '95%', label: 'Success Rate' },
]

const testimonials = [
  { quote: "SmartLearners.ai transformed how I study. The AI tutor helped me improve my math scores by 40%!", name: 'Priya Sharma', role: 'Class 12 Student, Delhi' },
  { quote: "The analytics dashboard gives me insights I never had before. It's a game-changer for our institution.", name: 'Rajesh Kumar', role: 'Teacher, Hyderabad' },
  { quote: "My daughter loves the gamified approach. She actually asks to study now!", name: 'Anita Desai', role: 'Parent' },
]

export default function Home() {
  const { userType } = useUserType()
  const [activeTab, setActiveTab] = useState<'students' | 'schools'>('students')

  // Determine default content based on user type
  const isParent = userType === 'parent'
  const isSchool = userType === 'school'

  return (
    <div className="overflow-hidden">
      {/* ========== FLOATING BACKGROUND ========== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute rounded-full" style={{ width: 400, height: 400, background: '#3b82f6', top: '10%', left: '-10%', filter: 'blur(80px)', opacity: 0.3 }} />
        <div className="absolute rounded-full" style={{ width: 300, height: 300, background: '#a855f7', top: '60%', right: '-5%', filter: 'blur(80px)', opacity: 0.3 }} />
        <div className="absolute rounded-full" style={{ width: 250, height: 250, background: '#f472b6', bottom: '10%', left: '30%', filter: 'blur(80px)', opacity: 0.3 }} />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {isParent ? (
              <>
                {/* Parent Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-primary mb-8">
                  🎯 AI-Powered Learning for Class 9-12
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Your Child Studies Hard.<br />
                  <span className="gradient-text">Why Aren&apos;t the Marks Improving?</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
                  Because the <span className="text-red-400 font-semibold">same mistakes keep repeating</span>.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-lg text-gray-500 mb-6 max-w-2xl mx-auto">
                  Your child doesn&apos;t see them. Teachers don&apos;t catch them.<br />
                  <span className="text-blue-400 font-semibold">SmartLearners.ai does.</span>
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                  AI finds the exact mistake, explains why it&apos;s wrong, and makes sure it <span className="text-green-400 font-semibold">never happens again</span>.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="flex flex-wrap justify-center gap-4 mb-8">
                  <Link href="/free-trial" className="btn-primary text-lg px-8 py-4">Start Free Trial - 7 Days →</Link>
                  <Link href="/contact" className="btn-secondary text-lg px-8 py-4">Book a Demo</Link>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-sm text-gray-500">
                  ✅ No credit card required • CBSE Class 9-12 (All subjects) • 15-day money-back guarantee
                </motion.p>
              </>
            ) : (
              <>
                {/* School Hero */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-secondary mb-8">
                  🏫 AI-Powered School Analytics
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Transform Your School with<br />
                  <span className="gradient-text">AI-Powered Exam Analysis</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Comprehensive gap assessment, chapter-wise analytics, and personalized improvement plans for every student.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mb-16">
                  <Link href="/contact" className="btn-primary text-lg px-8 py-4" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>Schedule Demo →</Link>
                  <Link href="/schools" className="btn-secondary text-lg px-8 py-4">Learn More</Link>
                </motion.div>
              </>
            )}

            {!userType && (
              <>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-primary mb-8">
                  🚀 AI-Powered Learning Platform for Class 6-12
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  NO.1 Agentic AI<br />
                  <span className="gradient-text">All-in-One Educational Platform</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Personalized <span className="text-blue-400 font-bold">CBSE</span> & <span className="text-purple-400 font-bold">JEE FOUNDATION</span> courses for Class 6-12.
                </motion.p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ========== USER TYPE SELECTION ========== */}
      {!userType && <UserTypeSelection />}

      {/* ========== CONTENT SECTIONS - Only show after user type is selected ========== */}
      {userType && (
        <>
          {/* ========== STATS BAR ========== */}
          <section className="py-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-y border-white/5">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-16 md:gap-24 lg:gap-32">
            {isParent ? (
              <>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">50,000+</div>
                  <div className="text-gray-400 text-sm">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">95%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">AI Tutor Available</div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">200+</div>
                  <div className="text-gray-400 text-sm">Partner Schools</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">100,000+</div>
                  <div className="text-gray-400 text-sm">Students Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                  <div className="text-gray-400 text-sm">School Satisfaction</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION HIGHLIGHT SECTION ========== */}
      <section className="section-padding" id="solutions">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="glass-card p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {isParent ? (
                  <>
                    <div>
                      <div className="w-28 h-28 rounded-2xl overflow-hidden mb-6">
                        <Image
                          src="/personalized-learning.png"
                          alt="Personalized Learning"
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Personalized Learning Journey</h3>
                      <p className="text-gray-400 mb-6">Our AI analyzes your learning style to create a customized curriculum for CBSE & NCERT syllabus.</p>
                      <ul className="space-y-3 mb-8">
                        {['AI-powered study recommendations', 'NCERT Class 6-10 Complete Course', 'NCERT Class 11-12 Complete Course', 'Adaptive practice questions', 'Progress tracking & analytics'].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-gray-300">
                            <span className="text-blue-400">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                      <Link href="/students" className="btn-primary">Learn More →</Link>
                    </div>
                    <div className="glass-card p-8">
                      <div className="text-center mb-6">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Course Pricing</span>
                      </div>
                      <div className="space-y-4 mb-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-white">NCERT Class 6-10</h4>
                              <p className="text-sm text-gray-400">All subjects included</p>
                            </div>
                            <span className="text-2xl font-bold text-blue-400">₹500</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-white">NCERT Class 11-12</h4>
                              <p className="text-sm text-gray-400">All subjects included</p>
                            </div>
                            <span className="text-2xl font-bold text-blue-400">₹600</span>
                          </div>
                        </div>
                      </div>
                      <Link href="/signup" className="btn-primary w-full text-center block">Register Now</Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl mb-6">📊</div>
                      <h3 className="text-3xl font-bold text-white mb-4">Exam Analysis & Gap Assessment</h3>
                      <p className="text-gray-400 mb-6">Comprehensive exam analysis system to identify learning gaps and improve student performance with AI-powered insights.</p>
                      <ul className="space-y-3 mb-8">
                        {['Detailed exam performance reports', 'Chapter-wise gap analysis', 'Student strength & weakness mapping', 'Class & section comparison analytics', 'Personalized improvement recommendations'].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-gray-300">
                            <span className="text-purple-400">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                      <Link href="/schools" className="btn-primary" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>Learn More →</Link>
                    </div>
                    <div className="glass-card p-8">
                      <div className="text-center mb-6">
                        <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">School Plans</span>
                      </div>
                      <div className="space-y-3 mb-8">
                        {[
                          { range: 'Up to 500 students', price: '₹199/student/year' },
                          { range: '500 - 2,000 students', price: '₹149/student/year' },
                          { range: '2,000+ students', price: 'Custom pricing' },
                        ].map((tier) => (
                          <div key={tier.range} className="flex justify-between p-4 rounded-xl bg-white/5">
                            <span className="text-gray-400">{tier.range}</span>
                            <span className="font-semibold text-white">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                      <Link href="/contact" className="btn-primary w-full text-center block" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>Download Demo</Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FEATURES/BENEFITS SECTION ========== */}
      <section className="section-padding" id="features">
        <div className="container-custom">
          {isParent ? (
            <>
              {/* THE REAL PROBLEM Section */}
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    THE <span className="text-red-400">REAL PROBLEM</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                  {realProblems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-xl text-blue-400 font-semibold">👉 SmartLearners.ai solves all of this.</p>
                </div>
              </div>

              {/* WHAT YOU GET AS A PARENT - WhatsApp Section */}
              <div className="glass-card p-8 bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/20 mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl">📱</div>
                      <span className="text-green-400 font-bold text-lg">Real-Time WhatsApp Updates</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">What You Get as a Parent</h3>
                    <div className="space-y-3 mb-6">
                      {whatsappFeatures.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <span className="text-green-400">✔️</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 italic">
                      No more guessing. You&apos;ll KNOW exactly where your child stands.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4">
                    <div className="bg-[#075E54] rounded-t-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm">🎓</div>
                      <div className="text-white text-sm font-medium">SmartLearners.ai</div>
                    </div>
                    <div className="bg-[#ECE5DD] p-3 rounded-b-xl space-y-2">
                      <div className="bg-white rounded-lg p-3 shadow-sm text-xs">
                        <p className="text-gray-800 font-medium">📊 Example Update</p>
                        <p className="text-gray-600 mt-1">&quot;Arjun practiced 5 questions today. 3 correct. 2 mistakes in Thermodynamics. Remedial plan sent.&quot;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TRADITIONAL vs SMARTLEARNERS Comparison */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Traditional <span className="text-red-400">vs</span> <span className="gradient-text">SmartLearners.ai</span>
                  </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-500/10 rounded-t-xl border-b-2 border-red-500">
                      <span className="font-bold text-red-400">Traditional</span>
                    </div>
                    <div className="text-center p-3 bg-green-500/10 rounded-t-xl border-b-2 border-green-500">
                      <span className="font-bold text-green-400">SmartLearners.ai</span>
                    </div>
                  </div>
                  {comparisonData.map((row, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-red-500/5 border-b border-white/5 flex items-center gap-2">
                        <span className="text-red-400">❌</span>
                        <span className="text-gray-400">{row.traditional}</span>
                      </div>
                      <div className="p-4 bg-green-500/5 border-b border-white/5 flex items-center gap-2">
                        <span className="text-green-400">✅</span>
                        <span className="text-gray-300">{row.smart}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* HOW IT WORKS - 3 Steps */}
              <div className="mb-16">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    💡 HOW IT <span className="gradient-text">WORKS</span>
                  </h2>
                  <p className="text-gray-400">3 Simple Steps</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {howItWorksSteps.map((item, index) => (
                    <div key={index} className="glass-card p-6 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xl font-bold text-white mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-gray-300">Parents get WhatsApp update automatically. 📲</p>
                </div>
              </div>

              {/* THE GAME-CHANGER - AI Correction */}
              <div className="glass-card p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/20 mb-16">
                <div className="text-center mb-8">
                  <div className="badge badge-primary mb-4">⭐ THE GAME-CHANGER FEATURE</div>
                  <h2 className="text-3xl font-bold text-white mb-2">AI CORRECTION</h2>
                  <p className="text-gray-400">Your child uploads handwritten answer. AI tells:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: '📍', text: 'Exact line where mistake started' },
                    { icon: '📍', text: 'Which concept is wrong' },
                    { icon: '📍', text: 'Correct method step-by-step' },
                    { icon: '📍', text: 'How to never repeat it' },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-gray-300 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-blue-400 font-semibold">This saves 2 hours of &quot;figuring out what went wrong.&quot;</p>
                </div>
              </div>

              {/* EXAM WEEK - 7-Day Guide */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    🎯 EXAM WEEK? <span className="gradient-text">NO PANIC.</span>
                  </h2>
                  <p className="text-gray-400">7-Day Exam Guide</p>
                </div>
                <div className="max-w-2xl mx-auto glass-card p-6">
                  <div className="space-y-3 mb-6">
                    {examGuide.map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5">
                        <span className="text-blue-400 font-bold min-w-[80px]">📅 {item.day}</span>
                        <span className="text-gray-300">{item.task}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-green-400 font-bold">Result: Confidence 60% → 99% ✅</p>
                    <p className="text-gray-400 text-sm mt-1">Parents get daily WhatsApp updates on progress.</p>
                  </div>
                </div>
              </div>

              {/* REAL RESULTS - Testimonials */}
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    📈 <span className="gradient-text">REAL RESULTS</span>
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {parentTestimonials.map((t, index) => (
                    <div key={index} className="glass-card p-6">
                      <div className="text-green-400 font-bold mb-3">&quot;{t.result}&quot;</div>
                      <p className="text-gray-300 italic mb-4">&quot;{t.quote}&quot;</p>
                      <p className="text-gray-500 text-sm">— {t.name}, {t.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FINAL MESSAGE FOR PARENTS */}
              <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
                <div className="text-4xl mb-4">❤️</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Final Message for Parents</h2>
                <p className="text-gray-300 text-lg mb-4">
                  You invest in school, tuition, and books.<br />
                  But one thing is missing:
                </p>
                <div className="max-w-xl mx-auto mb-6 space-y-2 text-left">
                  <p className="text-gray-300">✨ Someone who tracks <span className="text-blue-400 font-semibold">EVERY mistake</span>.</p>
                  <p className="text-gray-300">✨ Explains <span className="text-blue-400 font-semibold">WHY it happened</span>.</p>
                  <p className="text-gray-300">✨ Makes sure it <span className="text-green-400 font-semibold">NEVER repeats</span>.</p>
                </div>
                <p className="text-xl text-white font-semibold mb-6">That&apos;s SmartLearners.ai.</p>
                <div className="text-gray-400 mb-8">
                  When your child knows: <span className="text-white">WHAT</span> to write, <span className="text-white">HOW</span> to write it, <span className="text-white">WHY</span> it&apos;s correct —<br />
                  <span className="text-green-400 font-semibold">Marks improve automatically. 📈</span>
                </div>
                <Link href="/free-trial" className="btn-primary text-lg px-8 py-4">Start Free Trial Now →</Link>
                <p className="text-sm text-gray-500 mt-4">
                  ⏰ Limited: 500 students per batch (We limit for personalized AI tracking)
                </p>
              </div>
            </>
          ) : (
            <>
              {/* School View - Original Features */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powered by <span className="gradient-text">Advanced AI</span></h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our cutting-edge technology adapts to every learner&apos;s unique needs</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="glass-card p-6 hover-lift cursor-pointer">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4" style={{ background: `${feature.color}20` }}>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It <span className="gradient-text">Works</span></h2>
            <p className="text-xl text-gray-400">Get started in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Create your account and choose your class and subjects.', image: '/step-signup.png' },
              { step: '02', title: 'Learn with AI', desc: 'Get personalized lessons, practice tests, and AI tutoring.', image: '/step-learn-ai.png' },
              { step: '03', title: 'Track Progress', desc: 'Monitor your improvement with detailed analytics.', image: '/step-track-progress.png' },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6 text-center group hover-lift">
                <div className="w-full h-40 mx-auto rounded-2xl overflow-hidden mb-6 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-blue-400 font-bold text-sm mb-2">STEP {item.step}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="section-padding">
        <div className="container-custom">
          {isParent ? (
            <>
              {/* Parent Testimonials - What parents say */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Parents <span className="gradient-text">Love Us</span></h2>
                <p className="text-xl text-gray-400">Join thousands of happy parents</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "My son went from failing to topping his class. The daily WhatsApp reports keep me informed without nagging him!",
                    name: 'Sunita Verma',
                    role: 'Mother of Class 10 Student',
                    improvement: '45% → 88%'
                  },
                  {
                    quote: "Better than ₹5000/month tuition! My daughter actually understands concepts now. The AI explains things so clearly.",
                    name: 'Rajesh Kumar',
                    role: 'Father of Class 8 Student',
                    improvement: '52% → 85%'
                  },
                  {
                    quote: "Finally, I know what my child is actually studying. The weak area alerts helped us focus on what matters.",
                    name: 'Priya Mehta',
                    role: 'Mother of Class 7 Student',
                    improvement: '60% → 92%'
                  },
                ].map((t) => (
                  <div key={t.name} className="glass-card p-6 hover-lift">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-3xl text-blue-400">&quot;</div>
                      <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-bold">
                        {t.improvement}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* School Testimonials */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Loved by Learners & Educators</h2>
                <p className="text-xl text-gray-400">See what our community has to say</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="glass-card p-6 hover-lift">
                    <div className="text-3xl text-blue-400 mb-4">&quot;</div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ========== SUBJECTS ========== */}
      <section className="section-padding bg-white/[0.02]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Complete <span className="gradient-text">Curriculum</span></h2>
            <p className="text-xl text-gray-400">All subjects for Class 6-12</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Mathematics', icon: '📐', color: 'from-blue-500 to-blue-600' },
              { name: 'Science', icon: '🔬', color: 'from-green-500 to-green-600' },
              { name: 'English', icon: '📚', color: 'from-purple-500 to-purple-600' },
              { name: 'Social Studies', icon: '🌍', color: 'from-yellow-500 to-yellow-600' },
            ].map((subject) => (
              <div key={subject.name} className="glass-card p-6 text-center hover-lift">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center text-3xl mb-4`}>
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">{subject.name}</h3>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Learning?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of students and schools already using SmartLearners.ai</p>
              <div className="flex flex-wrap justify-center gap-4">
                {isParent ? (
                  <>
                    <Link href="/signup" className="btn-primary text-lg px-8 py-4">Get Started Free</Link>
                    <Link href="/contact" className="btn-secondary text-lg px-8 py-4">Schedule Demo</Link>
                  </>
                ) : (
                  <>
                    <Link href="/contact" className="btn-primary text-lg px-8 py-4" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>Schedule Demo</Link>
                    <Link href="/schools" className="btn-secondary text-lg px-8 py-4">Learn More</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}
    </div>
  )
}