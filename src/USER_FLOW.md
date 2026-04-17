# KaamForce User Flow & Navigation

## 🎯 Navigation Structure

### **Main Navbar** (Always Visible)
Fixed at top, clean black background with white border-bottom

```
┌──────────────────────────────────────────────────────────────┐
│ [KaamForce Logo]  [Dashboard] [Find Jobs] [Matches] [More ▼] │
│                                    [💬3] [🔔5] [👤 Raj ▼]      │
└──────────────────────────────────────────────────────────────┘
```

---

## 📱 Navbar Components

### **Left Side: Logo + Main Nav**

#### **For Workers:**
1. **Dashboard** - Home hub
2. **Find Jobs** - Browse opportunities
3. **Matches** - AI-matched jobs
4. **More** ▼ - Dropdown
   - Analytics
   - Trust Score
   - Admin Panel (if admin)

#### **For Employers:**
1. **Dashboard** - Home hub
2. **My Jobs** - Posted jobs & applications
3. **Find Workers** - Browse talent pool
4. **More** ▼ - Dropdown
   - Analytics
   - Trust Score
   - Admin Panel (if admin)

---

### **Right Side: Actions + Profile**

1. **Messages** 💬 - Badge shows unread (3)
2. **Notifications** 🔔 - Badge shows unread (5)
3. **Profile** 👤 - Dropdown menu
   - View Profile
   - Settings
   - Help Center
   - Sign Out (red)

---

## 🔄 Complete User Journey

### **1. Landing Page** (`home`)
**What User Sees:**
- Hero section with 3D stars
- "Start Verification" button
- Stats showcase
- Features section
- CTA section

**Actions:**
- Click "Start Verification" → Quiz Page
- Click "Watch Demo" → Video modal
- Scroll to explore

**Navigation:** None (full landing page)

---

### **2. Quiz Page** (`quiz`)
**What User Sees:**
- 10 skill questions
- Timer (5 minutes)
- Progress indicator
- Video analysis prompt

**Actions:**
- Answer questions
- Complete verification

**Result:** Redirects to Dashboard

**Navigation:** None (focused experience)

---

### **3. Dashboard** (`dashboard`)
**Default landing after login**

#### **Worker Dashboard:**
**Top Stats (Clickable):**
- Active Jobs (2) → Jobs page
- This Month (₹45K) → Analytics
- Trust Score (88/100) → Trust page
- Rating (4.8★) → Trust page

**Active Jobs Section:**
- See current jobs
- Click to view details

**Recommended Jobs:**
- AI-matched opportunities
- Click to apply

**Quick Actions Sidebar:**
- Browse Jobs → Jobs page
- AI Matching → Matching page
- View Earnings → Analytics
- Trust Score → Trust page

**Verification Badge:**
- Shows current level
- "View Verification" button

#### **Employer Dashboard:**
**Top Stats (Clickable):**
- Active Jobs (5) → Jobs page
- Applications (47) → Jobs page
- This Month (₹125K) → Analytics
- Total Spent (₹450K) → Analytics

**Your Jobs Section:**
- Posted jobs list
- Applicant counts
- Click to manage

**Top Matches:**
- AI-matched workers
- Click to view profiles

**Quick Actions Sidebar:**
- Post Job → Job modal
- Browse Workers → Matching
- View Analytics → Analytics

**Platform Tips:**
- Helpful suggestions
- "Learn More" button

---

### **4. Jobs Page** (`jobs`)

#### **Worker View:**
**Header:**
- "Available Jobs" title
- Search bar
- Filters (All, Urgent, Contract, Full-time)

**Job Cards:**
- Job title, company
- Budget, location
- Match score (95%)
- Urgency badges
- "View & Apply" button

**Click Job:** Opens job details modal

**Job Details Modal:**
- Full job info
- Requirements list
- Application form:
  - Proposed budget
  - Timeline
  - Cover letter
- "Submit Application" button

#### **Employer View:**
**Header:**
- "Job Management" title
- "Post New Job" button
- Search & filters

**Job Cards:**
- Job title
- Applicant count
- Budget, posted date
- Status badges
- "View Applications" button

**Post Job Modal:**
- Job title, category
- Location, budget range
- Job type, urgency
- Description
- Requirements (dynamic list)
- AI matching info
- "Post Job" button

---

### **5. Matching Page** (`matching`)

#### **Worker View:**
**Header:**
- "Perfect Matches" title
- Match scoring explanation

**Top Matches:**
- Worker cards with:
  - Name, avatar
  - Match score (95%)
  - Rating, completed jobs
  - Skills tags
  - Location
  - "View Profile" button

**Pricing Sidebar:**
- Recommended budget
- Min/max range
- Market average
- Pricing factors breakdown

#### **Employer View:**
Same as worker but:
- Shows workers to hire
- Inverse perspective

---

### **6. Messages Page** (`messages`)
**Layout:**
- Left: Conversation list (1/3)
  - Search bar
  - Active chats
  - Online indicators
  - Unread badges
