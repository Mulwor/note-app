[Вопросы взяты от сюда](https://github.com/amitshekhariitbhu/ai-engineering-interview-questions)

## LLM Fundamentals

- What are foundation models, and how have they changed AI engineering?
- What is a Large Language Model (LLM), and how does it work?
- Inside ChatGPT: What Happens After You Hit Enter?
- What is the Transformer architecture and how does it work?
- What are the key components of the Transformer architecture?
- What is tokenization in LLMs?
- What is positional encoding, and why is it needed in Transformers?
- What are embeddings?
- What is self-attention, and how does it work in Transformers?
- What is Cross Attention in Transformers?
- Why do we scale the dot product attention by √dₖ in the Transformer architecture?
- What is causal masking?
- What are multi-head attention mechanisms? Why use multiple attention heads?
- What are Feed-Forward Networks in LLMs?
- What is the context window in LLMs, and why does it matter?
- Why is the context window limited in LLMs?
- What is temperature in the context of LLMs, and how does it affect output?
- Why is the first token slower than the rest in an LLM?
- Explain Top-p (nucleus) sampling and Top-k sampling. How do they differ?
- What are logits, and how are they used in text generation?
- What are skip connections (residual connections) in Transformers?
- What is the difference between open-source and closed-source LLMs? When would you choose one over the other?
- What is the difference between encoder-only, decoder-only, and encoder-decoder Transformer architectures?
- What is KV cache, and how does it speed up inference?
- What is model distillation, and how is it used with LLMs?
- What is Mixture of Experts (MoE), and how does it work in models like Mixtral?
- What is the difference between dense and sparse models?
- What is Flash Attention?
- What is Cross-Entropy Loss?
- What is Grouped-Query Attention (GQA), and how does it differ from Multi-Head Attention (MHA)?
- How does Rotary Position Embedding (RoPE) work, and why is it preferred over learned positional embeddings?
- Transformers work on text, so can they also understand images?
- What are Autoregressive Models?
- How do Diffusion Language Models (DLMs) work?
- How Does LLM Watermarking Work?
- How do RNNs and Transformers differ?

Some scenario LLM

- Your LLM keeps ignoring your instructions. How do you make it follow structured output formats?
- Your LLM-powered tool hits the context window limit on long documents. How do you handle it?
- Your LLM does not admit when it does not know the answer. How do you make it say "I don't know"?
- Your LLM generates responses that are too verbose. How do you control response length?
- Your LLM memorized proprietary training data and leaks it in responses. How do you prevent this?
- Your LLM coding assistant generates outdated code using deprecated libraries. How do you fix it?
- Your tokenizer splits important domain terms into meaningless subword pieces. How do you fix it?
- Your Transformer's KV cache grows too large during long sequence generation. How do you manage memory?
- Your Transformer runs out of memory on long documents due to quadratic self-attention. How do you scale it?
- Your distilled student model fails on the complex reasoning that the teacher model handled. How do you close the gap?
- After RLHF alignment, your LLM became safer but lost capability on hard tasks. How do you manage the alignment tax?
- Your RLHF-trained LLM is gaming the reward model instead of being genuinely helpful. How do you fix reward hacking?
- Your chatbot loses context after 10 turns in a conversation. How do you maintain a long conversation context?
- Your chatbot fails when users switch topics mid-conversation. How do you handle topic switches?
- Your QA system always generates an answer even when no answer exists in the context. How do you detect unanswerable questions?
- Your summarization system hallucinated facts not in the original article. How do you fix it?
- Your text generation repeats phrases in long outputs. How do you fix repetition?

## Retrieval-Augmented Generation (RAG)

- What is Retrieval-Augmented Generation (RAG), and why is it important?
- Explain the architecture of a basic RAG system.
- What are the key components of a RAG pipeline?
- What are chunking strategies, and how do you choose the right chunk size?
- Compare fixed-size chunking, semantic chunking, and recursive chunking.
- What are embedding models, and how do they convert text to vectors?
- How do you choose an embedding model for your RAG system?
- Explain Agentic RAG.
- What is hybrid search, and why is it better than pure vector search?
- What is re-ranking, and how does it improve RAG retrieval quality?
- How do you handle multi-document and multi-hop questions in RAG?
- What is the "lost in the middle" problem in RAG systems?
- How do you evaluate a RAG system? Explain faithfulness, relevance, and context precision/recall.
- Explain Self-RAG. How does the model decide when to retrieve?
- What is GraphRAG, and when would you use it over traditional RAG?
- Vectorless RAG
- How do you handle structured data (tables, SQL databases) in a RAG pipeline?
- What are the common failure modes of RAG systems, and how do you debug them?
- How do you handle document updates and maintain freshness in a RAG system?
- How do you optimize RAG for latency in production?
- What is the role of metadata filtering in RAG systems?
- Compare RAG vs fine-tuning. When would you use each?
- What is query transformation in RAG (HyDE, query decomposition, step-back prompting)?
- How do you implement citation and source attribution in RAG?
- How do you scale a RAG system to millions of documents?
- What is parent-child chunking, and how does it improve retrieval?

Some scenario RAG

- Your RAG system is hallucinating despite having the right context. How do you fix it?
- Your RAG chunk overlap causes redundant results. How do you reduce redundancy?
- Your RAG retrieval is too slow with a large knowledge base. How do you speed it up?
- Your RAG system returns duplicate results. How do you deduplicate?
- Your RAG system needs per-user access control on internal documents. How do you implement it?
- Your RAG system fails on domain-specific jargon. How do you fix it?
- Your text-only RAG system now needs to handle images and tables. How do you extend it?
- Your RAG knowledge base gets updated frequently and needs versioning. How do you manage it?
- Your RAG system fails on multi-hop questions that require combining multiple facts. How do you fix it?
- Your enterprise RAG system returns contradictory answers from different source documents. How do you resolve conflicts?
- Your RAG system returns outdated answers from an evolving knowledge base. How do you keep it current?
- Your RAG system struggles with PDF documents containing tables and layouts. How do you fix PDF parsing?

## Prompt Engineering
- What is prompt engineering, and why is it critical for AI applications?
- Explain zero-shot, one-shot, and few-shot prompting with examples.
- What is chain-of-thought (CoT) prompting, and when should you use it?
Explain self-consistency prompting and how it improves reasoning.
- What is tree-of-thought prompting?
- What is ReAct (Reasoning + Acting) prompting, and how does it work?
- What is a system prompt, and how does it influence model behavior?
- How do you structure prompts for consistent structured output (JSON, XML)?
- What is prompt injection, and how do you defend against it?
- What is jailbreaking in LLMs, and what are common jailbreak techniques?
- How do you optimize prompts for cost and latency?
- What is the difference between prompt engineering and prompt tuning?
- What is a prompt template, and how do you design one for production use?
- How do you handle multi-turn conversations with LLMs?
- What is role prompting, and when is it effective?
- What is prompt chaining, and how do you design a chain of prompts for complex tasks?
- How do you evaluate and iterate on prompt quality?
- What are meta-prompts, and how can they be used to generate prompts?
- What are the common failure modes in prompting, and how do you debug them?
- How do you handle edge cases and adversarial inputs in prompt design?
- What is the "lost in the middle" problem in long-context prompting?
- What are output parsers, and why are they needed for production applications?
- How do you handle multi-language prompting effectively?

__ Some scenario Prompt Engineering __

- Your few-shot prompting gives inconsistent results across similar inputs. How do you stabilize it?
- Your LLM classification system is too sensitive to prompt wording changes. How do you reduce prompt sensitivity?
- Your chatbot's system prompt containing proprietary business logic is being leaked by users. How do you prevent it?
- Your LLM agent is vulnerable to prompt injection that reveals the system prompt. How do you defend it?
- Your chain-of-thought prompting is not improving LLM accuracy on reasoning tasks. What do you fix?
- Your AI system works in English but fails for other languages. How do you add multilingual support?
- Your zero-shot cross-lingual transfer from English fails on other languages. How do you fix it?

## AI Agents and Agentic Systems
-  What is an AI agent, and how does it differ from a simple LLM call?
- AI Agent Memory
- Harness Engineering in AI
- Explain the ReAct (Reasoning + Acting) agent architecture.
- What is the Plan-and-Execute agent pattern?
- What is tool use (function calling) in LLMs, and how does it enable agents?
- How do you design and define tools for an AI agent?
- What is the difference between single-agent and multi-agent systems?
- What is Model Context Protocol (MCP), and how does it standardize tool integration?
- What are AI SubAgents?
- What are the different types of agent memory (short-term, long-term, episodic)?
- How do you handle agent failures and implement error recovery?
- What is an agent loop, and how does it decide when to stop?
- Context Engineering
- How does context compaction work?
- Loop Engineering
- Graph Engineering
- How AI Agents Communicate?
- What are Agent Skills?
- How do you evaluate and test AI agents?
- What are the security risks of agentic systems, and how do you mitigate them?
- What is the difference between reactive and proactive agents?
- How do you manage token consumption and cost in long-running agent workflows?
- What is the human-in-the-loop pattern for agents, and when is it needed?
- How do you implement guardrails for AI agents to prevent harmful actions?
- What is agent reflection, and how does it improve agent performance?
- What is the difference between code-generating agents and tool-calling agents?
- How do you handle multi-modal inputs and outputs in agentic systems?
- How do you implement state management in complex agent workflows?
- How do you build a customer support agent with escalation logic?
- What is agent orchestration, and how do you implement it?
- How do you build a code execution agent safely using sandboxed environments?
- How do you fix parameter extraction?
- How do Computer-Use Agents work?
- How does LangChain / LangGraph work?
- What is OKF (Open Knowledge Format)?

__ Some scenario AI Agent__

- Your AI agent is stuck in an infinite loop. How do you detect and break the cycle?
- Your AI agent gets conflicting answers from different tools. How does it reconcile them?
- Your AI agent burns too many tokens per task. How do you reduce token consumption?
- Your AI agent keeps exceeding its budget per task. How do you enforce budget limits?
- Your AI agent hallucinates tool capabilities and passes wrong inputs. How do you fix it?
- Your AI agent deleted a production database. How do you prevent irreversible actions?
- Your AI agent has many tools, but keeps picking the wrong one. How do you improve tool selection?
- Your AI agent takes too long to complete a task. How do you speed it up?
- Your LLM selects the right tool but extracts the wrong parameters. How do you fix parameter extraction?

## Fine-Tuning and Model Adaptation
- What is fine-tuning, and when should you fine-tune an LLM?
- Explain the difference between full fine-tuning and parameter-efficient fine-tuning (PEFT).
- What is LoRA (Low-Rank Adaptation), and how does it work?
- What is QLoRA, and how does it enable fine-tuning on consumer hardware?
- How does fine-tuning work?
- Explain Prefix Tuning and Prompt Tuning. How are they different from LoRA?
- What is adapter-based fine-tuning?
- What is RLHF (Reinforcement Learning from Human Feedback), and how is it used to align LLMs?
- What is instruction tuning, and why is it important for chat models?
- How do you prepare a dataset for fine-tuning an LLM?
- What is catastrophic forgetting, and how do you prevent it during fine-tuning?
- When should you choose fine-tuning over RAG over prompt engineering?
- How do you evaluate a fine-tuned model's performance?
- What is synthetic data generation, and how do you use it for fine-tuning?
- What are the key hyperparameters for fine-tuning (learning rate, epochs, batch size, LoRA rank)?
- How do you fine-tune a model for a specific domain (legal, medical, finance)?
- What is continual pre-training, and when would you use it?
- How do you merge multiple LoRA adapters?
- What is the difference between SFT (Supervised Fine-Tuning) and alignment training?
- What is RLAIF (RL from AI Feedback), and how does it differ from RLHF?
- What is knowledge distillation for fine-tuning, and what are the legal considerations?

__ Some scenario Fine-Tuning and Model Adaptation__

- Your fine-tuned LLM produces factually wrong outputs due to training data quality issues. How do you fix it?
- You must choose between LoRA and full fine-tuning for a domain-specific assistant. How do you decide?
- Your fine-tuned model memorized training data verbatim instead of learning patterns. How do you fix overfitting?
- Your fine-tuned LLM forgot its general capabilities after domain-specific fine-tuning. How do you fix catastrophic forgetting?
- Your RLHF preference data has low annotator agreement. How do you ensure data quality?

## Vector Databases and Embeddings
- What are embeddings in the context of AI engineering?
- How do embedding models convert text to vectors?
- What is the difference between sparse and dense embeddings?
- Explain cosine similarity, dot product, and Euclidean distance for vector search.
- What is a vector database, and how does it differ from a traditional database?
- How does Approximate Nearest Neighbor (ANN) search work?
- How do you choose the right embedding model for your use case?
- What is embedding dimensionality, and how does it affect performance and cost?
- How do you handle embedding drift when the embedding model is updated?
- What are multi-modal embeddings, and how are they generated?
- How do you index and query multi-tenant data in a vector database?
- What is quantization of embeddings, and how does it reduce storage costs?
- How do you benchmark and evaluate embedding model quality?
- What is the role of metadata in vector databases?
- How do you handle large-scale vector search with billions of vectors?
- What is hybrid search (combining keyword search with vector search)?
- How do you fine-tune an embedding model for a specific domain?

__ Some scenario vector databases and embeddings__

Your vector database for RAG is consuming too much memory. How do you reduce it?
Your vector database cannot scale to millions of embeddings. How do you fix the bottleneck?
Your new embedding model has different dimensions from the existing vectors in production. How do you handle the mismatch?
Your vector search returns irrelevant results despite high similarity scores. How do you fix it?
You deployed a new embedding model, and search quality crashed overnight. How do you handle embedding drift?
Your semantic search fails for short queries. How do you improve it?

## Evaluation and Testing

- AI Agent Evaluation
- LLM Evaluation
- AI Agent Observability
- What is evaluation-driven development for AI applications?
- How do you evaluate LLM outputs? What metrics do you use?
- Explain BLEU, ROUGE, and BERTScore. When would you use each?
- What is G-Eval, and how does it use LLMs for evaluation?
- What is LLM-as-a-judge evaluation, and what are its limitations?
- How do you conduct human evaluation for AI systems?
- What is red teaming, and how do you red team an LLM application?
- How do you detect and measure hallucinations in LLM outputs?
- What is adversarial testing for AI systems?
- How do you build a regression test suite for AI applications?
- What are benchmark suites (MMLU, HumanEval, GSM8K), and how do you interpret them?
- How do you evaluate a RAG system end-to-end?
- How do you evaluate the quality of AI agents?
- What is the difference between offline and online evaluation for AI systems?
- How do you measure factual consistency in LLM outputs?
- How do you evaluate multi-turn conversation quality?
- What is the role of golden datasets in AI evaluation?
- How do you implement continuous evaluation for production AI systems?
- How do you evaluate bias in AI model outputs?
- How do you compare two models or prompts in a statistically rigorous way?
- How do you evaluate the robustness of an LLM application across input variations?
- What are the key differences between evaluating traditional ML vs LLM applications?
- How do you set up an evaluation framework from scratch for a new LLM application?


__ Some scenario evaluation and Testing__

- Your model passes one fairness metric but fails another. How do you handle conflicting audit results?
- Your model was fair at deployment, but became biased 6 months later. How do you monitor continuously?
- An external auditor cannot reproduce your model's results. How do you ensure audit reproducibility?
- How do you structure red teaming for an LLM chatbot before launch?
- How do you red team a multimodal model where text-only safety tests miss cross-modal attacks?