import { useState, CSSProperties } from "react";

interface Task {
  id: number;
  text: string;
  isEditing: boolean;
}

export const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [editTaskText, setEditTaskText] = useState<string>("");

  // Ajouter une nouvelle tâche
  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: newTaskText,
        isEditing: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };

  // Supprimer une tâche
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Activer le mode édition pour une tâche
  const enableEdit = (id: number, currentText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task,
      ),
    );
    setEditTaskText(currentText);
  };

  // Modifier une tâche
  const editTask = (id: number) => {
    const taskModified = tasks.map((task) =>
      task.id === id ? { ...task, text: editTaskText, isEditing: false } : task,
    );
    setTasks(taskModified);
    setEditTaskText("");
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Todo App</h1>

      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          placeholder="Ajouter une tâche"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button style={styles.button} onClick={addTask}>
          Ajouter
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.task}>
            {task.isEditing ? (
              <>
                <input
                  style={styles.input}
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
                <button style={styles.button} onClick={() => editTask(task.id)}>
                  Sauvegarder
                </button>
              </>
            ) : (
              <>
                <span style={styles.taskText}>{task.text}</span>
                <div>
                  <button
                    style={styles.editButton}
                    onClick={() => enableEdit(task.id, task.text)}
                  >
                    Modifier
                  </button>
                  <button
                    style={styles.deleteButton}
                    onClick={() => deleteTask(task.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

/**
 * ======================
 *        STYLES
 * ======================
 */
let styles: { [key: string]: CSSProperties } = {
  app: {
    textAlign: "center",
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    gap: "8px",
    marginBottom: "16px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    flex: 1,
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#4CAF50",
    color: "white",
    transition: "background 0.3s",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  taskText: {
    fontSize: "18px",
  },
};
styles = {
  ...styles,
  editButton: {
    ...styles.button,
    backgroundColor: "#FF9800",
  },
  deleteButton: {
    ...styles.button,
    backgroundColor: "#F44336",
  },
};