- Right: Chat window (2/3)
  - Message bubbles
  - Input area
  - Send button

**Features:**
- Real-time chat
- File attachments (UI)
- Call/video buttons (UI)
- Online status

---

### **7. Notifications Page** (`notifications`)
**Header:**
- "Notifications" title
- Unread count
- "Mark All Read" button
- Filters button

**Quick Stats:**
- Total, Unread, Jobs, Payments

**Notification Cards:**
- Icon by type
- Title, message
- Time stamp
- Priority badges
- Quick actions (read, delete)

**Filters:**
- All, Unread, Jobs, Payments, Messages

---

### **8. Analytics Page** (`analytics`)
**Header:**
- "Earnings & Analytics" title
- Export report button
- Time range selector

**Time Ranges:**
- Week, Month, Year tabs

**Earnings Overview:**
- Total earnings
- This month
- Pending
- Available to withdraw

**Charts:**
- Earnings chart (line/bar)
- Performance metrics

**Payment History:**
- Transaction list
- Status badges
- Amounts

---

### **9. Trust Score Page** (`trust`)
**Stats Grid:**
- Trust Score (88/100)
- Avg Rating (4.8★)
- Disputes (0)
- Achievements (3/10)

**Main Content:**
- Trust Score Card:
  - Circular score display
  - Breakdown (4 factors)
  - Improvement tips
  
- Reviews List:
  - 5-star ratings
  - Comments
  - Sentiment badges

- Achievements:
  - Unlocked badges
  - Locked badges

- Dispute Center:
  - Active disputes
  - "Raise Dispute" button

---

### **10. Profile Page** (`profile`)
**Sections:**
- Profile header
- Verification status
- Skills & experience
- Portfolio/work history
- Reviews summary

---

### **11. Settings Page** (`settings`)
**Sidebar Nav:**
- Account
- Notifications
- Privacy & Security
- Payment Methods
- Preferences

**Content Area:**
- Dynamic based on selection
- Forms with save buttons

---

### **12. Admin Panel** (`admin`)
*Only for admins*

**Tabs:**
- Overview
- Users
- Disputes
- Analytics
- Revenue

**Overview:**
- Platform stats (6 cards)
- Recent activity feed

**Users:**
- Search & filter
- User table
- Approve/suspend actions

**Disputes:**
- Stats cards
- Dispute cards
- Resolution actions

**Analytics:**
- Growth charts
- Metrics grid

**Revenue:**
- Revenue breakdown
- Monthly tracking

---

## 🎨 Navigation Behaviors

### **Active States:**
- Active nav item: `bg-white/10 text-white`
- Inactive: `text-gray-400 hover:text-white`
- Hover: `bg-white/5`

### **Badges:**
- White circle with black text
- Position: top-right of icon
- Shows count (3, 9+)

### **Dropdowns:**
- Smooth animation (opacity + y)
- Glass background
- Border-white/10
- Backdrop click to close

### **Mobile:**
- Bottom nav bar
- Icon + label
- Same functionality

### **Scroll Behavior:**
- Navbar always visible (fixed)
- No auto-hide
- Content has `pt-16` padding

---

## ⚡ Quick Access Paths

### **From Dashboard (1 Click):**
- Any stat card → Relevant page
- Quick action → Feature page
- Active job → Job details
- Recommended job → Apply

### **From Navbar (1 Click):**
- Dashboard
- Jobs
- Matches/Workers
- Messages
- Notifications

### **From Navbar (2 Clicks):**
- More → Analytics
- More → Trust Score
- More → Admin
- Profile → Settings
- Profile → Help

---

## 🔄 Common Workflows

### **Apply to Job (Worker):**
1. Dashboard → See recommended job
2. Click job → Job details modal
3. Fill application → Submit
4. Done ✓

### **Post Job (Employer):**
1. Dashboard → "Post Job" button
2. Fill form → Submit
3. View in "My Jobs" ✓

### **Check Earnings:**
1. Dashboard → Click "This Month" stat
2. See analytics page ✓

### **Message Someone:**
1. Navbar → Click Messages icon
2. Select conversation → Chat ✓

### **View Notifications:**
1. Navbar → Click Bell icon
2. See all notifications ✓

---

## 📊 Page Hierarchy

```
Landing Page
    ↓
Quiz Page → Dashboard (Main Hub)
    ├── Jobs
    ├── Matches
    ├── Messages
    ├── Notifications
    └── More ▼
        ├── Analytics
        ├── Trust Score
        └── Admin

Profile Menu ▼
    ├── Profile
    ├── Settings
    ├── Help
    └── Sign Out
```

---

## ✅ Navigation Principles

1. **Always Visible** - Navbar never hides
2. **Clear Hierarchy** - Main vs secondary features
3. **Role-Based** - Worker vs Employer nav items
4. **Badge Indicators** - Visual unread counts
5. **Dropdown Organization** - Secondary features grouped
6. **Quick Actions** - Everything in 1-2 clicks
7. **Mobile Friendly** - Bottom nav on mobile
8. **Consistent** - Same nav across all pages
