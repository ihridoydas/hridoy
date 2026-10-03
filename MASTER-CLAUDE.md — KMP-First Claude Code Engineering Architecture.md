# MASTER CLAUDE
## Claude Code Global Engineering Architecture — KMP First

**Version:** 2.0  
**Purpose:** Personal AI Engineering Environment  
**Primary Role:** Kotlin Multiplatform / Mobile / Software Architect  
**Primary Stack:** Kotlin • Kotlin Multiplatform • Android • iOS • Compose Multiplatform  
**Scope:** Global Claude Code configuration + project-local configuration

---

# 1. Architecture Philosophy

This Claude environment is designed around **Kotlin Multiplatform first**.

The architecture must not assume that Android is the center of every project.

Instead:

```text
                    KOTLIN MULTIPLATFORM
                           │
             ┌─────────────┼─────────────┐
             │             │             │
         commonMain    intermediate    platform
             │          source sets     source sets
             │             │             │
             │             │       ┌─────┼─────┐
             │             │       │     │     │
             ▼             ▼     Android iOS  JVM/Web
        Shared Logic    Shared        │
        Shared Models   Platform      │
        Shared Domain   APIs          ▼
        Shared UI                    Apps
```

Claude must always ask:

> Can this logic live in `commonMain`?

before placing implementation in a platform-specific source set.

The broadest applicable source set should be preferred.

---

# 2. Global vs Local

```text
GLOBAL
~/.claude/
    ↓
Personal engineering standards
KMP knowledge
Reusable workflows
Reusable agents
Reusable skills
    ↓
ALL PROJECTS


LOCAL
<project>/
└── .claude/
    ↓
Project-specific architecture
Business rules
Target configuration
Dependencies
Product requirements
    ↓
ONE PROJECT
```

The key principle:

> **Global = how I engineer.**  
> **Local = what this project requires.**

---

# 3. KMP-First Global Directory

Recommended:

```text
~/.claude/
│
├── CLAUDE.md
│
├── settings.json
├── settings.local.json
│
├── rules/
│   │
│   ├── engineering.md
│   ├── architecture.md
│   ├── clean-code.md
│   ├── solid.md
│   ├── security.md
│   ├── testing.md
│   ├── git.md
│   ├── documentation.md
│   ├── performance.md
│   └── multiplatform.md
│
├── skills/
│   │
│   ├── kotlin/
│   │   └── SKILL.md
│   │
│   ├── kotlin-multiplatform/
│   │   └── SKILL.md
│   │
│   ├── kmp-architecture/
│   │   └── SKILL.md
│   │
│   ├── source-sets/
│   │   └── SKILL.md
│   │
│   ├── expect-actual/
│   │   └── SKILL.md
│   │
│   ├── compose-multiplatform/
│   │   └── SKILL.md
│   │
│   ├── android/
│   │   └── SKILL.md
│   │
│   ├── ios/
│   │   └── SKILL.md
│   │
│   ├── desktop/
│   │   └── SKILL.md
│   │
│   ├── web/
│   │   └── SKILL.md
│   │
│   ├── wasm/
│   │   └── SKILL.md
│   │
│   ├── gradle/
│   │   └── SKILL.md
│   │
│   ├── convention-plugins/
│   │   └── SKILL.md
│   │
│   ├── dependency-management/
│   │   └── SKILL.md
│   │
│   ├── networking/
│   │   └── SKILL.md
│   │
│   ├── database/
│   │   └── SKILL.md
│   │
│   ├── serialization/
│   │   └── SKILL.md
│   │
│   ├── concurrency/
│   │   └── SKILL.md
│   │
│   ├── testing/
│   │   └── SKILL.md
│   │
│   ├── debugging/
│   │   └── SKILL.md
│   │
│   ├── performance/
│   │   └── SKILL.md
│   │
│   ├── security/
│   │   └── SKILL.md
│   │
│   ├── code-review/
│   │   └── SKILL.md
│   │
│   ├── refactoring/
│   │   └── SKILL.md
│   │
│   ├── git/
│   │   └── SKILL.md
│   │
│   ├── ci-cd/
│   │   └── SKILL.md
│   │
│   └── release/
│       └── SKILL.md
│
├── agents/
│   │
│   ├── kmp-architect.md
│   ├── mobile-architect.md
│   ├── kotlin-engineer.md
│   ├── android-engineer.md
│   ├── ios-engineer.md
│   ├── multiplatform-reviewer.md
│   ├── code-reviewer.md
│   ├── security-engineer.md
│   ├── test-engineer.md
│   ├── performance-engineer.md
│   └── release-engineer.md
│
├── hooks/
│   │
│   ├── format.sh
│   ├── lint.sh
│   ├── test.sh
│   ├── kmp-check.sh
│   └── security-check.sh
│
└── projects/
    └── <project-state>
```

