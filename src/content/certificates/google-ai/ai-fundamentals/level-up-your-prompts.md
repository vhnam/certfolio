---
title: Level up your prompts
description: Understand advanced prompting techniques and practice prompt chaining.
---

## Prompt Chaining Strategies

### Advanced Prompting Techniques

After learning the prompting framework (persona, task, context, format), two advanced techniques help handle complex tasks:

- Powerful prompt phrases: Precise wording within a single prompt to improve AI reasoning and output quality.
- Prompt chaining: Using multiple connected prompts to break large tasks into manageable steps.

These techniques allow AI to move from simple responses to structured collaboration.

### Using Powerful Prompt Phrases

Powerful prompt phrases guide not only **what** AI should do but **how** it should approach the task.

They add clarity, structure, and reasoning constraints to prompts.

#### Guide AI Through a Process

Provide a step-by-step structure for the task.

Examples:

```
- Think step-by-step.
- First, [action 1]. Second, [action 2]. Finally, [action 3].
```

This encourages logical reasoning in the response.

#### Define Audience and Tone

Specify who the content is for and the communication style.

Examples:

```
- Write this for an audience of [audience type, e.g., executives].
- The tone should be [tone, e.g., professional].
```

This helps AI tailor language and complexity.

#### Set Constraints

Define strict requirements for the output.

Examples:

```
- Write a one paragraph summary.
- Focus exclusively on [topic A, e.g. revenue] and do not mention [topic B, e.g., costs].
```

Constraints narrow the scope of AI responses.

#### Request a Critique

Ask AI to evaluate or challenge ideas.

Examples:

```
- Critique this text from the perspective of a [role, e.g., potential customer].
- Play devil's advocate. What is the strongest counterargument to this?
```

This improves analysis and decision-making.

#### Generate Alternatives

Ask AI to explore multiple solutions.

Examples:

```
- Give me 3 different versions of this.
- What's an alternative approach to solving this problem?
```

Generating options encourages creative problem solving.

#### Expand or Deepen Responses

Request more detail on specific sections.

Examples:

```
- Elaborate on point 2.
- Provide more detail and specific examples for the section about [section].
```

This helps refine and enrich the output.

### Prompt Chaining for Complex Tasks

- Prompt chaining: A method where multiple prompts are linked together, using the output from one prompt as the input for the next.

Purpose:

- Break large tasks into smaller steps
- Structure workflows
- Improve clarity and accuracy

Analogy:

- Similar to an assembly line where each step builds on the previous one.

### Example of Prompt Chaining

A vacation planning task can be structured with multiple prompts.

```
- Prompt 1: I'm going to Paris for 3 days. I like art, historical sites, and parks. Suggest a few well-known places I could visit on my trip.
- Prompt 2 (second prompt in chain): Using those locations, create a logical day-by-day itinerary that minimizes travel time.
- Prompt 3 (third prompt in chain): For each day of the itinerary, suggest a few restaurants located near the suggested locations.
```

Each prompt builds on the previous output to complete the larger project.

### Benefits of Prompt Chaining

Prompt chaining transforms AI from a simple answer generator into a structured collaborator.

Key advantages:

- Strategic collaboration:
  - AI helps analyze and refine ideas.
- Complex problem solving:
  - Large projects become manageable steps.
- Stronger outputs:
  - Layered prompts produce deeper and more tailored results.

### Applying Prompt Chaining in Work

Prompt chaining can support many professional tasks.

Examples:

- Marketing:
  - Generate a campaign concept → create a launch timeline.
- Sales:
  - Identify potential clients → draft personalized outreach emails.
- Operations:
  - Detect workflow bottlenecks → propose step-by-step solutions.

Using conversation-based workflows allows AI to help turn ideas into actionable plans.

## Practicing Prompt Chaining in Gemini

### Purpose of the Lab

- Goal: Practice **prompt chaining** to solve larger problems through multiple connected prompts.
- Technique focus:
  - Break complex tasks into smaller steps
  - Use each AI response as input for the next prompt
- Tool used: Gemini.

The example scenario uses a painting company, but the method can be adapted to any business or professional task.

