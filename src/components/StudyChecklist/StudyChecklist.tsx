// src/components/StudyChecklist/StudyChecklist.tsx
import { useState, useEffect } from "react";
import styles from "./StudyChecklist.module.css";
import { Button } from "../Buttons/Button"; // reaproveitando seu botão!

interface Task {
  id: number;
  text: string;
  done: boolean;
}

export function StudyChecklist() {
  // Inicializa buscando do localStorage, ou começa como array vazio []
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("studyTasks");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const [newTaskText, setNewTaskText] = useState("");

  // Sempre que o array de tasks mudar, salva de novo no localStorage
  useEffect(() => {
    localStorage.setItem("studyTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue ao dar "enter"
    if (!newTaskText.trim()) return;

    const newTask: Task = {
      id: Date.now(), // Gera um ID único numérico
      text: newTaskText,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText(""); // Limpa o input
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addTask} className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Ex: Aprender React, Terminar o slide..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          className={styles.input}
        />
        {/* Reaproveitei do seu sistema, se der erro aqui mude para um <button> comum */}
        <Button variant="verde" onClick={() => {}}>
          Adicionar
        </Button>
      </form>

      <ul className={styles.list}>
        {tasks.length === 0 && (
          <p className={styles.empty}>
            Sua lista está vazia. Adicione um estudo!
          </p>
        )}

        {tasks.map((task) => (
          <li
            key={task.id}
            className={`${styles.task} ${task.done ? styles.done : ""}`}
          >
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className={styles.checkbox}
              />
              <span className={styles.text}>{task.text}</span>
            </label>
            <button
              type="button"
              onClick={() => deleteTask(task.id)}
              className={styles.deleteBtn}
              title="Deletar tarefa"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
