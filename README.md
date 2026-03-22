# 🔍 RepoGinie

> **Ask questions. Get answers. Understand any codebase — instantly.**

RepoGinie is a Retrieval Augmented Generation (RAG) powered developer tool that lets you have a conversation with any GitHub repository. Instead of spending hours manually tracing through hundreds of files, RepoGinie indexes the codebase, retrieves the most relevant code sections, and explains the logic in plain language — grounded in the actual implementation.

---

## ✨ What Can You Ask?

```
"What does this repository do?"
"Explain the authentication flow."
"Where is the database connection defined?"
"Which file handles API routing?"
"Walk me through the architecture."
```

RepoGinie retrieves the relevant code and answers from it — not from guesswork.

---

## 🧠 How It Works

Large Language Models can't read entire repositories — context windows have limits. RepoGinie solves this with **Retrieval Augmented Generation (RAG)**:

```
GitHub Repository URL
        ↓
  Fetch files via GitHub API
        ↓
  Filter relevant code files
        ↓
   Split files into chunks
        ↓
   Generate vector embeddings
        ↓
    Store in Qdrant Vector DB
```

When you ask a question:

```
       Your Question
            ↓
  Embed the question as a vector
            ↓
  Search Qdrant for similar chunks
            ↓
  Retrieve the most relevant code
            ↓
   Send context + question to LLM
            ↓
      ✅ Grounded answer returned
```

---

## 🏗️ System Architecture

```
User
 ↓
Next.js Frontend
 ↓
FastAPI Backend  ←── RAG Pipeline
 ↓
GitHub API
 ↓
Code Chunking & Embedding
 ↓
Qdrant Vector Database
 ↓
Similarity Search
 ↓
LLM  (OpenAI / Gemini / Anthropic)
 ↓
Answer Returned to User
```

---

## 🛠️ Tech Stack

| Layer | Technology | Role |
|-------|------------|------|
| **Frontend** | Next.js | UI, chat interface, API key input |
| **Backend** | FastAPI (Python) | RAG pipeline, embeddings, retrieval |
| **Vector DB** | Qdrant Cloud | Store & search code embeddings |
| **Ingestion** | GitHub API | Fetch repo files without cloning |
| **LLM** | OpenAI / Gemini / Claude | Generate natural language answers |

> Python powers the backend because it has the strongest ecosystem for AI and retrieval systems.

---

## 🤖 Supported LLM Providers

RepoGinie supports multiple model providers. You bring your own API key — it is **never stored**.

- **OpenAI** (GPT-4 and variants)
- **Google Gemini**
- **Anthropic Claude**

Your key is used only for the current session and discarded when it ends. No billing risk on our end. Full control on yours.

---

## 🔐 Security Model

1. You paste your API key into the UI
2. It is used **only for that session**
3. Requests are sent directly to your chosen model provider
4. The key is discarded when the session ends

No keys stored. No surprises.

---

## 📦 Vector Storage

Each indexed code chunk is stored in **Qdrant Cloud** with rich metadata:

- `repository` — the source repo
- `file_path` — exact location in the codebase
- `chunk_id` — position within the file
- `language` — programming language detected

This enables fast, semantic, language-aware retrieval at query time.

---

## ⚡ Features

- 🗂️ **Index any public GitHub repository**
- 🔎 **Semantic code search** — finds relevant chunks by meaning, not keywords
- 🤖 **Multi-model support** — swap between OpenAI, Gemini, and Claude
- 💬 **Developer-friendly chat interface**
- 📎 **Source-aware answers** — responses cite the actual files they came from
- 🏛️ **Architecture explanations** — understand the full project structure at a glance

---

## 🚀 Example Use Case

A developer discovers a new open-source project but doesn't want to read 300 files.

They paste the repo URL into RepoGinie and ask:

```
Explain the authentication flow in this project.
```

RepoGinie retrieves the relevant files — middleware, token validators, route guards — and generates a clear, structured explanation based on the **actual code**, not documentation that might be out of date.

---

## 🔭 Roadmap

- [ ] **Repository caching** — skip re-indexing unchanged repos
- [ ] **Smarter chunking** — code-aware splitting that respects function boundaries
- [ ] **Hybrid search** — combine keyword and vector search for higher precision
- [ ] **Code graph retrieval** — follow call graphs and import trees
- [ ] **Architecture visualization** — auto-generate diagrams of project structure
- [ ] **Multi-repo querying** — ask questions across multiple codebases at once

---

## 🎯 Project Goal

RepoGinie demonstrates how **Retrieval Augmented Generation** can be applied to real developer workflows — not just toy demos.

It showcases:

- End-to-end RAG system design
- Practical vector database integration
- Code-specific retrieval strategies
- Multi-provider LLM integration
- Scalable, production-ready AI architecture

---

## 📄 License

MIT — free to use, fork, and build upon.

---

<p align="center">
  <em>Built for developers who'd rather understand code than just read it.</em>
</p>