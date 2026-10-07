---
layout: ../../layouts/Note.astro
title: "Template: the writeup format I use"
description: A reusable structure for room, box, and incident writeups. Copy this file, replace the content, keep the shape.
date: 2026-09-28
track: Meta
tags: [template, method]
lang: en
---

Copy `src/pages/writing/writeup-template.md`, rename it, replace the content. The shape matters more
than the prose: consistency is what makes a body of writeups read as a portfolio rather than a pile
of posts.

## Target

What it is, where it lives, why I picked it. One or two lines. If it is a deliberately vulnerable
target or an authorised engagement, say so explicitly here. Every writeup should make its legal
basis obvious to a reader who arrives cold.

## Goal

What I was trying to learn, not just what I was trying to root. "Practise manual SQL injection
without sqlmap" is a goal. "Get the flag" is not.

## Enumeration

```bash
# The actual commands, with the actual flags.
nmap -sC -sV -oA scans/initial 10.10.10.10
```

What the output told me, and (more useful) what I expected and did not find.

## What I tried that failed

This is the section most people delete, and it is the section that makes the writeup worth reading.
Dead ends, wrong assumptions, the thing I misread for twenty minutes. It is also the section that
makes the writeup useful to *me* in six months.

## The path that worked

Step by step, reproducible. Enough that someone else could follow it; not so much that it becomes a
walkthrough that removes the thinking.

## Privilege escalation

Same discipline: what I enumerated, what I found, why the misconfiguration existed.

## The defensive view

What would have caught this? Which log, which detection, which control. Two or three lines.

Every offensive writeup that includes this section is worth roughly double one that does not. It
demonstrates that I understand what I am doing rather than which tool to run, and it is directly
reusable in a blue-team interview.

## One thing worth remembering

A single command, flag, or concept. The thing that goes into Anki.

---

**Checklist before publishing:** no real credentials or client data · commands are the ones I actually
ran · a defensive section exists · a stranger could follow the path · the failures are still in it.
