export const skillCategories = {
  'blue-collar': [
    { id: 'electrician', name: 'Electrician', icon: '⚡', avgRate: 450, demand: 'high' },
    { id: 'plumber', name: 'Plumber', icon: '🔧', avgRate: 400, demand: 'high' },
    { id: 'carpenter', name: 'Carpenter', icon: '🪚', avgRate: 380, demand: 'medium' },
    { id: 'ac-repair', name: 'AC Repair', icon: '❄️', avgRate: 500, demand: 'high' },
    { id: 'painter', name: 'Painter', icon: '🎨', avgRate: 350, demand: 'medium' },
    { id: 'appliance-repair', name: 'Appliance Repair', icon: '🔨', avgRate: 420, demand: 'medium' },
  ],
  'white-collar': [
    { id: 'data-entry', name: 'Data Entry', icon: '⌨️', avgRate: 250, demand: 'high' },
    { id: 'virtual-assistant', name: 'Virtual Assistant', icon: '💼', avgRate: 300, demand: 'high' },
    { id: 'customer-support', name: 'Customer Support', icon: '📞', avgRate: 280, demand: 'high' },
    { id: 'bookkeeping', name: 'Bookkeeping', icon: '📊', avgRate: 400, demand: 'medium' },
    { id: 'transcription', name: 'Transcription', icon: '📝', avgRate: 200, demand: 'medium' },
  ],
  'creative': [
    { id: 'graphic-design', name: 'Graphic Design', icon: '🎨', avgRate: 600, demand: 'high' },
    { id: 'content-writing', name: 'Content Writing', icon: '✍️', avgRate: 500, demand: 'high' },
    { id: 'video-editing', name: 'Video Editing', icon: '🎬', avgRate: 700, demand: 'high' },
    { id: 'photography', name: 'Photography', icon: '📸', avgRate: 800, demand: 'medium' },
    { id: 'ui-ux-design', name: 'UI/UX Design', icon: '🖌️', avgRate: 900, demand: 'high' },
  ],
  'technical': [
    { id: 'web-development', name: 'Web Development', icon: '💻', avgRate: 1200, demand: 'high' },
    { id: 'app-development', name: 'App Development', icon: '📱', avgRate: 1400, demand: 'high' },
    { id: 'data-analysis', name: 'Data Analysis', icon: '📈', avgRate: 1000, demand: 'high' },
    { id: 'it-support', name: 'IT Support', icon: '🖥️', avgRate: 600, demand: 'medium' },
  ],
};

export const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Pune',
  'Ahmedabad',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Jaipur',
  'Surat',
];

export const experienceLevels = [
  { value: '0-1', label: 'Less than 1 year' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
];