---

# 4. Global CLAUDE.md

File:

```text
~/.claude/CLAUDE.md
```

Recommended core instruction:

```markdown
# Global KMP Engineering Instructions

You are assisting a professional Kotlin Multiplatform engineer
and software architect.

## Primary Principle

Prefer multiplatform solutions when technically appropriate.

Before implementing platform-specific code, determine whether
the functionality can be implemented in:

1. commonMain
2. an appropriate intermediate source set
3. platform-specific source set

Prefer the broadest applicable source set.

## Before Changing Code

1. Inspect the project.
2. Inspect Gradle configuration.
3. Inspect source-set hierarchy.
4. Identify target platforms.
5. Identify dependency constraints.
6. Understand existing architecture.
7. Check existing tests.
8. Make the smallest appropriate change.

## KMP Rule

Do not move code to Android, iOS, JVM, JS, or Wasm merely
because the implementation is easier there.

First determine whether a common abstraction is appropriate.

## Platform Rule

Platform-specific APIs belong in the appropriate platform
or intermediate source set.

Do not leak platform-specific dependencies into common code.

## Architecture

Prefer:

common domain
    ↓
common data
    ↓
common presentation
    ↓
platform implementation
    ↓
platform entry point

when the project requirements support this architecture.

## Dependencies

A dependency must be available to the source set in which it
is used.

Never assume that an Android dependency is automatically
available to commonMain.

## Testing

Test common business logic in commonTest whenever possible.

Add platform-specific tests only when platform behavior requires it.

## Safety

Never:

- delete user work
- reset git history
- expose secrets
- invent APIs
- invent requirements
- claim unverified test results
- claim an unverified build succeeded
```

---

# 5. KMP Architecture Rule

The primary architecture skill is:

```text
~/.claude/skills/kmp-architecture/SKILL.md
```

Claude should analyze:

```text
Targets
Source sets
Modules
Dependencies
Domain
Data
Presentation
Platform APIs
Entry points
Build configuration
Testing
CI/CD
Release
```

The architecture decision process:

```text
Requirements
     ↓
Supported Platforms
     ↓
Shared vs Platform Responsibilities
     ↓
Source Set Hierarchy
     ↓
Module Boundaries
     ↓
Dependency Graph
     ↓
Implementation
     ↓
Testing
```

---

# 6. Source Set Masterclass

Directory:

```text
~/.claude/skills/source-sets/
└── SKILL.md
```

Claude must understand:

```text
commonMain
commonTest

androidMain
androidUnitTest
androidInstrumentedTest

iosMain
iosTest

jvmMain
jvmTest

jsMain
jsTest

wasmJsMain
wasmJsTest
```

The actual source sets depend on declared targets.

Current Kotlin Multiplatform uses source sets as the primary mechanism for organizing code and dependencies across targets.

---

# 7. Source Set Decision Tree

When implementing functionality:

```text
Can ALL targets use it?
        │
       YES
        ↓
   commonMain


       NO
        │
        ↓
Can a group of targets use it?
        │
       YES
        ↓
Intermediate Source Set


       NO
        │
        ↓
Platform Source Set
```

Example:

```text
commonMain
    │
    ├── androidMain
    │
    └── iosMain
```

For Apple-specific functionality:

```text
commonMain
    │
    └── appleMain
         │
         ├── iosMain
         ├── macosMain
         └── other Apple targets
```

Use intermediate source sets when multiple targets share the same API requirements.

---

# 8. Expect / Actual Masterclass

Directory:

```text
~/.claude/skills/expect-actual/
└── SKILL.md
```

Use `expect/actual` when common code needs a platform-specific implementation.

Example:

```kotlin
// commonMain

expect class PlatformContext
```

