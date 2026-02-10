'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  frameworks: string[]
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
    id: 1,
    title: 'Lumenalta E2E Automation Framework',
    description: 'Built complete E2E automation framework from scratch using Cypress/TypeScript with custom data-generation utilities and advanced plugin integrations.',
    frameworks: ['Cypress', 'TypeScript', 'Page Object Model', 'Data Generation'],
    testResults: {
      status: 'passing',
      passed: 1456,
      failed: 0,
      skipped: 8,
      duration: '5m 12s'
    }
  },
  {
    id: 2,
    title: 'Azure DevOps CI/CD Pipeline',
    description: 'Engineered containerized CI/CD workflow in Azure DevOps with Docker images and parallel execution via docker-compose.',
    frameworks: ['Azure DevOps', 'Docker', 'Docker Compose', 'CI/CD'],
    testResults: {
      status: 'passing',
      passed: 1089,
      failed: 0,
      skipped: 5,
      duration: '3m 47s'
    }
  },
  {
    id: 3,
    title: 'Multi-Framework API Testing Suite',
    description: 'Developed E2E/API automation scenarios using Playwright, TestCafe, and JavaScript/TypeScript with comprehensive API coverage.',
    frameworks: ['Playwright', 'TestCafe', 'JavaScript', 'TypeScript', 'API Testing'],
    testResults: {
      status: 'passing',
      passed: 892,
      failed: 0,
      skipped: 3,
      duration: '2m 28s'
    }
  },
  {
    id: 4,
    title: 'Selenium WebDriver Framework',
    description: 'Developed and maintained automation tests using Selenium WebDriver, TestNG, and data-driven scripts with Page Object Model patterns.',
    frameworks: ['Selenium WebDriver', 'TestNG', 'Java', 'Page Object Model'],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(project => (
          <Card key={project.id} className="border-border/50 overflow-hidden group hover:border-primary/50 transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="mt-1">{project.description}</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Frameworks */}
              <div className="flex flex-wrap gap-2">
                {project.frameworks.map(framework => (
                  <Badge
                    key={framework}
                    variant="secondary"
                    className="text-xs font-mono"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>

              {/* Test Results */}
              <div className="pt-3 border-t border-border/50">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {project.testResults.status === 'passing' ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Build: Passing</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-4 w-4 text-destructive" />
                          <span className="text-sm font-medium text-destructive">Build: Failed</span>
                        </>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {project.testResults.duration}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-secondary/50 rounded p-2 text-center">
                      <div className="font-bold text-primary">{project.testResults.passed}</div>
                      <div className="text-muted-foreground">Passed</div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2 text-center">
                      <div className="font-bold text-destructive">{project.testResults.failed}</div>
                      <div className="text-muted-foreground">Failed</div>
                    </div>
                    <div className="bg-secondary/50 rounded p-2 text-center">
                      <div className="font-bold text-muted-foreground">{project.testResults.skipped}</div>
                      <div className="text-muted-foreground">Skipped</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
