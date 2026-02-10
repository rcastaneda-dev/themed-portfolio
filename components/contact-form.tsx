'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Send } from 'lucide-react'

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

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Bug Report Submitted',
      description: 'Thanks for reaching out! I\'ll get back to you soon.',
    })

    setFormData({ issueTitle: '', stepsToReproduce: '', email: '' })
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">
          Submit a bug report or message for collaboration opportunities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle>Bug Report Form</CardTitle>
            <CardDescription>Tell me about your testing challenges or collaboration ideas</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="issueTitle" className="text-sm font-medium">
                  Issue Summary
                </Label>
                <Input
                  id="issueTitle"
                  name="issueTitle"
                  placeholder="e.g., Flaky E2E tests in login flow"
                  value={formData.issueTitle}
                  onChange={handleChange}
                  required
                  className="bg-secondary/40 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stepsToReproduce" className="text-sm font-medium">
                  Steps to Reproduce
                </Label>
                <Textarea
                  id="stepsToReproduce"
                  name="stepsToReproduce"
                  placeholder="Detailed steps or questions about QA automation..."
                  value={formData.stepsToReproduce}
                  onChange={handleChange}
                  required
                  className="bg-secondary/40 border-border/50 min-h-24 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
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
                  className="bg-secondary/40 border-border/50"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full gap-2"
              >
                <Send className="h-4 w-4" />
                {isLoading ? 'Submitting...' : 'Submit Bug Report'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Resume Download Section */}
        <Card className="border-border/50 h-fit sticky top-6">
          <CardHeader>
            <CardTitle className="text-base">Build Artifacts</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Download my resume and portfolio documentation
              </p>
              <Button
                variant="outline"
                className="w-full text-primary border-primary/30 hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href="/resume.txt" download="sdet-resume.txt">
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3 font-mono uppercase">Contact & Social</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:ricardo@rcastaneda.dev" className="text-sm font-medium text-primary hover:underline">
                    ricardo@rcastaneda.dev
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Website</p>
                  <a href="https://rcastaneda.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                    rcastaneda.dev
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <a href="https://github.com/castanedadev-edu" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                    github.com/castanedadev-edu
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <a href="https://linkedin.com/in/rcastaneda-dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                    linkedin.com/in/rcastaneda-dev
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