Android:

```kotlin
// androidMain

actual typealias PlatformContext = Context
```

iOS:

```kotlin
// iosMain

actual class PlatformContext
```

However:

> Do not automatically use `expect/actual` for every platform difference.

Prefer common interfaces and dependency injection when that produces a cleaner architecture.

---

# 9. Dependency Injection in KMP

Preferred approach:

```text
commonMain
    │
    ├── interface
    │
    └── business logic
            │
            ▼
      platform implementation
```

Example:

```kotlin
interface PlatformLogger {
    fun log(message: String)
}
```

Android:

```kotlin
class AndroidLogger : PlatformLogger
```

iOS:

```kotlin
class IOSLogger : PlatformLogger
```

The common layer should depend on the abstraction.

---

# 10. KMP Module Architecture

Do not automatically create a single giant `shared` module.

For larger systems:

```text
root
│
├── androidApp/
│
├── iosApp/
│
├── shared/
│
├── core/
│   ├── common/
│   ├── domain/
│   ├── data/
│   ├── network/
│   ├── database/
│   └── designsystem/
│
├── feature/
│   ├── auth/
│   ├── home/
│   ├── profile/
│   └── settings/
│
└── build-logic/
```

But module boundaries must be justified by project complexity.

Kotlin's current recommended KMP structure separates application entry points from shared code and can separate shared business logic and shared UI into different modules.

---

# 11. Recommended KMP Application Structure

For a medium/large application:

```text
project/
│
├── androidApp/
│   └── src/
│       └── main/
│
├── iosApp/
│
├── shared/
│   │
│   └── src/
│       │
│       ├── commonMain/
│       ├── commonTest/
│       │
│       ├── androidMain/
│       ├── androidUnitTest/
│       │
│       ├── iosMain/
│       └── iosTest/
│
├── core/
│   ├── domain/
│   ├── data/
│   ├── network/
│   └── database/
│
├── feature/
│   ├── auth/
│   ├── home/
│   └── settings/
│
├── build-logic/
│
├── gradle/
│   └── libs.versions.toml
│
├── build.gradle.kts
├── settings.gradle.kts
└── gradle.properties
```

---

# 12. Compose Multiplatform

Directory:

```text
~/.claude/skills/compose-multiplatform/
└── SKILL.md
```

Compose Multiplatform should be treated separately from Android Jetpack Compose.

Claude must understand:

```text
Compose Multiplatform
    │
    ├── Android
    ├── iOS
    ├── Desktop
    └── Web/Wasm
```

The UI layer should remain in common code when supported.

Platform-specific UI integration belongs in the platform source set.

Current Compose Multiplatform projects can use source sets such as `commonMain`, `androidMain`, `iosMain`, `jvmMain`, `jsMain`, and `wasmJsMain`, depending on targets.

---

# 13. UI Architecture

Recommended:

```text
                 UI
                  │
                  ▼
             Presentation
                  │
                  ▼
               Domain
                  │
                  ▼
                Data
                  │
                  ▼
          Platform Services
```

For shared UI:

```text
commonMain
    │
    ├── Screens
    ├── Components
    ├── State
    ├── ViewModels / Presenters
    └── Navigation
```

Platform-specific:

```text
androidMain
    └── Android integration

iosMain
    └── iOS integration
```

---

# 14. KMP Networking

Directory:

```text
~/.claude/skills/networking/
└── SKILL.md
```

Preferred architecture:

```text
commonMain
│
├── API interfaces
├── DTOs
├── serialization
├── repository
└── error model
```

Platform configuration:

```text
androidMain
└── Android network configuration

iosMain
└── iOS network configuration
```

The network abstraction should not leak platform-specific implementation details into domain code.

---

# 15. KMP Database

Directory:

```text
~/.claude/skills/database/
└── SKILL.md
```

Claude should distinguish:

```text
Common database API
        │
        ├── Android implementation
        │
        └── iOS implementation
```

Database migrations must be treated as production-critical.

Never delete migration history just to resolve a local development error.

---

# 16. Serialization

Directory:

```text
~/.claude/skills/serialization/
└── SKILL.md
```

Preferred:

```text
commonMain
    ↓
Serializable models
    ↓
Platform-independent serialization
```

Check:

