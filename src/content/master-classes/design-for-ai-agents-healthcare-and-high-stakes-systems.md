---
title: "Design for AI Agents: Healthcare and High-Stakes Systems"
description: "Discover how UX design enhances AI agents in healthcare and high-stakes systems, ensuring user-friendly experiences that improve outcomes and efficiency."
platform: "IxDF"
tags: ["ai", "healthcare", "ux", "agents"]
speakers:
  [
    {
      name: "Angel Brown",
      title: "Experience Strategist, Product Designer, and CEO of Locomotion",
    },
  ]
---

## Foundations of Agentic AI

### What Is an Agent?

- Agent: A system that can autonomously plan, take actions, use tools, reflect, and iterate toward a goal.
- Agentic system: An AI setup that goes beyond chat responses and executes tasks in the real world.
- Orchestrator: The primary controller agent that decomposes tasks and coordinates specialist agents.
- Specialist agents: Sub-agents responsible for specific functions (e.g., web search, reasoning, checklist validation).
- Zero-shot: Single prompt, no iterative reasoning.
- Agentic reasoning loop: Iterative process of planning → acting → evaluating → retrying.

### Core Capabilities of Agentic Systems

- Autonomous planning and decomposition: Breaks a high-level goal into executable steps.
- Dynamic tool use: Selects and uses tools (APIs, databases, software) as needed.
- Iterative self-reflection: Evaluates outputs and retries when needed.
- Persistent memory and state: Tracks user history, preferences, and progress.
- Multi-agent orchestration: Coordinates multiple specialized agents under a central controller.

### Why Agentic Systems Matter

- Improved problem-solving: Iterative reasoning improves performance over single-shot prompts.
- Higher benchmark performance: Agentic systems significantly outperform zero-shot LLM responses on expert-level exams.
- Shift in interaction: From “AI that says” to “AI that does.”

## AI Adoption in Healthcare

### Access and Demand Drivers

- Mental health access gaps: In some regions, psychologist-to-population ratios are extremely low.
- Late-night reassurance use case: Patients increasingly use LLMs for immediate medical reassurance.
- Healthcare pressure points:
  - Aging populations
  - Rise in chronic disease
  - Workforce shortages

### Clinical Integration Trends (2026 Onward)

- Agentic ambient scribes: AI systems that document consultations in real time.
- Cognitive load reduction: Clinicians report reduced “pajama time” (after-hours documentation).
- Triage acceptance: Patients are comfortable with AI-led triage if human oversight is clear.

## Case Studies in Agentic Healthcare

### Sword Health – AI Care Specialist (Phoenix)

#### Use Case: Post-operative Recovery

- Mission: Personalized physical therapy and rehabilitation.
- Features:
  - Real-time motion tracking
  - Adaptive session intensity
  - Visual and sonic feedback
  - AI negotiation (e.g., adjusting difficulty based on fatigue)

#### UX Patterns Observed

- Abstract AI representation (pulsing ball)
- Visual feedback (green skeletal alignment indicators)
- Real-time performance correction
- Negotiation logic: Adjusts plan based on user input

### Hippocratic AI – Voice-Based Clinical Agent

#### Use Case: Post-discharge Monitoring

- Focus:
  - Medication adherence
  - Symptom monitoring
  - Risk detection (e.g., DVT, infection)

#### Escalation Logic

1. Detect risk signals (e.g., shortness of breath).
2. Validate symptoms conversationally.
3. Trigger immediate human handoff when thresholds are met.

#### Explicit Boundaries

Agents do NOT:

- Diagnose
- Prescribe
- Handle hospice
- Manage mental health disorders
- Interact with children under two

Policy-driven safety is central.

## Building a Safe Medical Agent

### Model Development Pipeline

1. Foundation model: Base LLM (language capability).
2. Domain-adaptive pretraining: Train on medical literature, regulatory documents, care plans.
3. Dialogue fine-tuning:
   - Real-world healthcare conversations
   - Synthetic dialogue scripts (~3,500 scripts, ~20 mins each)
4. Specialist fine-tuning:
   - Nutrition
   - Screening
   - Follow-up care
5. RAG integration: Retrieval of up-to-date manuals and clinical documents.
6. Self-training: Generate synthetic examples to fix biases and repetition.
7. Reinforcement learning:
   - Clinicians rank outputs.
   - Poor responses revised.
   - Bedside manner evaluated using formal rubrics.

### Hallucination Reduction

- Constrained domain knowledge
- Tool-restricted environments
- Reinforcement learning with clinician feedback
- Policy-driven action limits

