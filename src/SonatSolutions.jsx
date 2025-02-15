import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { ArrowUpRight, BarChart3, GitCompare, LineChart, RefreshCw, Shield } from 'lucide-react';

const SonatSolutions = () => {
  const solutions = [
    {
      name: 'SONAT Insight™',
      description: 'Advanced ESG Analytics Platform',
      features: [
        'Real-time ESG monitoring',
        'Custom analytics dashboard',
        'Predictive modeling',
        'Automated reporting'
      ],
      icon: <LineChart className="h-8 w-8 text-blue-600" />,
      category: 'Analytics Platform'
    },
    {
      name: 'SONAT Transform™',
      description: 'ESG Transformation Suite',
      features: [
        'Strategy development',
        'Implementation framework',
        'Change management',
        'Performance tracking'
      ],
      icon: <RefreshCw className="h-8 w-8 text-green-600" />,
      category: 'Transformation'
    },
    {
      name: 'SONAT Metrics™',
      description: 'ESG Data Management',
      features: [
        'Data collection & validation',
        'Regulatory reporting',
        'Benchmarking',
        'Impact measurement'
      ],
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      category: 'Metrics & Reporting'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Risk Analytics',
      description: 'Advanced risk modeling and scenario analysis',
      icon: <Shield className="h-6 w-6 text-red-500" />
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing systems',
      icon: <GitCompare className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Strategic Advisory',
      description: 'Expert guidance and strategy development',
      icon: <ArrowUpRight className="h-6 w-6 text-green-500" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SONAT Solutions</h1>
        <p className="text-gray-600">Comprehensive ESG Analytics & Transformation</p>
      </div>

      {/* Main Solutions */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {solutions.map((solution, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                {solution.icon}
                <span className="text-sm text-gray-500">{solution.category}</span>
              </div>
              <CardTitle className="text-xl mb-1">{solution.name}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enterprise Features */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SonatSolutions;