```text
JSON compatibility
Nullable fields
Default values
Backward compatibility
Unknown fields
API versioning
```

---

# 17. Concurrency

Directory:

```text
~/.claude/skills/concurrency/
└── SKILL.md
```

Claude must understand:

```text
Kotlin Coroutines
Flow
StateFlow
SharedFlow
structured concurrency
CoroutineScope
Dispatchers
Cancellation
```

Do not hardcode platform-specific dispatchers in common business logic without architectural justification.

---

# 18. KMP Testing Architecture

```text
commonTest
    │
    ├── Domain tests
    ├── Use case tests
    ├── Repository tests
    ├── Serialization tests
    └── Business rules
```

Platform tests:

```text
androidUnitTest
    ↓
Android-specific behavior

iosTest
    ↓
iOS-specific behavior
```

The default goal:

> Put as much business-logic testing as possible in `commonTest`.

---

# 19. Gradle Masterclass

Directory:

```text
~/.claude/skills/gradle/
└── SKILL.md
```

Claude should understand:

```text
settings.gradle.kts
build.gradle.kts
module build.gradle.kts
gradle.properties
libs.versions.toml
build-logic
convention plugins
version catalogs
plugin management
dependency management
```

---

# 20. Convention Plugins

For large KMP projects:

```text
build-logic/
│
├── convention/
│   ├── kotlin-multiplatform.gradle.kts
│   ├── compose-multiplatform.gradle.kts
│   ├── android-application.gradle.kts
│   ├── android-library.gradle.kts
│   └── testing.gradle.kts
```

Use convention plugins to avoid repeating Gradle configuration across modules.

Do not create convention plugins for trivial projects without a real duplication problem.

---

# 21. Dependency Management

Global skill:

```text
~/.claude/skills/dependency-management/
└── SKILL.md
```

Rules:

```text
Prefer centralized dependency versions.

Prefer version catalogs.

Verify multiplatform support before adding a dependency.

Check target compatibility.

Check license.

Check maintenance status.

Avoid unnecessary dependencies.
```

Important:

```text
A dependency that supports Android
does NOT automatically support commonMain.
```

---

# 22. Android Platform Skill

Directory:

```text
~/.claude/skills/android/
└── SKILL.md
```

Android becomes a **platform skill**, not the global architecture center.

Topics:

```text
Android SDK
Activity
Context
Lifecycle
ViewModel
Android permissions
WorkManager
Services
DataStore
Room Android integration
Play Store
Android-specific APIs
```

---

# 23. iOS Platform Skill

Directory:

```text
~/.claude/skills/ios/
└── SKILL.md
```

Topics:

```text
Swift
SwiftUI
UIKit
Xcode
Framework integration
Kotlin/Native
Apple targets
XCFramework
CocoaPods where applicable
Direct integration
iOS lifecycle
Apple permissions
Keychain
App Store release
```

Claude must recognize that iOS application entry-point code can remain native Swift/SwiftUI when appropriate.

---

# 24. Desktop Skill

Directory:

```text
~/.claude/skills/desktop/
└── SKILL.md
```

Topics:

```text
JVM
Desktop Compose
Windows
macOS
Linux
JVM-specific dependencies
Desktop packaging
```

---

# 25. Web Skill

Directory:

```text
~/.claude/skills/web/
└── SKILL.md
```

Topics:

```text
Kotlin/JS
browser
JavaScript interoperability
npm dependencies
web-specific APIs
Compose Web
```

---

# 26. Wasm Skill

Directory:

```text
~/.claude/skills/wasm/
└── SKILL.md
```

Topics:

```text
Kotlin/Wasm
wasmJs
browser
JavaScript interoperability
Web APIs
performance
browser limitations
```

---

# 27. KMP Architecture Agent

File:

```text
~/.claude/agents/kmp-architect.md
```

Role:

```text
Act as a senior Kotlin Multiplatform software architect.
```

Responsibilities:

```text
Analyze target platforms.

Analyze source-set hierarchy.

Analyze module boundaries.

Determine common vs platform code.

Evaluate expect/actual.

Evaluate dependency compatibility.

Evaluate Gradle architecture.

Evaluate testing strategy.

Evaluate platform integration.

Identify architectural risks.

Provide trade-offs.
```

Before making recommendations:

