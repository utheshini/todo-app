import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import {
  FILTER_CATEGORY_OPTIONS,
  FILTER_PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  SORT_OPTIONS,
} from "../constants/options";

function TaskFilters() {
  const {
    filterStatus,
    setFilterStatus,
    searchTerm,
    setSearchTerm,
    filterCategory,
    setFilterCategory,
    filterPriority,
    setFilterPriority,
    sortOption,
    setSortOption,
  } = useContext(TaskContext);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-8">
      {/* Status Filter */}
      <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 w-fit">
        {STATUS_OPTIONS.map((status) => (
          <button
            type="button"
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-2 rounded-xl capitalize ${
              filterStatus === status
                ? "bg-purple-600 text-white active:scale-50"
                : " text-slate-700 dark:text-slate-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 w-full md:flex-row md:items-center">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-item w-full text-slate-500 dark:text-slate-400"
          />
        </div>

        {/* Category Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="filter-item w-full md:w-auto"
        >
          {FILTER_CATEGORY_OPTIONS.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        {/* Priority Filter */}
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="filter-item w-full md:w-auto"
        >
          {FILTER_PRIORITY_OPTIONS.map((priority) => (
            <option key={priority.value} value={priority.value}>
              {priority.label}
            </option>
          ))}
        </select>

        {/* Sorting Options */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="filter-item w-full md:w-auto"
        >
          {SORT_OPTIONS.map((sort) => (
            <option key={sort.value} value={sort.value}>
              {sort.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TaskFilters;
