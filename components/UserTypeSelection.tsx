'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
              className="cursor-pointer group relative overflow-hidden rounded-3xl border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #0c1929 0%, #0a1628 50%, #061020 100%)' }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)' }} />

              <div className="relative z-10 p-6 md:p-8">
                {/* Image Container */}
                <div className="w-full h-48 md:h-56 relative mb-6 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/parent-student.png"
                    alt="Parent and Student"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                  Parent / Student
                </h2>

                <p className="text-gray-400 text-center text-sm mb-6">
                  Individual learning path for students with personalized AI-powered education
                </p>

                <div className="text-center">
                  <button className="px-8 py-3 rounded-xl font-semibold text-white transition-all bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25">
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
              className="cursor-pointer group relative overflow-hidden rounded-3xl border-2 border-purple-500/30 hover:border-pink-400/60 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #1a0a29 0%, #180828 50%, #120520 100%)' }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Glow pattern overlay */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)' }} />

              <div className="relative z-10 p-6 md:p-8">
                {/* Image Container */}
                <div className="w-full h-48 md:h-56 relative mb-6 rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/school-management.png"
                    alt="School Management"
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
                  School Management
                </h2>

                <p className="text-gray-400 text-center text-sm mb-6">
                  Comprehensive exam analysis and gap assessment for educational institutions
                </p>

                <div className="text-center">
                  <button className="px-8 py-3 rounded-xl font-semibold text-white transition-all bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 hover:shadow-lg hover:shadow-purple-500/25">
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
