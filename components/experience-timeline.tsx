'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  highlights: string[]
}

const experiences: TimelineItem[] = [
  {
    year: 'May 2023 - Present',
    title: 'Senior QA Automation',
    company: 'Lumenalta (formerly Clevertech)',
    description: 'Built complete E2E automation framework and containerized CI/CD workflows from scratch',
    highlights: [
      'Built complete E2E automation framework using Cypress/TypeScript with custom data-generation utilities and advanced plugin integrations',
      'Engineered containerized CI/CD workflow in Azure DevOps with Docker images and parallel execution via docker-compose',
      'Increased coverage and stability through test development, pipeline failure analysis, and continuous reliability improvements'
    ]
  },
  {
    year: 'March 2022 - February 2023',
    title: 'Senior QA Automation',
    company: 'Avenue Code',
    description: 'Developed E2E/API automation and maintained existing test suites across multiple teams',
    highlights: [
      'Developed E2E/API automation scenarios in Playwright/TestCafe with JavaScript/TypeScript',
      'Maintained existing test suites running in Jenkins pipelines and provided QA support across multiple teams',
      'Reviewed and optimized GitHub Actions workflows to enhance automation reliability and efficiency'
    ]
  },
  {
    year: 'November 2019 - March 2022',
    title: 'Mid QA Automation',
    company: 'Encora (formerly Avantica)',
    description: 'Led QA initiatives with focus on scalability and infrastructure management',
    highlights: [
      'Developed and maintained UI and API automation using JavaScript/TestCafe and Python/PyTest with focus on scalability',
      'Led QA release responsibilities including bi-weekly production deployments, test planning, and defect triage',
      'Reviewed pull requests to ensure adherence to test design patterns and managed test assets across Docker, Kubernetes, and RabbitMQ infrastructure'
    ]
  },
  {
    year: 'August 2015 - July 2018',
    title: 'QA Automation Engineer',
    company: 'Rulesware LLC',
    description: 'Developed and maintained Selenium automation framework with API testing capabilities',
    highlights: [
      'Developed and maintained automation tests using Selenium WebDriver, TestNG, and data-driven scripts with Page Object Models',
      'Built reusable utilities to consume, parse, and validate RESTful API endpoints',
      'Improved backend test coverage and framework capabilities through robust API testing infrastructure'
    ]
  }
]

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Career Journey</h2>
        <p className="text-muted-foreground">
          Progression through quality engineering from Junior QA to Senior SDET
        </p>
      </div>

      <div className="relative space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-6">
            {/* Timeline connector */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
              )}
            </div>

            {/* Content */}
            <Card className="flex-1 border-border/50 overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit text-xs whitespace-nowrap">
                    {exp.year}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <span className="text-primary font-bold flex-shrink-0">→</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
