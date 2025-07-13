import { BloodTestParameter, HealthRisk, Recommendation } from '../types/medical';

export const analyzeParameters = (parameters: BloodTestParameter[]): {
  risks: HealthRisk[];
  recommendations: Recommendation[];
  overallScore: number;
} => {
  const risks: HealthRisk[] = [];
  const recommendations: Recommendation[] = [];

  // Analyze each parameter for risks
  parameters.forEach(param => {
    if (param.name === 'Hemoglobin' && param.status === 'low') {
      risks.push({
        condition: 'Iron Deficiency Anemia',
        likelihood: 'moderate',
        description: 'Low hemoglobin levels may indicate iron deficiency anemia',
        parameters: ['Hemoglobin'],
        confidence: 0.85
      });
      
      recommendations.push({
        type: 'dietary',
        title: 'Increase Iron-Rich Foods',
        description: 'Include lean meats, spinach, lentils, and fortified cereals in your diet',
        priority: 'medium',
        timeframe: '2-3 months'
      });
    }

    if (param.name === 'Vitamin D' && param.status === 'low') {
      risks.push({
        condition: 'Vitamin D Deficiency',
        likelihood: 'high',
        description: 'Low vitamin D levels can affect bone health and immune function',
        parameters: ['Vitamin D'],
        confidence: 0.92
      });

      recommendations.push({
        type: 'supplement',
        title: 'Vitamin D3 Supplementation',
        description: 'Take 2000-4000 IU of Vitamin D3 daily with meals',
        priority: 'high',
        timeframe: '1-2 months'
      });
    }

    if (param.name === 'Cholesterol Total' && param.status === 'high') {
      risks.push({
        condition: 'Cardiovascular Disease Risk',
        likelihood: 'moderate',
        description: 'Elevated cholesterol increases risk of heart disease',
        parameters: ['Cholesterol Total'],
        confidence: 0.78
      });

      recommendations.push({
        type: 'lifestyle',
        title: 'Heart-Healthy Diet',
        description: 'Reduce saturated fats, increase omega-3 fatty acids, and exercise regularly',
        priority: 'medium',
        timeframe: '3-6 months'
      });
    }
  });

  // Calculate overall health score
  const normalParams = parameters.filter(p => p.status === 'normal').length;
  const overallScore = Math.round((normalParams / parameters.length) * 100);

  return { risks, recommendations, overallScore };
};

export const getParameterStatus = (value: number, min: number, max: number): 'normal' | 'low' | 'high' | 'critical' => {
  if (value < min * 0.7 || value > max * 1.3) return 'critical';
  if (value < min) return 'low';
  if (value > max) return 'high';
  return 'normal';
};

export const generateConfidenceScore = (): number => {
  return Math.random() * 0.1 + 0.9; // 90-100% confidence
};