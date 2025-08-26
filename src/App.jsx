import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";
import TaskList from "./components/TaskList";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

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
          <main className="max-w-4xl mx-auto px-4">
            <TaskForm />
            <TaskList />
          </main>
        </div>
        <Footer />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