```text
1. Inspect project.
2. Identify targets.
3. Inspect source sets.
4. Inspect modules.
5. Inspect dependencies.
6. Inspect Gradle configuration.
7. Identify constraints.
8. Propose architecture.
```

---

# 28. Multiplatform Code Review Agent

File:

```text
~/.claude/agents/multiplatform-reviewer.md
```

Review:

```text
COMMON CODE
    ↓
SOURCE SETS
    ↓
DEPENDENCIES
    ↓
PLATFORM LEAKAGE
    ↓
ARCHITECTURE
    ↓
TESTING
    ↓
PERFORMANCE
    ↓
SECURITY
```

Specifically detect:

```text
Android API leaking into commonMain
iOS API leaking into commonMain
Incorrect expect/actual
Unnecessary expect/actual
Incorrect source-set dependency
Duplicated platform logic
Improper Gradle configuration
Unsupported library targets
Incorrect native API usage
```

---

# 29. KMP Debugging Workflow

```text
Build Error
    ↓
Identify Module
    ↓
Identify Target
    ↓
Identify Source Set
    ↓
Identify Dependency
    ↓
Inspect Gradle
    ↓
Reproduce
    ↓
Fix
    ↓
Test Affected Target
    ↓
Test Common Code
    ↓
Verify Other Targets
```

Never assume an Android build error is an Android-only problem.

KMP build errors can originate from:

```text
Gradle
Kotlin compiler
Source-set hierarchy
Native compiler
Dependency compatibility
CocoaPods/Xcode
Wasm
JS
JVM
```

---

# 30. KMP Performance

Performance analysis must be target-aware.

```text
commonMain
    ↓
Shared algorithmic complexity

Android
    ↓
Android runtime / startup / memory

iOS
    ↓
Kotlin/Native / Swift integration

Desktop
    ↓
JVM

Web/Wasm
    ↓
Browser/runtime
```

Do not assume that an optimization on one platform improves every target.

---

# 31. KMP Security

Check:

```text
Shared authentication
Token storage
Platform secure storage
Network security
Certificate handling
Logging
Secrets
Deep links
Platform permissions
Data export
Database encryption
```

Sensitive storage should use the appropriate platform security mechanism.

Do not put Android-only secure-storage implementations directly into common business logic.

---

# 32. Release Architecture

A multiplatform release should be treated as separate artifacts:

```text
                    Release
                       │
          ┌────────────┼────────────┐
          │            │            │
       Android        iOS        Other
          │            │            │
       AAB/APK       IPA       JVM/Web/Wasm
          │            │            │
     Play Store     App Store    Platform
```

Claude must not assume:

```text
one build
=
all platforms
```

Each target requires appropriate validation.

---

# 33. Project-Local KMP Architecture

Example:

```text
my-kmp-project/
│
├── CLAUDE.md
│
├── .claude/
│   │
│   ├── settings.json
│   │
│   ├── rules/
│   │   ├── project-architecture.md
│   │   ├── target-platforms.md
│   │   ├── business-rules.md
│   │   └── dependency-policy.md
│   │
│   ├── skills/
│   │   ├── feature-development/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── kmp-module/
│   │   │   └── SKILL.md
│   │   │
│   │   ├── platform-integration/
│   │   │   └── SKILL.md
│   │   │
│   │   └── release/
│   │       └── SKILL.md
│   │
│   └── agents/
│       ├── project-architect.md
│       └── project-reviewer.md
│
├── androidApp/
├── iosApp/
├── shared/
├── core/
├── feature/
├── build-logic/
└── gradle/
```

---

# 34. Example: KMP Source Set Policy

Project-local rule:

```markdown
# KMP Source Set Policy

## commonMain

Use for:

- business logic
- domain models
- use cases
- repository interfaces
- shared networking
- serialization
- shared validation
- shared UI when applicable

## androidMain

Use only for:

- Android SDK
- Android-specific APIs
- Android implementations

## iosMain

Use only for:

- iOS APIs
- Kotlin/Native Apple integrations
- iOS-specific implementations

## Intermediate Source Sets

Use when multiple targets share an API or implementation.

Do not duplicate code between platforms when an intermediate
source set is appropriate.
```

---

# 35. Architecture Decision Record

For important decisions use:

