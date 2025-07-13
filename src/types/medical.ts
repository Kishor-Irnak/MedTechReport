export interface BloodTestParameter {
  name: string;
  value: number;
  unit: string;
  referenceRange: {
    min: number;
    max: number;
  };
  status: 'normal' | 'low' | 'high' | 'critical';
  confidence: number;
}

export interface HealthRisk {
  condition: string;
  likelihood: 'low' | 'moderate' | 'high' | 'critical';
  description: string;
  parameters: string[];
  confidence: number;
}

export interface Recommendation {
  type: 'dietary' | 'supplement' | 'lifestyle' | 'medical';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  timeframe: string;
}

export interface AnalysisReport {
  id: string;
  timestamp: Date;
  parameters: BloodTestParameter[];
  risks: HealthRisk[];
  recommendations: Recommendation[];
  overallScore: number;
  confidence: number;
}

export interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: number;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
}