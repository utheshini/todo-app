import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";
import Footer from "./components/Footer";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    // Wrap app with theme and task providers
    <ThemeProvider>
      <TaskProvider>
        <div
          className="min-h-screen pb-4 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950
          transition-colors duration-500"
        >
          <Header />
          <main className="max-w-4xl mx-auto px-4 text-xs md:text-sm">
            <TaskForm />
            <TaskFilters />
            <TaskList />
          </main>
        </div>
        <Footer />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