## Empathy and Human Interaction

### Empathy Findings

- AI solving quickly → users feel “processed.”
- AI validating emotions → users feel “cared for.”
- Study insight:
  - Users prefer human empathy.
  - AI empathy rated as highly supportive.
  - Best model: AI supplements human empathy.

### Evaluation Rubrics

- UK medical licensing bedside manner criteria
- 10-point nursing rubric
- Communication quality scoring

## Representation of AI

### Visual Identity Options

- Abstract representations: Avoid uncanny valley, reduce trust gaps.
- Hyper-realistic avatars:
  - Potentially useful for dementia populations.
  - Risk of deepfake distrust.
- Customizable agents: Some user demand, context-dependent.

### Voice-Only Challenges

- Fragmented speech
- Environmental noise
- Multiple speakers
- Poor diction

Hybrid interfaces (voice + screen) improve clarity and reliability.

## The Five UX Pivots for Mission-Oriented Agent Design

## Mission-Oriented Design Framework

### 1. From Flows to Mission

#### Key Shift

- Traditional UX: Linear “happy path.”
- Agentic UX: Mission with adaptive path selection.

#### Mission Canvas Example (Post-Op Knee Recovery)

- Mission objective: Safe mobility recovery within 12 weeks.
- Primary success state: 110° knee flexion without pain.
- Safety envelope:
  - Hip rotation constraints
  - Pain monitoring
  - Swelling detection
- Inputs:
  - Motion sensors
  - Self-reported pain
  - Session adherence
- Escalation triggers:
  - Pain thresholds
  - Missed sessions
  - Sensor-user conflict
- Persistence:
  - Last successful flexion
  - Patient preferences
  - Recovery after interruption

### 2. From Flows to State Maps

#### Core Agent States

- Idle: Passive monitoring.
- Reasoning: Internal analysis.
- Negotiation: User-agent discussion.
- Escalation: Human handoff.

#### Design Implications

- State maps > deterministic flows.
- Design for:
  - Interruptions
  - Recovery
  - Human intervention
  - Dynamic adaptation

### 3. From Personas to Authority Matrices

#### Traditional Persona

- Tone
- Personality
- Communication style

#### Agentic Addition: Computational Authority

- What the agent is allowed to do
- What systems it can access
- What actions are forbidden

Authority matrix defines:

- Scope of action
- System access
- Compliance boundaries

### 4. From Seamless UX to Designed Friction

#### Risk-Based Friction Framework

- Low risk:
  - Seamless execution
- Medium risk:
  - Soft confirmation
- High risk:
  - Hard approval gate
- Critical risk:
  - Forced escalation to human

Friction becomes:

- A safety mechanism
- A policy enforcement tool
- A design feature (not a failure)

### 5. From Black Box to Observable Reasoning

#### Transparency Requirements

- Show reasoning steps (at appropriate abstraction level).
- Link clinical claims to:
  - Sensor data
  - EHR records
  - Threshold rules

#### Dual Transparency Layers

- Patient view:
  - Reason summary
  - Key evidence
- Clinician view:
  - Full sensor logs
  - Triggered rule
  - Confidence score
  - Internal multi-agent trace

Trust = provenance + traceability.

## Key Design Themes

### Source of Truth

- Primary source: Electronic Health Record (EHR).
- Persistence model:
  - Historical baselines
  - State evolution over time.
- Authoritative data anchoring is mandatory in high-stakes settings.

### Managing Agreeable Outputs

- Strict policy enforcement
- Threshold-based escalation
- Reinforcement learning
- Structured verification workflows

### System Thinking for Designers

- Think in:
  - States
  - Checkpoints
  - Conditional transitions
- Comparable to:
  - Systems thinking
  - Video game level design (gates, triggers, unlocks)

### UX/UI Manager Core Competency

- Beyond layout and buttons.
- Required:
  - System-level reasoning
  - Policy negotiation understanding
  - Cross-functional fluency (ML + UX + compliance)
  - Experience-centered evaluation, not just accuracy metrics.

## Disclosure and Identity Transparency

- Agent identity disclosure: Required for trust.
- Transparency layers vary by audience.
- Provenance and data manipulation history must be visible at appropriate levels.

## Summary of Strategic Shift

- From chatbots → mission-driven agents.
- From static flows → dynamic state systems.
- From persona → computational authority.
- From frictionless UX → risk-calibrated friction.
- From black box → observable reasoning.
- From tool → clinical force multiplier.

Agentic AI in healthcare is not about replacing clinicians but augmenting them within strict policy, safety, and trust frameworks.