```text
docs/architecture/
└── ADR-001-source-set-strategy.md
```

Template:

```markdown
# ADR-001: Source Set Strategy

## Status

Accepted

## Context

Why is this architecture required?

## Decision

What architecture was selected?

## Alternatives

What alternatives were considered?

## Consequences

What are the benefits and costs?

## Platform Impact

Android:
-

iOS:
-

Desktop:
-

Web:
-

Wasm:
-
```

---

# 36. KMP Feature Development Workflow

When implementing a feature:

```text
Requirement
    ↓
Domain Model
    ↓
Common API
    ↓
commonMain Implementation
    ↓
Platform Requirements
    ↓
Intermediate Source Set
       OR
Platform Implementation
    ↓
UI
    ↓
Tests
    ↓
Platform Verification
```

Do not begin by creating Android-specific code unless the requirement is explicitly Android-specific.

---

# 37. KMP Code Review Checklist

Claude should check:

```text
[ ] Is shared code really shared?
[ ] Is commonMain being used appropriately?
[ ] Is platform-specific code isolated?
[ ] Is the source-set hierarchy correct?
[ ] Are dependencies available for the target?
[ ] Is expect/actual justified?
[ ] Could an interface be better?
[ ] Could an intermediate source set reduce duplication?
[ ] Are common tests present?
[ ] Are platform tests present where required?
[ ] Are Gradle dependencies centralized?
[ ] Are platform APIs leaking into common code?
[ ] Are release targets independently verified?
```

---

# 38. Recommended KMP Global Skills

Priority order:

```text
LEVEL 1 — ESSENTIAL

kotlin
kotlin-multiplatform
kmp-architecture
source-sets
compose-multiplatform
gradle
testing
debugging
code-review


LEVEL 2 — IMPORTANT

expect-actual
networking
database
serialization
concurrency
dependency-management
security
performance


LEVEL 3 — PLATFORM

android
ios
desktop
web
wasm


LEVEL 4 — DELIVERY

ci-cd
git
release
```

---

# 39. Recommended KMP Agents

```text
kmp-architect
    ↓
Overall KMP architecture

kotlin-engineer
    ↓
Kotlin implementation

multiplatform-reviewer
    ↓
KMP source-set/dependency review

mobile-architect
    ↓
Android + iOS application architecture

android-engineer
    ↓
Android platform

ios-engineer
    ↓
iOS platform

code-reviewer
    ↓
General code review

security-engineer
    ↓
Security

test-engineer
    ↓
Testing

performance-engineer
    ↓
Performance

release-engineer
    ↓
Release / CI/CD
```

---

# 40. Final Master Architecture

```text
                         CLAUDE CODE
                              │
                ┌─────────────┴─────────────┐
                │                           │
             GLOBAL                       LOCAL
          ~/.claude/                project/.claude/
                │                           │
       ┌────────┼────────┐          ┌───────┼───────┐
       │        │        │          │       │       │
     Rules    Skills   Agents      Rules   Skills  Agents
       │        │        │          │       │       │
       └────────┼────────┘          └───────┼───────┘
                │                           │
                └─────────────┬─────────────┘
                              │
                              ▼
                       KMP ARCHITECTURE
                              │
                 ┌────────────┼────────────┐
                 │            │            │
            commonMain   intermediate   platform
                 │        source sets   source sets
                 │            │            │
                 └────────────┼────────────┘
                              │
                              ▼
                         APPLICATIONS
                              │
          ┌──────────┬────────┼────────┬──────────┐
          │          │        │        │          │
       Android      iOS     Desktop   Web       Wasm
```

---

# 41. Master Rule

The most important rule in this entire Claude architecture is:

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│  COMMON FIRST                                      │
│                                                    │
│  Ask whether functionality belongs in commonMain.  │
│                                                    │
│  If not, find the broadest applicable             │
│  intermediate source set.                          │
│                                                    │
│  Only then use platform-specific code.             │
│                                                    │
└────────────────────────────────────────────────────┘
```

The goal is not to maximize code sharing blindly.

The goal is:

```text
Maximum appropriate sharing
+
Clear platform boundaries
+
Low coupling
+
Maintainable architecture
+
Correct target-specific behavior
```

This should be the foundation of the global Claude Code environment for a KMP-focused software architect.