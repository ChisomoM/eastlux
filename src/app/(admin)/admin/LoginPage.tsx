import React from "react";
import { LoginForm } from "@/components/auth/loginForm";
import { Shield, ArrowRight, Lock } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

interface LoginPageProps {
  onSignUpClick: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSignUpClick }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Hero-image.png"
            alt="Easttlux Ventures"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-main-900/90 via-brand-main-900/70 to-brand-secondary-500/80" />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-12">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white">Easttlux</h2>
            <p className="text-brand-secondary-300 text-sm mt-1">Ventures Limited</p>
          </motion.div>

          {/* Value proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-white leading-tight">
                Empowering Growth Across Zambia
              </h3>
              <p className="text-xl text-gray-200">
                Deploy, train, and manage field forces that drive financial inclusion and trade growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-brand-secondary-300">Active DSAs</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-brand-secondary-300">Districts</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white">40+</div>
                <div className="text-sm text-brand-secondary-300">Clients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-main-900">Easttlux</h2>
            <p className="text-brand-secondary-500 text-sm">Ventures Limited</p>
          </div>

          {/* Form header */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-main-900 to-brand-secondary-500 rounded-2xl mb-6"
            >
              <Shield className="w-7 h-7 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to access your admin dashboard
            </p>
          </div>

          {/* Login form */}
          <LoginForm onSignUpClick={onSignUpClick} />

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <p className="text-sm text-center text-gray-600">
              Protected by enterprise-grade security
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};