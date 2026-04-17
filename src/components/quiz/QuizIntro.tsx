import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock, Target, CheckCircle2, Zap } from 'lucide-react';

interface QuizIntroProps {
  skill: string;
  onStart: () => void;
}

export function QuizIntro({ skill, onStart }: QuizIntroProps) {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4">Skill Verification</Badge>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {skill.charAt(0).toUpperCase() + skill.slice(1)} Verification
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Prove your expertise with our AI-powered quiz. Get verified and unlock premium opportunities.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-4">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-3xl">10</CardTitle>
              <CardDescription>Questions</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-3xl">~5 min</CardTitle>
              <CardDescription>Duration</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-4">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-3xl">70%</CardTitle>
              <CardDescription>Pass Mark</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              What You'll Get
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Verified badge on your profile',
                'Access to premium gigs',
                'Higher trust score (+40 points)',
                '₹100 completion bonus',
                'Priority in job matching',
                'Better rates from companies'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" onClick={onStart} className="w-full sm:w-auto">
            Start Quiz
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Practice Mode
          </Button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          No time limit • Can be retaken after 24 hours
        </p>
      </div>
    </div>
  );
}
