# saurv.ai - Complete Web Flow Plan

## 🎯 Navigation Structure

### **Landing Navbar** (Public/Unauthenticated)
```
┌────────────────────────────────────────────────┐
│ saurv.ai    Home  Features  Demo  Pricing     │
│                                      [Sign In] │
└────────────────────────────────────────────────┘
```

**Elements:**
- Logo: `saurv.ai` (left)
- Nav Items: Home, Features, Demo, Pricing (center)
- Sign In button (right, outline style)

**No:**
- ❌ No tagline in navbar
- ❌ No "Get Started" button in navbar
- ❌ No extra text

---

### **Main Navbar** (Authenticated)
```
┌────────────────────────────────────────────────┐
│ saurv.ai  Dashboard  Browse  Services  More▼  │
│                              💬3  🔔5  👤 R ▼  │
└────────────────────────────────────────────────┘
```

**Worker Nav:**
- Dashboard
- Browse Gigs
- My Services
- More (Analytics, Trust, Admin)
- Messages, Notifications, Profile

**Hirer Nav:**
- Dashboard
- Find Workers
- My Requests
- More (Analytics, Trust, Admin)
- Messages, Notifications, Profile

---

## 🌊 Complete User Flow

### **Phase 1: Discovery (Landing Page)**

#### **User Journey:**
```
Land on Home → Scroll through sections → Click "Get Started" (in hero/CTA)
```

