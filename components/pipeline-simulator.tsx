'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Clock, Play } from 'lucide-react'

interface PipelineStep {
  name: string
  status: 'idle' | 'running' | 'success' | 'failed'
  duration?: number
  logs?: string[]
}

const defaultSteps: PipelineStep[] = [
  { name: 'Lint & Format', status: 'idle', logs: [] },
  { name: 'Unit Tests', status: 'idle', logs: [] },
  { name: 'E2E Tests', status: 'idle', logs: [] },
  { name: 'Security Scan', status: 'idle', logs: [] },
]

const mockLogs = [
  'Initializing Playwright environment...',
  'Setting up Chrome browser instance...',
  'Loading test suites...',
  'Running authentication flow tests...',
  'Testing form validations...',
  'Running API endpoint tests...',
  'Performing accessibility checks...',
  'Executing K6 load tests...',
  'Analyzing code coverage...',
  'Running OWASP security scan...',
  'Checking for dependencies vulnerabilities...',
  'Generating test report...',
]

export function PipelineSimulator() {
  const [steps, setSteps] = useState<PipelineStep[]>(defaultSteps)
  const [isRunning, setIsRunning] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])
  const consoleEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [consoleLogs])

  const runPipeline = async () => {
    setIsRunning(true)
    setConsoleLogs([])
    setSteps(defaultSteps.map(step => ({ ...step, status: 'idle', logs: [] })))

    for (let i = 0; i < steps.length; i++) {
      // Update step to running
      setSteps(prev => {
        const newSteps = [...prev]
        newSteps[i].status = 'running'
        return newSteps
      })

      // Simulate logs
      const stepLogs = mockLogs.slice(i * 3, (i + 1) * 3)
      for (const log of stepLogs) {
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 400))
        setConsoleLogs(prev => [...prev, log])
      }

      // Randomly simulate a failure or success
      const duration = 1000 + Math.random() * 2000
      await new Promise(resolve => setTimeout(resolve, duration))

      // For demo, always succeed (could add random failures)
      setSteps(prev => {
        const newSteps = [...prev]
        newSteps[i].status = 'success'
        newSteps[i].duration = Math.round(duration)
        return newSteps
      })
    }

    setIsRunning(false)
    setConsoleLogs(prev => [...prev, '✓ All checks passed! Ready to deploy.'])
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-secondary/40 border-border/50 hover:border-primary/30 transition-all hover:bg-secondary/60 animate-fade-in-up" style={{ animationDelay: '0s' }}>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-2">Experience Level</div>
            <div className="text-3xl font-bold text-primary">9+</div>
            <div className="text-xs text-muted-foreground mt-1">Years in QA Automation</div>
          </CardContent>
        </Card>

        <Card className="bg-secondary/40 border-border/50 hover:border-primary/30 transition-all hover:bg-secondary/60 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-2">Tests Automated</div>
            <div className="text-3xl font-bold text-primary">5k+</div>
            <div className="text-xs text-muted-foreground mt-1">Across multiple frameworks</div>
          </CardContent>
        </Card>

        <Card className="bg-secondary/40 border-border/50 hover:border-primary/30 transition-all hover:bg-secondary/60 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground mb-2">Coverage Rate</div>
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-xs text-muted-foreground mt-1">E2E & API test coverage</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50 overflow-hidden">
        {isRunning && (
          <div className="h-1 bg-secondary/50 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" style={{
              animation: 'shimmer 2s infinite',
            }} />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>CI/CD Pipeline Simulator</CardTitle>
              <CardDescription>Run a live test pipeline to see my automation expertise in action</CardDescription>
            </div>
            <Button
              onClick={runPipeline}
              disabled={isRunning}
              size="lg"
              className="gap-2"
            >
              <Play className="h-4 w-4" />
              {isRunning ? 'Running...' : 'Run Pipeline'}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Pipeline Steps */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  {step.status === 'running' && (
                    <Clock className="h-4 w-4 text-primary animate-spin" />
                  )}
                  {step.status === 'success' && (
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  )}
                  {step.status === 'failed' && (
                    <AlertCircle className="h-4 w-4 text-destructive" />
                  )}
                  {step.status === 'idle' && (
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-medium text-sm">{step.name}</span>
                    {step.status === 'success' && (
                      <Badge variant="outline" className="text-xs">
                        {step.duration}ms
                      </Badge>
                    )}
                  </div>

                  {step.status === 'running' && (
                    <div className="w-full bg-secondary rounded-full h-1 overflow-hidden">
                      <div className="bg-primary h-full animate-pulse" style={{
                        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Console Output */}
          {consoleLogs.length > 0 && (
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="text-xs text-muted-foreground mb-3 font-mono">CONSOLE OUTPUT</div>
              <div className="bg-secondary/50 rounded-lg p-4 font-mono text-xs text-primary border border-border/50 max-h-48 overflow-y-auto">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="text-muted-foreground mb-1">
                    <span className="text-primary">{'>'}</span> {log}
                  </div>
                ))}
                <div ref={consoleEndRef} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
