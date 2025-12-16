'use client'

import { motion } from 'framer-motion'
import { useUserType } from '@/contexts/UserTypeContext'

export default function UserTypeSelection() {
  const { setUserType } = useUserType()

  const handleSelection = (type: 'parent' | 'school') => {
    setUserType(type)
  }

  return (
    <section className="section-padding relative">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Are you a <span className="gradient-text">Parent</span> or <span className="gradient-text">School Management</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Select the option that best describes you to get a personalized experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Parent / Student Option */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => handleSelection('parent')}
              className="glass-card p-8 md:p-12 cursor-pointer hover-lift group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                  👨‍👩‍👧‍👦
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  Parent / Student
                </h2>

                <p className="text-gray-400 text-center mb-8">
                  Individual learning path for students with personalized AI-powered education
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'AI-powered personalized learning',
                    'NCERT Class 6-12 courses',
                    'Adaptive practice questions',
                    'Progress tracking & analytics',
                    'Individual pricing plans'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="text-blue-400 text-xl">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button className="btn-primary w-full text-lg py-4">
                    Select Parent/Student →
                  </button>
                </div>
              </div>
            </motion.div>

            {/* School Management Option */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleSelection('school')}
              className="glass-card p-8 md:p-12 cursor-pointer hover-lift group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform">
                  🏫
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 text-center">
                  School Management
                </h2>

                <p className="text-gray-400 text-center mb-8">
                  Comprehensive exam analysis and gap assessment for educational institutions
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Detailed exam performance reports',
                    'Chapter-wise gap analysis',
                    'Student strength & weakness mapping',
                    'Class & section analytics',
                    'Bulk pricing for institutions'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="text-purple-400 text-xl">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button className="btn-primary w-full text-lg py-4" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                    Select School Management →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