#### **Landing Page Sections:**
1. **Home** (#home)
   - Hero with animated stars
   - Headline: "Work Without Boundaries"
   - 2 CTAs: "Get Started" + "Watch Demo"
   - Trust indicators

2. **Stats** 
   - 50K+ Gig Workers
   - 500+ Hirers
   - 1M+ Gigs Completed
   - 4.9★ Rating

3. **Features** (#features)
   - 6 AI Agents cards
   - Feature descriptions
   - Visual icons

4. **Demo** (#demo)
   - Video player with play button
   - 4 feature highlights below
   - Platform walkthrough

5. **Bento Grid**
   - Visual feature showcase
   - Interactive elements

6. **Pricing** (#pricing)
   - 3 plans: Worker (Free), Hirer (₹499), Enterprise (Custom)
   - Feature comparison
   - "Get Started" CTAs

7. **Testimonials**
   - 6 success stories
   - Ratings & reviews
   - Stats proof

8. **CTA** (#about)
   - Final conversion push
   - "Get Started Now"
   - Benefits reminder

9. **Footer**
   - Links, contact, social
   - Copyright

---

### **Phase 2: Sign Up (Conversion)**

#### **Sign Up Flow:**
```
Landing → Click "Get Started" → Sign Up Page

Step 1: Choose Role
  - Gig Worker (👨‍💼)
  - Hirer (🏢)
  ↓ Click role card

Step 2: Fill Details
  - Name, Email, Phone, City
  - [Workers only] Skills, Experience
  - [Back] button to change role
  ↓ Submit

Redirect based on role:
  - Worker → Aadhaar Verification Page
  - Hirer → Dashboard
```

#### **Sign In Flow:**
```
Landing → Click "Sign In" → Sign In Page

Form:
  - Email
  - Password
  - Remember me
  - Forgot password?
  ↓ Submit

Dashboard → Main app
```

---

### **Phase 3: Onboarding**

#### **Worker Onboarding:**
```
Sign Up → Aadhaar Verification Page
  ↓
Option 1: Complete Verification (5 min)
  - Aadhaar OTP
  - Document Upload
  - Selfie
  - AI Processing
  - ✓ Verified
  ↓
Dashboard (Full Access)

Option 2: Skip Verification
  ↓
Dashboard (Limited - View Only)
  - Can browse marketplace
  - Can view services
  - Cannot apply for gigs
  - Cannot create listings
  - See verification prompts
```

#### **Hirer Onboarding:**
```
Sign Up → Dashboard (direct)
  ↓
Welcome tour (optional)
  ↓
Post first job or browse workers
```

---

### **Phase 4: Main App (Authenticated)**

#### **Worker Journey:**
```
Dashboard (Landing Hub)
  ├── View stats (active gigs, earnings, trust score)
  ├── See recommended gigs
  ├── Quick actions sidebar
  ↓
Browse Gigs (Marketplace)
  ├── Search bar
  ├── Category filters
  ├── Service cards grid
  ├── Click service → Details modal
  ↓
My Services (Own Listings)
  ├── Create new service
  ├── Edit existing
  ├── Track performance
  ↓
Messages
  ├── Chat with hirers
  ├── Discuss projects
  ↓
Profile & Settings
  ├── Edit profile
  ├── Portfolio
  ├── Trust score
  ├── Analytics
```

#### **Hirer Journey:**
```
Dashboard (Landing Hub)
  ├── View stats (active requests, applications, spending)
  ├── See matched workers
  ├── Quick actions sidebar
  ↓
Find Workers (Marketplace)
  ├── Browse service listings
  ├── Category filters
  ├── Worker profiles
  ├── AI match scores
  ↓
My Requests (Job Posts)
  ├── Post new request
  ├── View applications
  ├── Review candidates
  ↓
Messages
  ├── Chat with workers
  ├── Negotiate terms
  ↓
Profile & Settings
  ├── Company info
  ├── Spending analytics
  ├── Saved workers
```

---

## 📱 Page Hierarchy

### **Public Pages** (No Auth Required)
```
Landing Page
├── #home (Hero)
├── #stats
├── #features
├── #demo
├── #pricing
├── #testimonials
└── #about (CTA)

Sign Up Page
├── Choose Role
└── Fill Details

Sign In Page
```

### **Protected Pages** (Auth Required)
```
Dashboard
├── Worker Dashboard
└── Hirer Dashboard

Marketplace
├── Browse Services (Workers see gigs, Hirers see workers)
├── Service Details Modal
└── Category Filters

Worker-Only Pages:
├── My Services (CRUD service listings)
├── Quiz Page (verification)
└── Application Tracking

Hirer-Only Pages:
├── My Requests (job posts)
├── Post New Request
└── Review Applications

Shared Pages:
├── Messages (chat)
├── Notifications (feed)
├── Profile (view/edit)
├── Analytics (earnings/spending)
├── Trust Score (reputation)
├── Settings (account, privacy, payments)
└── Admin (if admin role)
```

---

## 🔄 Key User Flows

### **Flow 1: Worker Gets First Gig**
```
1. Sign Up → Choose "Gig Worker"
2. Fill Details → Submit
3. Verification Page → Skip for now
4. Dashboard (Unverified) → Browse Gigs
5. Search "Logo Design" → Find service
6. Click "Apply" → 🔒 Verification Required Prompt
7. Click "Get Verified" → Aadhaar Verification
8. Complete Verification → ✓ Verified Badge
9. Dashboard → Browse Gigs (Full Access)
10. Apply for Gig → Message hirer
11. Get hired → Complete work
12. Get paid → Build trust score
```

### **Flow 2: Hirer Finds Worker**
```
1. Sign Up → Choose "Hirer"
2. Fill Details → Dashboard
3. Click "Find Workers" → Marketplace
4. Search "Web Developer" → See AI matches
5. View worker profile → Check reviews
6. Message worker → Discuss requirements
7. Hire → Start project
8. Track progress → Complete
9. Pay & review → Build reputation
```

### **Flow 3: Worker Creates Service Listing**
```
1. Dashboard → "My Services"
2. Click "Create Service" → Form
3. Fill:
   - Title
   - Description
   - Category
   - Starting Price
   - Delivery Time
   - Add portfolio images
4. Submit → Service goes live
5. Get discovered in marketplace
6. Receive inquiries
```

### **Flow 4: Hirer Posts Job Request**
```
1. Dashboard → "My Requests"
2. Click "Post Request" → Form
3. Fill:
   - Job Title
   - Description
   - Category
   - Budget Range
   - Timeline
   - Requirements
4. Submit → AI matches workers
5. Review applications
6. Select & hire
```

---

## 🎯 Conversion Points

### **Primary CTAs** (Get Started)
1. Hero Section - Main CTA
2. Pricing Cards - Per plan
3. CTA Section - Final push
4. Mobile sticky footer (optional)

### **Secondary CTAs**
1. Watch Demo - Hero
2. Sign In - Navbar
3. Browse Services - Quick explore
4. Learn More - Feature sections

---

## 📊 Analytics & Tracking

### **Key Metrics to Track:**

**Landing Page:**
- Page views
- Section scroll depth
- CTA clicks
- Video plays (demo)
- Sign up clicks

**Sign Up:**
- Started vs completed
- Role selection (Worker vs Hirer)
- Drop-off points
- Time to complete

**Onboarding:**
- Quiz completion rate (workers)
- First service created (workers)
- First request posted (hirers)
- Time to first action

**Main App:**
- DAU/MAU
- Service views → Applications
- Request posts → Hires
- Messages sent
- Trust score growth

---

## 🎨 Page Transitions

### **Landing → Sign Up:**
- Smooth fade transition
- Modal overlay option
- Preserve scroll position on back

### **Sign Up → Quiz/Dashboard:**
- Progress indicator
- Celebration animation on success
- Clear next steps

### **Dashboard → Other Pages:**
- Fast navigation
- Breadcrumbs for context
- Back to dashboard always visible

---

## 🔐 Authentication States

### **Unauthenticated:**
- Show: Landing navbar
- Access: Home, Features, Demo, Pricing, Sign Up/In
- Block: All protected pages
- Redirect: Protected pages → Sign In

### **Authenticated:**
- Show: Main navbar
- Access: All protected pages
- Hide: Sign Up page
- Redirect: Landing → Dashboard

---

## 📱 Mobile Considerations

### **Landing Navbar (Mobile):**
- Hamburger menu (right)
- Slide-in menu panel
- Logo (left)
- Sign In button (top right)

### **Main Navbar (Mobile):**
- Bottom navigation bar
- 4 main items + More
- Badges on messages/notifications

### **Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚀 Progressive Disclosure

### **First Visit:**
1. See hero with clear value prop
2. Scroll to see proof (stats)
3. Understand features
4. Watch demo
5. See pricing
6. Read testimonials
7. Convert (Get Started)

### **Returning Visitor:**
1. Sign In (quick access)
2. Dashboard (personalized)
3. Continue workflow
4. Track progress

---

## ✅ Navigation Rules

### **Landing Navbar:**
- ✅ Simple: 4 nav items only
- ✅ Logo clickable → scroll to top
- ✅ Smooth scroll to sections
- ✅ Sticky on scroll
- ✅ Glass effect on scroll
- ✅ Sign In only (no Get Started)

### **Main Navbar:**
- ✅ Role-based items
- ✅ Always visible (fixed)
- ✅ Active state highlighting
- ✅ Dropdown for secondary features
- ✅ Badges for notifications
- ✅ Profile menu

---

## 🎯 Success Paths

### **Worker Success Path:**
```
Sign Up → Verify → Create Service → Get Discovered → 
Message Hirer → Get Hired → Complete Work → Get Paid → 
Build Trust → Get More Gigs → Repeat
```

### **Hirer Success Path:**
```
Sign Up → Browse Workers → Find Match → Message → 
Hire → Track Project → Complete → Review → 
Post New Request → Repeat
```

---

## 📈 Growth Loops

### **Worker Growth:**
1. Get verified → List services
2. Complete gigs → Build trust
3. Higher trust → Better gigs
4. Better gigs → More earnings
5. More earnings → Refer friends

### **Hirer Growth:**
1. Post request → Get matches
2. Hire quality → Good experience
3. Good experience → Post more
4. Post more → Save time
5. Save time → Refer others

---

## 🎨 Design Consistency

### **All Pages Must Have:**
- ✅ Black background
- ✅ White/gray text
- ✅ Clash Display font for headings
- ✅ Glassmorphism effects
- ✅ Smooth animations (0.3-0.8s)
- ✅ Consistent spacing (gap-6, gap-8)
- ✅ Same button styles

---

**COMPLETE WEB FLOW PLANNED!** 🎉

**Key Improvements:**
1. ✅ Clean navbar (4 items, Sign In only)
2. ✅ Clear user journeys
3. ✅ Role-based flows
4. ✅ Logical page hierarchy
5. ✅ Conversion optimization