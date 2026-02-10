'use client'

import React from "react"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Zap, Container, Shield, Braces, TestTubes, Cpu, CheckCircle2 } from 'lucide-react'

interface TechCategory {
  name: string
  icon: React.ReactNode
  technologies: string[]
  description: string
}

const techStack: TechCategory[] = [
  {
    name: 'Languages & Core',
    icon: <Braces className="h-6 w-6" />,
    description: 'Primary programming languages for automation',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Bash', 'HTML/CSS']
  },
  {
    name: 'Testing Frameworks',
    icon: <TestTubes className="h-6 w-6" />,
    description: 'End-to-end and unit testing tools',
    technologies: ['Cypress', 'Playwright', 'TestCafe', 'Selenium WebDriver', 'TestNG', 'PyTest', 'Jest', 'Mocha']
  },
  {
    name: 'DevOps & Infrastructure',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Pipeline automation and containerization',
    technologies: ['Azure DevOps', 'GitHub Actions', 'Jenkins', 'Docker', 'Docker Compose', 'Kubernetes', 'GitLab CI']
  },
  {
    name: 'Testing & Quality Tools',
    icon: <CheckCircle2 className="h-6 w-6" />,
    description: 'Reporting and quality analysis',
    technologies: ['Allure Reports', 'Mochawesome', 'Test Reports', 'SonarQube', 'Visual Regression', 'Performance Testing']
  }
]

export function TechStack() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Tech Stack</h2>
        <p className="text-muted-foreground">
          Comprehensive suite of tools and frameworks used in quality engineering
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techStack.map((category, index) => (
          <Card key={index} className="border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-base">{category.name}</CardTitle>
              </div>
              <p className="text-xs text-muted-foreground">{category.description}</p>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map(tech => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="font-mono text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
