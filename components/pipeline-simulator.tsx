'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, AlertCircle, Clock, Play, Timer, FlaskConical, Shield, Database } from 'lucide-react'

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
      setSteps(prev => {
        const newSteps = [...prev]
        newSteps[i].status = 'running'
        return newSteps
      })

      const stepLogs = mockLogs.slice(i * 3, (i + 1) * 3)
      for (const log of stepLogs) {
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 400))
        setConsoleLogs(prev => [...prev, log])
      }

      const duration = 1000 + Math.random() * 2000
      await new Promise(resolve => setTimeout(resolve, duration))

      setSteps(prev => {
        const newSteps = [...prev]
        newSteps[i].status = 'success'
        newSteps[i].duration = Math.round(duration)
        return newSteps
      })
    }

    setIsRunning(false)
    setConsoleLogs(prev => [...prev, 'All checks passed. Ready to deploy.'])
  }

  const metrics = [
    { label: 'Experience', value: '10+', unit: 'Years in Test Automation', icon: <Timer className="h-5 w-5" /> },
    { label: 'Tests Automated', value: '2k+', unit: 'Across frameworks', icon: <FlaskConical className="h-5 w-5" /> },
    { label: 'Test Factories', value: 'Dynamic', unit: 'Fishery + Faker.js + Zod', icon: <Database className="h-5 w-5" /> },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Command Center</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Quality Engineering Dashboard</h2>
        <p className="text-muted-foreground max-w-xl">
          Senior SDET with over a decade of experience in test automation and software development. Expert in framework development, test architecture, E2E/API testing, and shift-left engineering.
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className="card-elevated rounded-xl p-5 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/8 text-primary">
                {metric.icon}
              </div>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">{metric.label}</span>
            </div>
            <div className="text-3xl font-bold text-gradient-primary mb-1">{metric.value}</div>
            <div className="text-xs text-muted-foreground">{metric.unit}</div>
          </div>
        ))}
      </div>

      {/* Pipeline Card */}
      <Card className="border-border/40 overflow-hidden bg-card/80 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        {isRunning && (
          <div className="h-0.5 bg-secondary/50 overflow-hidden">
            <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent" style={{
              animation: 'shimmer 1.5s infinite',
            }} />
          </div>
        )}
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <CardTitle className="text-base sm:text-lg font-semibold">CI/CD Pipeline Simulator</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Run a live pipeline to see automation expertise in action</CardDescription>
            </div>
            <Button
              onClick={runPipeline}
              disabled={isRunning}
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all w-full sm:w-auto"
            >
              <Play className="h-4 w-4" />
              {isRunning ? 'Running...' : 'Run Pipeline'}
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Pipeline Steps */}
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 ${
                  step.status === 'running' ? 'bg-primary/5 border border-primary/15' :
                  step.status === 'success' ? 'bg-primary/3' :
                  'hover:bg-secondary/30'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  step.status === 'success' ? 'bg-primary/15' :
                  step.status === 'running' ? 'bg-primary/20' :
                  'bg-secondary/60'
                }`}>
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
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`font-medium text-sm transition-colors ${
                      step.status === 'success' || step.status === 'running' ? 'text-foreground' : 'text-muted-foreground'
                    }`}>{step.name}</span>
                    {step.status === 'success' && (
                      <Badge variant="outline" className="text-[10px] font-mono border-primary/20 text-primary/80">
                        {step.duration}ms
                      </Badge>
                    )}
                  </div>

                  {step.status === 'running' && (
                    <div className="w-full bg-secondary/40 rounded-full h-0.5 mt-2 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{
                        animation: 'shimmer 2s infinite',
                        width: '40%',
                      }} />
                    </div>
                  )}
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.25rem] top-full w-px h-2 bg-border/30" />
                )}
              </div>
            ))}
          </div>

          {/* Console Output */}
          {consoleLogs.length > 0 && (
            <div className="pt-4 border-t border-border/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                <span className="text-[10px] text-muted-foreground font-mono tracking-widest uppercase">Console Output</span>
              </div>
              <div className="bg-background/80 rounded-lg p-4 font-mono text-xs border border-border/30 max-h-48 overflow-y-auto scrollbar-thin">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="text-muted-foreground mb-1.5 flex gap-2">
                    <span className="text-primary/60 select-none">$</span>
                    <span>{log}</span>
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
