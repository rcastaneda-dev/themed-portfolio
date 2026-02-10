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
    title: 'E2E Testing Framework',
    description: 'Enterprise-grade Playwright framework with advanced reporting and cross-browser testing capabilities.',
    frameworks: ['Playwright', 'TypeScript', 'Page Object Model'],
    testResults: {
      status: 'passing',
      passed: 1248,
      failed: 0,
      skipped: 3,
      duration: '4m 23s'
    }
  },
  {
    id: 2,
    title: 'API Test Suite',
    description: 'Comprehensive REST API testing with contract validation and performance benchmarking.',
    frameworks: ['Jest', 'SuperTest', 'K6 Load Testing'],
    testResults: {
      status: 'passing',
      passed: 892,
      failed: 0,
      skipped: 8,
      duration: '2m 15s'
    }
  },
  {
    id: 3,
    title: 'Mobile Test Automation',
    description: 'iOS and Android test automation with visual regression testing and real device support.',
    frameworks: ['Appium', 'WebdriverIO', 'Detox'],
    testResults: {
      status: 'passing',
      passed: 567,
      failed: 2,
      skipped: 5,
      duration: '3m 42s'
    }
  },
  {
    id: 4,
    title: 'CI/CD Integration Suite',
    description: 'Complete pipeline automation with GitHub Actions, Docker, and test reporting integrations.',
    frameworks: ['GitHub Actions', 'Docker', 'Allure Reports'],
    testResults: {
      status: 'passing',
      passed: 543,
      failed: 0,
      skipped: 1,
      duration: '1m 58s'
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
