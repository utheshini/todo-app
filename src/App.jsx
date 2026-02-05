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
          className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950
          text-slate-900 dark:text-slate-100 transition-colors duration-500"
        >
          <Header />
          <main className="flex-1 max-w-4xl mx-auto px-4 pb-6 text-xs md:text-sm">
            <TaskForm />
            <TaskFilters />
            <TaskList />
          </main>
          <Footer />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
