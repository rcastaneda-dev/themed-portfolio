'use client'

import React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Zap, Code2, Container, Shield } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  frameworks: string[]
  icon: React.ReactNode
  testResults: {
    status: 'passing' | 'failing' | 'warning'
    passed: number
    failed: number
    skipped: number
    duration: string
  }
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Lumenalta E2E Automation Framework',
    description: 'Built complete E2E automation framework from scratch using Cypress/TypeScript with custom data-generation utilities and advanced plugin integrations.',
    frameworks: ['Cypress', 'TypeScript', 'Page Object Model', 'Data Generation'],
    icon: <Code2 className="w-8 h-8" />,
    testResults: {
      status: 'passing',
      passed: 1456,
      failed: 0,
      skipped: 8,
      duration: '5m 12s'
    }
  },
  {
    id: '2',
    title: 'Azure DevOps CI/CD Pipeline',
    description: 'Engineered containerized CI/CD workflow in Azure DevOps with Docker images and parallel execution via docker-compose.',
    frameworks: ['Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD'],
    icon: <Container className="w-8 h-8" />,
    testResults: {
      status: 'passing',
      passed: 1089,
      failed: 0,
      skipped: 5,
      duration: '3m 47s'
    }
  },
  {
    id: '3',
    title: 'Multi-Framework API Testing Suite',
    description: 'Developed E2E/API automation scenarios using Playwright, TestCafe, and JavaScript/TypeScript with comprehensive API coverage.',
    frameworks: ['Playwright', 'TestCafe', 'JavaScript', 'TypeScript', 'API Testing'],
    icon: <Zap className="w-8 h-8" />,
    testResults: {
      status: 'passing',
      passed: 892,
      failed: 0,
      skipped: 3,
      duration: '2m 28s'
    }
  },
  {
    id: '4',
    title: 'Selenium WebDriver Framework',
    description: 'Developed and maintained automation tests using Selenium WebDriver, TestNG, and data-driven scripts with Page Object Model patterns.',
    frameworks: ['Selenium WebDriver', 'TestNG', 'Java', 'Page Object Model'],
    icon: <Shield className="w-8 h-8" />,
    testResults: {
      status: 'passing',
      passed: 734,
      failed: 0,
      skipped: 2,
      duration: '4m 15s'
    }
  }
]

export function ProjectsGallery() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Project Gallery</h2>
        <p className="text-muted-foreground">
          Showcase of automation frameworks and test infrastructure projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="relative group" style={{ opacity: 1 }}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl pointer-events-none" />

            {/* Glass effect card */}
            <div className="relative bg-secondary/40 backdrop-blur-sm border border-border/30 rounded-lg p-4 md:p-6 h-full hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Icon header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 group-hover:from-primary/50 group-hover:to-primary/30 transition-all">
                  <div className="text-primary">{project.icon}</div>
                </div>
              </div>

              {/* Title and description */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
              </div>

              {/* Frameworks */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.frameworks.slice(0, 3).map(framework => (
                  <Badge
                    key={framework}
                    variant="secondary"
                    className="text-xs font-mono bg-primary/10 text-primary hover:bg-primary/20 border-primary/30"
                  >
                    {framework}
                  </Badge>
                ))}
                {project.frameworks.length > 3 && (
                  <Badge variant="secondary" className="text-xs font-mono bg-muted/50 text-muted-foreground">
                    +{project.frameworks.length - 3}
                  </Badge>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-border/0 via-border/50 to-border/0 my-4" />

              {/* Test Results */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.testResults.status === 'passing' ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-primary animate-pulse-glow" />
                        <span className="text-sm font-medium text-primary">Passing</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-destructive" />
                        <span className="text-sm font-medium text-destructive">Failed</span>
                      </>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono bg-secondary/50 px-2 py-1 rounded">
                    {project.testResults.duration}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-primary/5 border border-primary/20 rounded p-2 text-center group-hover:bg-primary/10 transition-colors">
                    <div className="font-bold text-primary">{project.testResults.passed}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Passed</div>
                  </div>
                  <div className="bg-secondary/50 border border-border/30 rounded p-2 text-center">
                    <div className="font-bold text-destructive">{project.testResults.failed}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Failed</div>
                  </div>
                  <div className="bg-secondary/50 border border-border/30 rounded p-2 text-center">
                    <div className="font-bold text-muted-foreground">{project.testResults.skipped}</div>
                    <div className="text-muted-foreground text-xs mt-0.5">Skipped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
