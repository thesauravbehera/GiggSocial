import React from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

export function HomePage({ onStartQuiz }: HomePageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[980px] text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
            Verify Your Skills with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            Technology
          </h1>
          <p className="mx-auto mt-6 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Join India's first AI-verified gig workforce platform. Get verified, build trust, and earn more with transparent skill verification.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" onClick={onStartQuiz} className="gap-2">
              Start Verification <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-muted/40 py-16">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="mt-2 text-sm text-muted-foreground">Verified Workers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="mt-2 text-sm text-muted-foreground">Companies Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">4.8★</div>
              <div className="mt-2 text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-24">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get verified in minutes and start earning more
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: 'Take the Quiz',
                description: 'Answer 10 skill-specific questions powered by AI. Takes just 5 minutes.',
                step: '01'
              },
              {
                icon: CheckCircle2,
                title: 'Get Verified',
                description: 'Earn your verification badge instantly. Master, Expert, or Verified level.',
                step: '02'
              },
              {
                icon: Shield,
                title: 'Build Trust',
                description: 'Your trust score increases. Get access to premium gigs and better rates.',
                step: '03'
              },
              {
                icon: TrendingUp,
                title: 'Start Earning',
                description: 'Apply to verified-only jobs with higher pay and better clients.',
                step: '04'
              },
            ].map((feature, idx) => (
              <Card key={idx} className="relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute right-4 top-4 text-5xl font-bold text-muted-foreground/10">
                    {feature.step}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t bg-muted/40 py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-[980px]">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                  Why Get Verified?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Stand out from the crowd with AI-verified skills and transparent trust scores.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    'Access to premium, high-paying gigs',
                    'Verified badge visible to all companies',
                    'Higher trust score and credibility',
                    'Priority in job recommendations',
                    'Better rates and faster hiring',
                    'Ongoing skill development tracking'
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Join thousands of verified workers earning better rates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Verification Time</span>
                      <span className="font-medium">~5 minutes</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pass Rate</span>
                      <span className="font-medium">70% required</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Completion Bonus</span>
                      <span className="font-medium">₹100</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Trust Score Boost</span>
                      <span className="font-medium">+40 points</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg" onClick={onStartQuiz}>
                    Start Your Verification
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-24">
        <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl">
              Ready to Boost Your Career?
            </CardTitle>
            <CardDescription className="text-base">
              Get verified today and unlock access to premium opportunities
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Button size="lg" onClick={onStartQuiz} className="gap-2">
              Get Verified Now <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
