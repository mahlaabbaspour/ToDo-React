import {
  Check,
  Sun,
  Moon,
  Pencil,
  Trash2,
  Info,
  Heart,
  CirclePlus,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <main className="card">
          <header className="header">
            <div className="brand">
              <div className="logo">
                <Check />
              </div>
              <div>
                <h1 className="title">
                  Todo <span>App</span>
                </h1>
                <p className="subtitle">
                  Plan. Do. Done! <Heart className="heart" />
                </p>
              </div>
            </div>
            <div className="theme-toggle">
              <button className="theme-btn active">
                <Sun />
              </button>
              <button className="theme-btn">
                <Moon />
              </button>
            </div>
          </header>

          <form className="add-form">
            <div className="input-wrap">
              <span className="input-icon">
                <CirclePlus size={20} />
              </span>
              <input className="task-input" />
            </div>
            <button className="btn-primary">Add Task</button>
          </form>

          <div className="toolbar">
            <div className="filters">
              <button className="filter-btn active">All</button> …
            </div>
            <span className="tasks-left">3 tasks left</span>
          </div>

          <ul className="task-list">
            <li className="task-item completed">
              <label className="checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <span className="task-text">…</span>
              <div className="task-actions">
                <button className="icon-btn edit">
                  <Pencil />
                </button>
                <button className="icon-btn delete">
                  <Trash2 />
                </button>
              </div>
            </li>
          </ul>

          <footer className="footer">
            <button className="clear-btn">
              <Trash2 />
              Clear Completed
            </button>
            <span className="total-badge">
              <Info />4 total tasks
            </span>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