### Step 1: Brainstorm Service Options

Start a new chat and ask AI to generate possible service expansions.

Process:

1. Describe the business.
2. Ask AI to act as a business advisor.
3. Provide context or constraints.

Example constraints:

```
I want to expand my [company description, e.g. painting company]'s service offerings. Act as my business advisor and list 3 complementary services we could provide. Keep in mind: [context and constraints, e.g. we have a team of 4 painters and tight office space].
```

Goal:

- Generate a small set of complementary service ideas.

### Step 2: Evaluate the Options

Analyze the ideas generated in the previous step.

Process:

1. Stay in the same chat.
2. Ask evaluation questions about the options.
3. Assess feasibility and challenges.

Example evaluation question:

```
Which of these can we launch within 6 months?
```

Goal:

- Identify the most practical opportunity.

### Step 3: Create an Action Plan

Convert the selected idea into concrete tasks.

Process:

1. Choose one option from the previous step.
2. Ask AI to generate a short-term task list.
3. Focus on actions that can be completed soon.

Example timeframe:

```
If I want to move forward with [1 option from Gemini’s response in the previous step], what tasks should I complete this week?
```

Goal:

- Turn ideas into actionable steps.

### Applying Prompt Chaining to Real Work

Prompt chaining helps structure complex workflows.

Key benefits:

- Break large projects into manageable tasks
- Improve clarity and decision-making
- Build results progressively across multiple prompts

Common use cases include:

- Business strategy planning
- Product or service development
- Project planning and task management.

## Managing Long AI Conversations Effectively

### Context Growth in Long Chats

- Context: The information AI uses from earlier parts of a conversation to generate responses.

As conversations grow longer:

- The amount of context AI must track increases.
- Output quality may gradually decline after many interactions.

This can make responses less accurate or less relevant over time.

### Restarting a Chat When Needed

When a conversation becomes too long, it may help to start a new chat.

Recommended approach:

1. Ask AI to summarize the current conversation.
2. Copy the summary of what has been discussed and completed.
3. Start a new chat.
4. Paste the summary into the new chat as context.

This preserves important information while resetting the conversation.

### Reattaching Supporting Materials

If the original conversation included files or attachments:

- Re-upload the same documents in the new chat.

Examples of materials to reattach:

- Documents
- Images
- Data files
- Reference materials

This ensures AI still has access to important resources.

### Continuing the Workflow

When starting the new chat:

- Provide the summarized context.
- Reattach relevant files.
- Explain the progress already made.
- Ask the next question or request the next step.

This method maintains continuity while improving response quality in longer projects.

## Generating Visuals with AI

### Beyond Text: Multimodal AI

- Multimodality: The ability of AI to work with multiple input and output formats such as text, images, audio, and video.

Using multimodal AI tools like Gemini allows you to:

- Create images or videos from text prompts
- Generate written content based on images
- Build presentations from audio recordings

Combining multiple formats provides richer context and expands what AI can produce.

### How Multimodal Prompting Works

Instead of relying only on text instructions, you can include additional media to guide the AI.

Examples of multimodal inputs:

- Images
- Videos
- Audio recordings
- Documents

This helps AI better understand your intent and generate more accurate or creative results.

### Creating Visuals with AI Models

In Gemini, image generation and editing can be done using specialized models such as **Nano Banana Pro**.

These models allow you to:

- Generate images from text descriptions
- Modify existing images
- Experiment with style, lighting, and composition

This enables users to create visual assets without needing advanced design tools.

### Skills You Can Develop

Using AI to generate visuals helps build several practical capabilities:

- **Visual storytelling** — Quickly create images that communicate your ideas.
- **Multimodal prompting** — Learn how to combine text and images effectively in prompts.
- **Efficient workflows** — Generate visuals and written content together in a single chat.

### Practical Use Cases

Multimodal AI can be applied across different fields:

- **Marketing:** Create social media images for product launches.
- **Sales:** Generate visuals to enhance presentations or slide decks.
- **Education:** Produce visual aids for lesson plans.

The main benefit is turning abstract ideas into concrete visual assets quickly.

### Lab Practice

