import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { MapPin, Calendar, Star, TrendingUp, Award, CheckCircle2, Clock, Briefcase } from 'lucide-react';
import { skillCategories } from '../../data/skills';

interface ProfilePageProps {
  userData: any;
}

export function ProfilePage({ userData }: ProfilePageProps) {
  const verificationScore = userData.verificationStatus?.score || 0;
  const profileScore = 65;
  const activityScore = 30;
  
  const trustScore = Math.round(
    verificationScore * 0.4 +
    profileScore * 0.3 +
    activityScore * 0.3
  );

  const getTrustLevel = () => {
    if (trustScore >= 90) return { label: 'Excellent', variant: 'success' as const };
    if (trustScore >= 75) return { label: 'Very Good', variant: 'default' as const };
    if (trustScore >= 60) return { label: 'Good', variant: 'secondary' as const };
    return { label: 'Needs Work', variant: 'destructive' as const };
  };

  const getBadgeInfo = (badge: string) => {
    switch (badge) {
      case 'master':
        return { label: 'Master Verified', icon: '👑', variant: 'success' as const };
      case 'expert':
        return { label: 'Expert Verified', icon: '⭐', variant: 'default' as const };
      case 'verified':
        return { label: 'Verified', icon: '✓', variant: 'secondary' as const };
      default:
        return { label: 'Not Verified', icon: '○', variant: 'outline' as const };
    }
  };

  const trustLevel = getTrustLevel();

  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            <Avatar className="h-32 w-32 border-4 border-primary/10">
              <AvatarFallback className="bg-primary text-5xl text-primary-foreground">
                {userData.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
                {userData.name}
              </h1>
              
              <div className="mb-6 flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{userData.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{userData.experience} experience</span>
                </div>
              </div>

              {userData.verificationStatus && (
                <div className="inline-flex items-center gap-3 rounded-lg border bg-card p-4 shadow-sm">
                  <Award className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-semibold">
                      {getBadgeInfo(userData.verificationStatus.badge).label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Score: {Math.round(userData.verificationStatus.score)}%
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Trust Score Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Trust Score</CardTitle>
                <CardDescription>Your credibility on the platform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="mb-2 text-6xl font-bold">{trustScore}</div>
                  <Badge variant={trustLevel.variant}>{trustLevel.label}</Badge>
                  <p className="mt-2 text-sm text-muted-foreground">Out of 100</p>
                </div>

                <div className="space-y-4 border-t pt-6">
                  {[
                    { label: 'Verification', score: verificationScore, weight: '40%' },
                    { label: 'Profile', score: profileScore, weight: '30%' },
                    { label: 'Activity', score: activityScore, weight: '30%' },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-muted-foreground">
                          {Math.round(item.score)}/100
                        </span>
                      </div>
                      <Progress value={item.score} />
                      <p className="text-xs text-muted-foreground">Weight: {item.weight}</p>
                    </div>
                  ))}
                </div>

                {trustScore < 90 && (
                  <div className="border-t pt-6">
                    <h4 className="mb-3 font-semibold">Boost Your Score</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {verificationScore < 50 && (
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>Complete skill verification</span>
                        </div>
                      )}
                      {profileScore < 100 && (
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>Add portfolio samples</span>
                        </div>
                      )}
                      {activityScore < 50 && (
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>Complete your first gig</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Skills Section */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Skills</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {userData.skills.map((skillId: string, idx: number) => {
                  const skill = Object.values(skillCategories)
                    .flat()
                    .find(s => s.id === skillId);
                  
                  if (!skill) return null;

                  const isVerified = !!userData.verificationStatus;

                  return (
                    <Card key={idx} className="transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-4 flex items-start justify-between">
                          <div className="text-5xl">{skill.icon}</div>
                          {isVerified ? (
                            <Badge variant="success">Verified</Badge>
                          ) : (
                            <Badge variant="outline">Not Verified</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{skill.name}</CardTitle>
                        <CardDescription>
                          Market avg: ₹{skill.avgRate}/hr
                        </CardDescription>
                      </CardHeader>
                      {!isVerified && (
                        <CardContent>
                          <Button variant="outline" className="w-full">
                            Verify Skill
                          </Button>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Statistics */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Statistics</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: Briefcase, label: 'Gigs', value: '0' },
                  { icon: Star, label: 'Rating', value: 'New' },
                  { icon: TrendingUp, label: 'Reviews', value: '0' },
                  { icon: Clock, label: 'Response', value: '< 1hr' },
                ].map((stat, idx) => (
                  <Card key={idx}>
                    <CardHeader className="pb-4">
                      <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-3xl">{stat.value}</CardTitle>
                      <CardDescription>{stat.label}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <Card className="bg-gradient-to-br from-primary/5 to-background">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>
                  Continue building your profile and reputation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Complete your portfolio',
                    'Upload verification video',
                    'Apply to premium gigs',
                    'Build trust score'
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full sm:w-auto">
                  Browse Available Gigs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
