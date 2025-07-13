import { BloodTestParameter } from '../types/medical';

export const REFERENCE_RANGES: Record<string, { min: number; max: number; unit: string }> = {
  'Hemoglobin': { min: 12.0, max: 16.0, unit: 'g/dL' },
  'White Blood Cells': { min: 4.5, max: 11.0, unit: '×10³/μL' },
  'Red Blood Cells': { min: 4.2, max: 5.4, unit: '×10⁶/μL' },
  'Platelets': { min: 150, max: 450, unit: '×10³/μL' },
  'Glucose': { min: 70, max: 100, unit: 'mg/dL' },
  'Cholesterol Total': { min: 0, max: 200, unit: 'mg/dL' },
  'HDL Cholesterol': { min: 40, max: 100, unit: 'mg/dL' },
  'LDL Cholesterol': { min: 0, max: 100, unit: 'mg/dL' },
  'Triglycerides': { min: 0, max: 150, unit: 'mg/dL' },
  'Vitamin D': { min: 30, max: 100, unit: 'ng/mL' },
  'Vitamin B12': { min: 200, max: 900, unit: 'pg/mL' },
  'Iron': { min: 60, max: 170, unit: 'μg/dL' },
  'Ferritin': { min: 15, max: 150, unit: 'ng/mL' },
  'TSH': { min: 0.4, max: 4.0, unit: 'mIU/L' },
  'Creatinine': { min: 0.6, max: 1.2, unit: 'mg/dL' },
};

export const SAMPLE_PARAMETERS: BloodTestParameter[] = [
  {
    name: 'Hemoglobin',
    value: 10.2,
    unit: 'g/dL',
    referenceRange: { min: 12.0, max: 16.0 },
    status: 'low',
    confidence: 0.98
  },
  {
    name: 'Vitamin D',
    value: 18.5,
    unit: 'ng/mL',
    referenceRange: { min: 30, max: 100 },
    status: 'low',
    confidence: 0.96
  },
  {
    name: 'Cholesterol Total',
    value: 245,
    unit: 'mg/dL',
    referenceRange: { min: 0, max: 200 },
    status: 'high',
    confidence: 0.99
  },
  {
    name: 'HDL Cholesterol',
    value: 45,
    unit: 'mg/dL',
    referenceRange: { min: 40, max: 100 },
    status: 'normal',
    confidence: 0.97
  },
  {
    name: 'Glucose',
    value: 85,
    unit: 'mg/dL',
    referenceRange: { min: 70, max: 100 },
    status: 'normal',
    confidence: 0.99
  }
];