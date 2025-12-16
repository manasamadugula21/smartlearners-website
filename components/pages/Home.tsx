'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useUserType } from '@/contexts/UserTypeContext'
import UserTypeSelection from '@/components/UserTypeSelection'

const features = [
  { icon: '🤖', title: 'AI-Chatbot', desc: 'Get instant help from our AI tutor available 24/7. Ask questions and receive personalized guidance.', color: '#60a5fa' },
  { icon: '📊', title: 'Smart Analytics', desc: 'Track progress with detailed insights. Identify strengths and get recommendations.', color: '#a855f7' },
  { icon: '🎮', title: 'Gamified Learning', desc: 'Earn points, badges. Make learning fun and stay motivated.', color: '#f472b6' },
  { icon: '🧪', title: 'Practice Tests', desc: 'Prepare with AI-generated practice tests that adapt to your skill level.', color: '#fbbf24' },
  { icon: '📚', title: 'CBSE & JEE FOUNDATION', desc: 'Complete curriculum coverage for Class 6-12 aligned with CBSE and JEE FOUNDATION.', color: '#fb7185' },
  { icon: '🚀', title: 'JEE Mains & Advanced', desc: 'Complete JEE preparation with topic-wise practice, mock tests, challenging problems, and AI-powered solutions for Class 11 & 12.', color: '#f59e0b' },
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
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-shape" style={{ width: 400, height: 400, background: '#3b82f6', top: '10%', left: '-10%' }} />
        <div className="floating-shape" style={{ width: 300, height: 300, background: '#a855f7', top: '60%', right: '-5%', animationDelay: '2s' }} />
        <div className="floating-shape" style={{ width: 250, height: 250, background: '#f472b6', bottom: '10%', left: '30%', animationDelay: '4s' }} />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="badge badge-primary mb-8">
              🚀 AI-Powered Learning Platform for Class 6-12
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              NO.1 Agentic AI<br />
              <span className="gradient-text">All-in-One Educational Platform</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Personalized <span className="text-blue-400 font-bold">CBSE</span> & <span className="text-purple-400 font-bold">JEE FOUNDATION</span> courses for Class 6-12. AI-powered learning paths, adaptive assessments, and real-time progress tracking.
            </motion.p>

            {userType && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mb-16">
                {isParent ? (
                  <>
                    <Link href="/signup" className="btn-primary text-lg px-8 py-4">Start Learning Free →</Link>
                    <Link href="/contact" className="btn-secondary text-lg px-8 py-4">Book a Demo</Link>
                  </>
                ) : (
                  <>
                    <Link href="/contact" className="btn-primary text-lg px-8 py-4" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>Schedule Demo →</Link>
                    <Link href="/schools" className="btn-secondary text-lg px-8 py-4">Learn More</Link>
                  </>
                )}
              </motion.div>
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
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-4xl mb-6">🎯</div>
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

      {/* ========== FEATURES SECTION ========== */}
      <section className="section-padding" id="features">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powered by <span className="gradient-text">Advanced AI</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our cutting-edge technology adapts to every learner&apos;s unique needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-6 hover-lift cursor-pointer">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4" style={{ background: `${feature.color}20` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
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
              { step: '01', title: 'Sign Up', desc: 'Create your account and choose your class and subjects.', icon: '📝' },
              { step: '02', title: 'Learn with AI', desc: 'Get personalized lessons, practice tests, and AI tutoring.', icon: '🤖' },
              { step: '03', title: 'Track Progress', desc: 'Monitor your improvement with detailed analytics.', icon: '📈' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl mb-6">
                  {item.icon}
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