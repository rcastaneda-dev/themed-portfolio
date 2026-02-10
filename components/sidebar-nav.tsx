'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  LayoutDashboard, 
  Folder, 
  Briefcase, 
  BookOpen, 
  Code2, 
  Mail, 
  Github,
  Linkedin,
  Mail as MailIcon
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

interface SidebarNavProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="h-4 w-4" />, href: '#overview' },
  { id: 'projects', label: 'Projects', icon: <Folder className="h-4 w-4" />, href: '#projects' },
  { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4" />, href: '#experience' },
  { id: 'education', label: 'Education', icon: <BookOpen className="h-4 w-4" />, href: '#education' },
  { id: 'tech-stack', label: 'Tech Stack', icon: <Code2 className="h-4 w-4" />, href: '#tech-stack' },
  { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" />, href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', icon: <Github className="h-4 w-4" />, href: 'https://github.com' },
  { label: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com' },
]

export function SidebarNav({ activeSection, onSectionChange }: SidebarNavProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-secondary/40 border-r border-border/50 flex flex-col p-6 z-40 backdrop-blur-sm">
      {/* Logo / Title */}
      <div className="mb-8 animate-slide-in-left">
        <h1 className="text-xl font-bold text-primary">SDET</h1>
        <p className="text-xs text-muted-foreground mt-1">Quality Engineering</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all',
              activeSection === item.id
                ? 'bg-primary/20 text-primary border border-primary/30'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Social Links */}
      <div className="space-y-3 mb-6 pt-6 border-t border-border/50">
        <div className="text-xs text-muted-foreground font-mono uppercase">Social</div>
        <div className="flex gap-2">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Button */}
      <Button
        onClick={() => onSectionChange('contact')}
        className="w-full gap-2"
      >
        <MailIcon className="h-4 w-4" />
        Get in Touch
      </Button>
    </aside>
  )
}
