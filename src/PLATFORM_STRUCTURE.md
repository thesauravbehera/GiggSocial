# KaamForce Platform Structure

## 📱 User Flow

### 1. **Landing Page** (`home`)
- Public marketing page
- **Actions**: 
  - "Start Verification" → Quiz Page
  - "Watch Demo"
  - Sign In → Dashboard

---

### 2. **Onboarding Flow**
**Quiz Page** (`quiz`)
- Skill verification (10 questions, 5 minutes)
- Video analysis
- **On Complete** → Dashboard

---

### 3. **Main Dashboard** (`dashboard`)
**Role-Based Landing:**

#### **Worker Dashboard**
- Welcome message
- Quick Stats (4 cards):
  - Active Jobs
  - This Month Earnings
  - Trust Score
  - Rating
- Active Jobs section
- Recommended Jobs
- Quick Actions sidebar:
  - Browse Jobs
  - AI Matching
  - View Earnings
  - Trust Score

#### **Employer Dashboard**
- Welcome message
- Quick Stats (4 cards):
  - Active Jobs
  - Applications
  - This Month Spend
  - Total Spent
- Your Jobs section
- Top Matched Workers
- Quick Actions sidebar:
  - Post Job
  - Browse Workers
  - View Analytics

---

## 🧭 Navigation Structure

### **Main Navigation Bar** (4 items)
1. **Dashboard** - Main hub (role-specific)
2. **Jobs** - Browse/Post jobs
3. **Messages** - Direct messaging (badge: unread count)
4. **Notifications** - Alerts & updates (badge: unread count)

### **Profile Menu** (Dropdown)
Click avatar → Show menu:
- Profile
- Analytics
- Trust Score
- Settings
- Admin Panel (if admin)
- Help Center
- Sign Out

---

## 📄 Page Hierarchy

### **Primary Pages** (Main Nav)
```
📊 Dashboard (home after login)
├── Worker Dashboard
└── Employer Dashboard

💼 Jobs
├── Job List (browse/search)
├── Job Details Modal
├── Post Job Modal (employers)
└── Application Form (workers)

💬 Messages
├── Conversation List
└── Chat Window

🔔 Notifications
├── Notification Feed
└── Filters
```

### **Secondary Pages** (Profile Menu)
```
👤 Profile
├── View Profile
├── Edit Profile
└── Verification Status

📈 Analytics
├── Earnings Overview (workers)
├── Spending Overview (employers)
├── Performance Metrics
└── Charts

🛡️ Trust Score
├── Score Breakdown
├── Reviews
├── Achievements
└── Dispute Center

⚙️ Settings
├── Account
├── Notifications
├── Privacy & Security
├── Payment Methods
└── Preferences

🔧 Admin (admins only)
├── Platform Stats
├── User Management
├── Dispute Management
├── Analytics
└── Revenue Tracking

❓ Help Center
└── FAQs, Support
```

### **Supporting Pages**
```
🤝 Matching
├── AI Match Results
├── Worker Profiles
└── Pricing Recommendations
```

---

## 🔄 User Journey Examples

### **Worker Journey**
1. Land on home → Click "Start Verification"
2. Complete quiz → Redirected to **Worker Dashboard**
3. See "Recommended Jobs" → Click → **Jobs Page**
4. Click job → **Job Details Modal** → Apply
5. Get notification → Click bell → **Notifications Page**
6. Receive message → Click chat → **Messages Page**
7. Track earnings → Click "View Earnings" → **Analytics Page**
8. View profile → Click avatar → **Profile Menu** → Profile

### **Employer Journey**
1. Land on home → Sign In → **Employer Dashboard**
2. Click "Post Job" → **Post Job Modal** → Submit
3. View applications → **Jobs Page** → **Job Details**
4. See matched workers → Click "Browse Workers" → **Matching Page**
5. Message worker → **Messages Page**
6. Track spending → Click "View Analytics" → **Analytics Page**
7. Settings → Click avatar → **Profile Menu** → Settings

---

## 🎯 Navigation Logic

### **When to Show Nav**
- ✅ Show on: Dashboard, Jobs, Messages, Notifications, Profile, Analytics, Trust, Settings, Admin, Matching
- ❌ Hide on: Landing Page, Quiz Page

### **Active States**
- Dashboard page → "Dashboard" highlighted
- Jobs page → "Jobs" highlighted
- Messages page → "Messages" highlighted
- Notifications page → "Notifications" highlighted
- Profile/Analytics/Trust/Settings → Avatar/dropdown highlighted

### **Badges**
- Messages: Show unread count
- Notifications: Show unread count
- Auto-update on new items

---

## 📐 Information Architecture

```
KaamForce Platform
│
├── 🏠 Public
│   └── Landing Page
│
├── 🔐 Authentication
│   ├── Sign Up
│   ├── Sign In
│   └── Verification Quiz
│
├── 📊 Dashboard (Main Hub)
│   ├── Worker View
│   └── Employer View
│
├── 💼 Core Features
│   ├── Jobs Management
│   ├── Messaging
│   ├── Notifications
│   └── AI Matching
│
├── 📈 Analytics & Tracking
│   ├── Earnings/Spending
│   ├── Performance Metrics
│   └── Trust Score
│
├── 👤 User Management
│   ├── Profile
│   ├── Settings
│   └── Privacy
│
└── 🛡️ Admin (Admins Only)
    ├── Platform Overview
    ├── User Management
    ├── Dispute Resolution
    └── Revenue Tracking
```

---

## 🎨 Design Principles

1. **Dashboard-Centric**: Users land on dashboard after login
2. **Quick Actions**: Everything accessible in 2 clicks from dashboard
3. **Clean Navigation**: Only 4 main items in navbar
4. **Smart Dropdowns**: Secondary features in profile menu
5. **Contextual Actions**: Right actions at right time
6. **Role-Based**: Different experience for workers vs employers

---

## 🚀 Next Steps for Users

### **From Dashboard (Workers)**
1. Browse Jobs → Find work
2. Check Messages → Communicate
3. View Notifications → Stay updated
4. Track Earnings → Monitor income

### **From Dashboard (Employers)**
1. Post Job → Hire workers
2. Review Applications → Select candidates
3. Message Workers → Coordinate
4. Track Spending → Manage budget

---

## ✅ Key Improvements

1. **Cleaner Navigation** - 4 items vs 8 items
2. **Better Organization** - Logical grouping
3. **Faster Access** - Quick actions on dashboard
4. **Clear Hierarchy** - Primary vs secondary pages
5. **Role-Based** - Tailored experience
6. **Dropdown Menu** - Organized secondary features
7. **Badges** - Visual indicators for activity
8. **Systematic Flow** - Clear user journeys
