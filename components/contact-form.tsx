'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send, Download, ExternalLink } from 'lucide-react'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    issueTitle: '',
    stepsToReproduce: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Bug Report Submitted',
      description: 'Thanks for reaching out! I\'ll get back to you soon.',
    })

    setFormData({ issueTitle: '', stepsToReproduce: '', email: '' })
    setIsLoading(false)
  }

  const contactLinks = [
    { label: 'Email', value: 'hi@rcastaneda.dev', href: 'mailto:hi@rcastaneda.dev' },
    { label: 'Website', value: 'rcastaneda.dev', href: 'https://rcastaneda.dev' },
    { label: 'GitHub', value: 'rcastaneda-dev', href: 'https://github.com/rcastaneda-dev' },
    { label: 'LinkedIn', value: 'rcastaneda-dev', href: 'https://www.linkedin.com/in/rcastaneda-dev/' },
  ]

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Contact</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">
          Submit a bug report or reach out for collaboration
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <Card className="lg:col-span-2 border-border/30 bg-card/60 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle className="text-base">Bug Report Form</CardTitle>
            <CardDescription className="text-sm">Tell me about testing challenges or collaboration ideas</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="issueTitle" className="text-xs font-medium text-muted-foreground">
                  Issue Summary
                </Label>
                <Input
                  id="issueTitle"
                  name="issueTitle"
                  placeholder="e.g., Flaky E2E tests in login flow"
                  value={formData.issueTitle}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/40 focus:border-primary/40 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stepsToReproduce" className="text-xs font-medium text-muted-foreground">
                  Steps to Reproduce
                </Label>
                <Textarea
                  id="stepsToReproduce"
                  name="stepsToReproduce"
                  placeholder="Detailed steps or questions about QA automation..."
                  value={formData.stepsToReproduce}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/40 focus:border-primary/40 focus:ring-primary/20 min-h-28 resize-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Your Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/40 focus:border-primary/40 focus:ring-primary/20 transition-colors"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/15 transition-all"
              >
                <Send className="h-4 w-4" />
                {isLoading ? 'Submitting...' : 'Submit Bug Report'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Resume Download */}
          <div className="card-elevated rounded-xl p-5">
            <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-3">Build Artifacts</div>
            <p className="text-xs text-muted-foreground mb-4">
              Download resume and portfolio documentation
            </p>
            <Button
              variant="outline"
              className="w-full gap-2 text-primary border-primary/20 hover:bg-primary/8 hover:border-primary/30 bg-transparent transition-all"
              asChild
            >
              <a href="/resume.pdf" download="ricardo-castaneda-sdet-resume.pdf">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Contact Links */}
          <div className="card-elevated rounded-xl p-5">
            <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-4">Connect</div>
            <div className="space-y-3">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-between group p-2 -mx-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div>
                    <p className="text-[10px] text-muted-foreground font-mono uppercase">{link.label}</p>
                    <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">{link.value}</p>
                  </div>
                  <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
