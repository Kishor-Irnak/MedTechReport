import React from 'react';
import { AnalysisReport as AnalysisReportType } from '../types/medical';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface AnalysisReportProps {
  report: AnalysisReportType;
}

export const AnalysisReport: React.FC<AnalysisReportProps> = ({ report }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'low':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'high':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'critical':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-4 h-4" />;
      case 'low':
        return <TrendingDown className="w-4 h-4" />;
      case 'high':
        return <TrendingUp className="w-4 h-4" />;
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getRiskColor = (likelihood: string) => {
    switch (likelihood) {
      case 'low':
        return 'text-green-700 bg-green-100';
      case 'moderate':
        return 'text-amber-700 bg-amber-100';
      case 'high':
        return 'text-red-700 bg-red-100';
      case 'critical':
        return 'text-red-800 bg-red-200';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'text-gray-700 bg-gray-100';
      case 'medium':
        return 'text-blue-700 bg-blue-100';
      case 'high':
        return 'text-amber-700 bg-amber-100';
      case 'urgent':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Overall Health Score */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Analysis Report</h2>
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4">
            <span className="text-3xl font-bold">{report.overallScore}</span>
          </div>
          <p className="text-lg text-gray-600">Overall Health Score</p>
          <p className="text-sm text-gray-500 mt-2">
            Analysis Confidence: {Math.round(report.confidence * 100)}%
          </p>
        </div>
      </div>

      {/* Blood Parameters */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Blood Test Parameters</h3>
          <p className="text-sm text-gray-600 mt-1">Detailed analysis of your blood work</p>
        </div>
        
        <div className="p-6">
          <div className="grid gap-4">
            {report.parameters.map((param, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg border ${getStatusColor(param.status)}`}>
                    {getStatusIcon(param.status)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{param.name}</h4>
                    <p className="text-sm text-gray-600">
                      Normal: {param.referenceRange.min}-{param.referenceRange.max} {param.unit}
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-lg text-gray-900">
                    {param.value} {param.unit}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(param.status)}`}>
                      {param.status}
                    </span>
                    <span className="text-xs text-gray-500">
                      {Math.round(param.confidence * 100)}% confident
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Risks */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Identified Health Risks</h3>
          <p className="text-sm text-gray-600 mt-1">Potential conditions based on your results</p>
        </div>
        
        <div className="p-6">
          {report.risks.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900">No Significant Risks Identified</h4>
              <p className="text-gray-600 mt-2">Your blood work shows no major health concerns.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {report.risks.map((risk, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{risk.condition}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getRiskColor(risk.likelihood)}`}>
                          {risk.likelihood} risk
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{risk.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Related: {risk.parameters.join(', ')}</span>
                        <span>Confidence: {Math.round(risk.confidence * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Personalized Recommendations</h3>
          <p className="text-sm text-gray-600 mt-1">Action items to improve your health</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {report.recommendations.map((rec, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{rec.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getPriorityColor(rec.priority)}`}>
                      {rec.priority} priority
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {rec.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{rec.description}</p>
                <p className="text-xs text-gray-500">Timeline: {rec.timeframe}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
          <div>
            <h4 className="font-semibold text-blue-900">Medical Disclaimer</h4>
            <p className="text-blue-800 text-sm mt-1">
              This analysis is for informational purposes only and should not replace professional medical advice. 
              Please consult with your healthcare provider before making any changes to your treatment plan.
            </p>
            <p className="text-blue-700 text-xs mt-2">
              🔒 HIPAA Compliant • End-to-End Encrypted • Audit Trail Maintained
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};