'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, GraduationCap } from 'lucide-react'

interface EducationItem {
  type: 'degree' | 'certification'
  title: string
  institution: string
  year: string
  description?: string
  note?: string
}

const education: EducationItem[] = [
  {
    type: 'degree',
    title: 'Computer Science Engineering',
    institution: 'Universidad Don Bosco (UDB)',
    year: '2014 - 2021',
    description: 'Engineering degree in Computer Science with a focus on software development and systems architecture'
  },
  {
    type: 'certification',
    title: 'Professional Certificate in Cybersecurity',
    institution: 'MIT xPRO',
    year: 'Dec 2022 - Oct 2023',
    description: 'Computer and Information Systems Security / Information Assurance',
    note: 'Partially completed — did not finish the program'
  },
  {
    type: 'certification',
    title: 'Python Automation and Testing',
    institution: 'Professional Development',
    year: 'Certified',
    description: 'Specialized certification in Python-based test automation and scripting'
  },
  {
    type: 'certification',
    title: 'Behavior-Driven Development',
    institution: 'Professional Development',
    year: 'Certified',
    description: 'BDD methodology, Gherkin syntax, and integration with automation frameworks'
  },
  {
    type: 'certification',
    title: 'Young Executives Program in Operations Management',
    institution: 'INCAE Business School',
    year: 'Oct 2022',
    description: 'Operations Management',
  },
  {
    type: 'certification',
    title: 'Curso Avanzado de Java SE',
    institution: 'Professional Development',
    year: 'Certified',
    description: 'Advanced Java SE development covering OOP, design patterns, and enterprise fundamentals'
  },
  {
    type: 'certification',
    title: 'CASAS Proficient Skills',
    institution: 'Professional Development',
    year: 'Certified',
    description: 'Comprehensive assessment of applied skills and proficiencies'
  },
  {
    type: 'certification',
    title: 'Certified Senior System Architect (CSSA) 7.4',
    institution: 'Pegasystems',
    year: 'March 2019',
    description: 'BPM Pegasystems certified seniorsystem architect',
  },
  {
    type: 'certification',
    title: 'Certified System Architect (CSA) 7.4',
    institution: 'Pegasystems',
    year: 'September 2018',
    description: 'BPM Pegasystems certified system architect',
  },
]

export function Education() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Credentials</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Education & Certifications</h2>
        <p className="text-muted-foreground">
          Formal education and professional development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="card-elevated rounded-xl animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  item.type === 'degree'
                    ? 'bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/15 text-accent'
                    : 'bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/15 text-primary'
                }`}>
                  {item.type === 'degree' ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Award className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground mb-1 leading-snug">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{item.institution}</p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground/80 leading-relaxed mb-3">{item.description}</p>
                  )}
                  {item.note && (
                    <p className="text-[10px] text-amber-400/80 font-mono italic mb-3">{item.note}</p>
                  )}
                  <Badge variant="outline" className="text-[10px] font-mono border-border/40 text-muted-foreground">
                    {item.year}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  )
}
