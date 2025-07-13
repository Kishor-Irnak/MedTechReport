import React from 'react';
import { Activity, FileText, Shield, Clock } from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">HealthAnalyzer Pro</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced blood test analysis system with AI-powered insights and HIPAA-compliant security
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Multi-Format Support</h3>
          <p className="text-sm text-gray-600">
            Upload PDF, image, or text reports up to 10MB with intelligent extraction
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">99% Accuracy</h3>
          <p className="text-sm text-gray-600">
            Medical-grade analysis with standardized reference ranges and confidence scoring
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
          <p className="text-sm text-gray-600">
            End-to-end encryption with audit trails and secure data handling
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
          <p className="text-sm text-gray-600">
            Get comprehensive health insights and recommendations in seconds
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Upload Report</h3>
            <p className="text-sm text-gray-600">
              Securely upload your blood test report in any supported format
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Extract Data</h3>
            <p className="text-sm text-gray-600">
              AI extracts all parameters and values with 99% confidence
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analyze Results</h3>
            <p className="text-sm text-gray-600">
              Compare against medical standards and identify risks
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-amber-600">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Insights</h3>
            <p className="text-sm text-gray-600">
              Receive detailed recommendations and action items
            </p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
        <div className="text-center mb-6">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h2>
          <p className="text-gray-600">Your health data is protected with military-grade security</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm">🔒</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">End-to-End Encryption</h4>
            <p className="text-sm text-gray-600">AES-256 encryption for all data</p>
          </div>

          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm">📋</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">HIPAA Compliant</h4>
            <p className="text-sm text-gray-600">Full healthcare data compliance</p>
          </div>

          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-sm">🗂️</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Audit Trails</h4>
            <p className="text-sm text-gray-600">Complete access logging</p>
          </div>
        </div>
      </div>
    </div>
  );
};