// Form options
export const CATEGORY_OPTIONS = [
  { value: "work", label: "Work" },
  { value: "study", label: "Study" },
  { value: "personal", label: "Personal" },
];

export const PRIORITY_OPTIONS = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

// Filter options
export const STATUS_OPTIONS = ["all", "active", "completed"];

export const FILTER_CATEGORY_OPTIONS = [
  { value: "all", label: "All Categories" },
  ...CATEGORY_OPTIONS,
];

export const FILTER_PRIORITY_OPTIONS = [
  { value: "all", label: "All Priorities" },
  ...PRIORITY_OPTIONS,
];

export const SORT_OPTIONS = [
  { value: "date", label: "Sort by Date" },
  { value: "priority", label: "Sort by Priority" },
];
