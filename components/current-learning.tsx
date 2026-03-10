'use client'

import { Badge } from '@/components/ui/badge'
import { CardContent } from '@/components/ui/card'
import { GitBranch, Clock, FlaskConical, Brain, Cloud, Bug, Workflow, Database, Sparkles, ShoppingCart } from 'lucide-react'
import React from 'react'

interface LearningItem {
  branch: string
  title: string
  description: string
  status: 'in-progress' | 'exploring' | 'hands-on'
  progress: number
  tags: string[]
  icon: React.ReactNode
}

const learningItems: LearningItem[] = [
  {
    branch: 'feature/langchain-test-automation',
    title: 'LangChain + Test Automation',
    description: 'Integrating LLM-powered agents into test automation workflows for intelligent test generation and self-healing locators.',
    status: 'in-progress',
    progress: 45,
    tags: ['LangChain', 'Python', 'AI/ML'],
    icon: <Brain className="h-5 w-5" />,
  },
  {
    branch: 'feature/chaos-engineering',
    title: 'Gremlin & Chaos Engineering',
    description: 'Learning fault injection and resilience testing to validate system behavior under turbulent conditions.',
    status: 'exploring',
    progress: 25,
    tags: ['Gremlin', 'Resilience', 'SRE'],
    icon: <Bug className="h-5 w-5" />,
  },
  {
    branch: 'feature/ai-testing-patterns',
    title: 'AI-Augmented QA Patterns',
    description: 'Exploring how generative AI can assist with test case design, visual regression, and defect prediction.',
    status: 'in-progress',
    progress: 60,
    tags: ['GenAI', 'Visual Testing', 'Automation'],
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    branch: 'feature/supabase-advanced',
    title: 'Supabase Advanced Capabilities',
    description: 'Exploring advanced Supabase features including Postgres functions, row-level security, and realtime subscriptions.',
    status: 'in-progress',
    progress: 40,
    tags: ['Supabase', 'Postgres', 'RLS'],
    icon: <Database className="h-5 w-5" />,
  },
  {
    branch: 'feature/shopify-api-integration',
    title: 'Shopify API Integrations',
    description: 'Experimenting with Shopify Storefront and Admin APIs to connect headless ecommerce backends with custom frontends.',
    status: 'exploring',
    progress: 25,
    tags: ['Shopify', 'Headless', 'API'],
    icon: <ShoppingCart className="h-5 w-5" />,
  },
]

const statusConfig = {
  'in-progress': { label: 'In Progress', color: 'text-primary', bg: 'bg-primary/8 border-primary/15' },
  'exploring': { label: 'Exploring', color: 'text-amber-400', bg: 'bg-amber-500/8 border-amber-500/15' },
  'hands-on': { label: 'Hands-On', color: 'text-emerald-400', bg: 'bg-emerald-500/8 border-emerald-500/15' },
}

export function CurrentLearning() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Feature Branches</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Currently Learning</h2>
        <p className="text-muted-foreground">
          Active areas of exploration and skill development
        </p>
      </div>

      {/* Learning Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learningItems.map((item, index) => {
          const status = statusConfig[item.status]
          return (
            <div
              key={item.branch}
              className="card-elevated rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardContent className="p-5">
                {/* Branch Name */}
                <div className="flex items-center gap-2 mb-3">
                  <GitBranch className="h-3.5 w-3.5 text-primary/60 shrink-0" />
                  <span className="text-[10px] font-mono text-primary/60 truncate">{item.branch}</span>
                </div>

                {/* Title + Icon */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-muted-foreground/60" />
                      <span className="text-[10px] font-mono text-muted-foreground">{item.progress}% complete</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`text-[10px] font-mono border ${status.bg} ${status.color} px-2 py-0.5`}
                    >
                      {status.label}
                    </Badge>
                  </div>
                  <div className="h-1.5 bg-secondary/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-500"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="font-mono text-[10px] bg-secondary/60 text-muted-foreground hover:text-primary hover:bg-primary/8 hover:border-primary/15 border border-border/30 transition-colors px-2 py-0.5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          )
        })}
      </div>
    </div>
  )
}
