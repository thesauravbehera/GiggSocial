import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowRight, RotateCcw, Trophy, Award, CheckCircle2 } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  skill: string;
  onRetake: () => void;
  onComplete: () => void;
}

export function QuizResults({ score, totalQuestions, skill, onRetake, onComplete }: QuizResultsProps) {
  const percentage = (score / totalQuestions) * 100;
  const passed = percentage >= 70;
  
  let badge = 'Unverified';
  let badgeVariant: 'default' | 'success' | 'destructive' = 'default';
  let badgeDescription = 'Keep trying!';
  let badgeIcon = Award;
  
  if (percentage >= 90) {
    badge = 'Master';
    badgeVariant = 'success';
    badgeDescription = 'Top 10% of workers';
    badgeIcon = Trophy;
  } else if (percentage >= 70) {
    badge = 'Expert';
    badgeVariant = 'success';
    badgeDescription = 'Highly skilled professional';
    badgeIcon = Award;
  } else if (percentage >= 50) {
    badge = 'Verified';
    badgeVariant = 'success';
    badgeDescription = 'Skills confirmed';
    badgeIcon = CheckCircle2;
  }

  const BadgeIcon = badgeIcon;

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <BadgeIcon className={`h-10 w-10 ${passed ? 'text-green-600' : 'text-muted-foreground'}`} />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {badge}
          </h1>
          <p className="text-xl text-muted-foreground">{badgeDescription}</p>
          {passed && (
            <p className="mt-2 text-muted-foreground">
              You've earned the {badge} badge for {skill}
            </p>
          )}
        </div>

        {/* Score Display */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="pt-12 pb-12 text-center">
            <div className="mb-4 text-7xl font-bold sm:text-8xl">
              {score}/{totalQuestions}
            </div>
            <div className="mb-2 text-3xl font-bold text-muted-foreground">
              {Math.round(percentage)}%
            </div>
            <p className="text-sm text-muted-foreground">Correct Answers</p>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">{badge}</CardTitle>
              <CardDescription>Badge Level</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl capitalize">{skill}</CardTitle>
              <CardDescription>Skill</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">+{passed ? '40' : '10'}</CardTitle>
              <CardDescription>Trust Points</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Next Steps */}
        {passed && (
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>Continue your journey to becoming a top-rated worker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Upload verification video for Master badge',
                  'Complete your portfolio with work samples',
                  'Apply to premium verified-only gigs',
                  'Claim your ₹100 completion bonus'
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {!passed && (
            <Button size="lg" variant="outline" onClick={onRetake} className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </Button>
          )}
          <Button size="lg" onClick={onComplete} className="gap-2">
            {passed ? 'View Profile' : 'Back to Dashboard'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
