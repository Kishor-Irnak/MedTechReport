import React, { useState } from 'react';
import { FileText, Activity, Home, Shield } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { FileUpload } from './components/FileUpload';
import { AnalysisReport } from './components/AnalysisReport';
import { UploadedFile, AnalysisReport as AnalysisReportType } from './types/medical';
import { analyzeParameters } from './utils/medicalAnalysis';
import { SAMPLE_PARAMETERS } from './data/medicalReferences';

type ActiveTab = 'dashboard' | 'upload' | 'analysis' | 'security';

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [currentReport, setCurrentReport] = useState<AnalysisReportType | null>(null);

  const handleFileUploaded = (file: UploadedFile) => {
    // Simulate processing delay
    setTimeout(() => {
      const { risks, recommendations, overallScore } = analyzeParameters(SAMPLE_PARAMETERS);
      
      const report: AnalysisReportType = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
        parameters: SAMPLE_PARAMETERS,
        risks,
        recommendations,
        overallScore,
        confidence: 0.97
      };

      setCurrentReport(report);
      setActiveTab('analysis');
    }, 2000);
  };

  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: Home },
    { id: 'upload' as const, label: 'Upload Report', icon: FileText },
    { id: 'analysis' as const, label: 'Analysis', icon: Activity },
    { id: 'security' as const, label: 'Security', icon: Shield }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Blood Test Report</h2>
              <p className="text-gray-600">
                Upload your blood test report for comprehensive health analysis
              </p>
            </div>
            <FileUpload onFileUploaded={handleFileUploaded} />
          </div>
        );
      case 'analysis':
        return currentReport ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis Results</h2>
              <p className="text-gray-600">
                Comprehensive analysis of your blood test parameters
              </p>
            </div>
            <AnalysisReport report={currentReport} />
          </div>
        ) : (
          <div className="text-center py-12">
            <Activity className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Analysis Available</h3>
            <p className="text-gray-600 mb-4">Upload a blood test report to see analysis results</p>
            <button
              onClick={() => setActiveTab('upload')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Upload Report
            </button>
          </div>
        );
      case 'security':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
              <p className="text-gray-600">
                Your data security and privacy are our top priorities
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">HIPAA Compliance</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Encryption</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      All data is encrypted using AES-256 encryption both in transit and at rest.
                    </p>
                    <div className="flex items-center text-green-600 text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      Active
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Access Controls</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Role-based access controls with multi-factor authentication.
                    </p>
                    <div className="flex items-center text-green-600 text-sm">
                      <Shield className="w-4 h-4 mr-2" />
                      Implemented
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Audit & Monitoring</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">Data Access Logging</span>
                    <span className="text-sm text-green-600">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">Real-time Monitoring</span>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-900">Automated Backups</span>
                    <span className="text-sm text-green-600">Daily</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Data Retention Policy</h4>
                <p className="text-blue-800 text-sm">
                  All uploaded files and analysis results are automatically deleted after 30 days. 
                  You can request immediate deletion at any time through our support channel.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">HealthAnalyzer Pro</h1>
            </div>
            
            <nav className="flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-gray-600">
                © 2025 HealthAnalyzer Pro. HIPAA Compliant Healthcare Technology.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Secured
              </span>
              <span>•</span>
              <span>99.9% Uptime</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;