The accompanying lab demonstrates:

- Generating images from text prompts
- Using images as part of prompts
- Refining and combining visuals with other content

Completing the lab helps you practice using AI tools to create visual content for real-world work scenarios.

## Creating Custom Images with AI

### Purpose of the Lab

This exercise teaches how to generate custom images using Gemini.

AI image generation can help you:

- Create visuals for presentations
- Design social media content
- Produce custom graphics for work projects

The lab example uses a **concert poster**, but the same process can be applied to any visual project.

### Step 1: Brainstorm Image Concepts

Start by asking AI to generate creative ideas for your image.

Provide details such as:

- Image type (poster, slide, social media post)
- Subject or topic
- Visual style (modern, retro, minimalist)
- Mood (excited, calm, mysterious)

AI can suggest several concepts, including:

- A visual layout description
- A suitable color palette

You can also upload a **reference image** to guide the style or composition.

Example task:

```
I need some ideas for a [type of image, e.g. concert poster, social media post, or presentation slide] about [what the image is about, e.g. a music band].

The style should be [visual style, e.g. modern, retro, or minimalist] and the mood should be [mood, e.g. excited, calm, or mysterious].

Please give me 3 different creative concepts. For each concept, provide a:

1. Description: A brief explanation of the visual layout.
2. Color Palette: A set of colors that fit the mood.

OPTIONAL:

Reference Image: I have attached an image for you to use as a reference. Please look at this image and use its [composition / color scheme / overall vibe] to inform your suggestions.
```

### Step 2: Generate Text for the Image

Next, create text that will appear in or accompany the visual.

Specify:

- The project type
- The topic or message
- Desired tone (bold, professional, playful)
- The goal (promotion, explanation, engagement)

AI can produce multiple text options, ranging from **short headlines** to **more descriptive content**.

Example task:

```
Generate 3 options for text for a [type of project, e.g. poster, social media post, or presentation slide] about [the main subject or topic].

For context, [additional details or key information]. The tone of the writing should be [desired style, e.g. bold, professional, or playful] in order to [primary objective, e.g. get people to attend, explain a concept, or spark a conversation].
```

### Step 3: Generate the Image

Combine the selected **visual concept** and **text** to generate the final image.

Include details such as:

- Main subject of the image
- Visual style (photographic, illustration, 3D render)
- Layout requirements
- Mood or atmosphere

Providing both visual and textual context helps AI generate more accurate results.

Example task:

```
Based on the [chosen creative concept] and the text '[insert your favorite headline/text here]', generate a detailed image.

The image should feature [subject/main focus] in a [visual style, e.g. photographic, 3D render, or oil painting] style.

Ensure the composition includes [layout requirements, e.g. plenty of empty space at the top or a blurred background]. The overall mood should be [mood/vibe].
```

### Step 4: Refine and Edit the Image

After the image is generated, you can iteratively refine it.

Possible adjustments include:

- **Composition changes:** move elements to improve layout
- **Lighting or color adjustments:** change brightness or color palette
- **Adding or removing details:** modify background elements or textures
- **Style changes:** switch between styles such as photo, vector, or illustration

You can repeat this process until the image matches your desired result.

Example tasks:

Changing the Composition:

```
This is great, but can you move the [subject, e.g. the guitar] to the [position, e.g. left side] to leave more room for my text on the [opposite side, e.g. right]?
```

Adjusting the Lighting/Color:

```
Can you make the overall lighting [mood, e.g. brighter and more natural] and change the background colors to [specific colors, e.g. shades of blue and silver]?
```

Adding or Removing Detail:

```
Please keep the same style, but add [detail, e.g. a subtle texture or more people in the background] and remove the [item to remove, e.g. the bright lens flare].
```

Modifying the Style:

```
I like the layout, but can you change the style from [current style, e.g. a photo] to a [new style, e.g. a minimalist vector illustration]?
```

### Key Workflow

The overall workflow for AI image creation:

1. Brainstorm visual ideas
2. Generate supporting text
3. Create the image using both elements
4. Iterate and refine the design

This process helps transform abstract ideas into polished visual assets quickly.
