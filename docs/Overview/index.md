---
title: Overview
sidebar_position: 1
---

Comet DXP is a highly customizable platform for building modern applications based on a headless CMS.

The following design principles are considered:
* [The Twelve-Factor App](https://12factor.net/)
* Cloud-Native ([foundation/charter.md at main · cncf/foundation](https://github.com/cncf/foundation/blob/main/charter.md#1-mission-of-the-cloud-native-computing-foundation))
* Microservices ([What are microservices?](https://microservices.io/))
* Headless ([Headless content management system](https://en.wikipedia.org/wiki/Headless_content_management_system))
* Infrastructure as Code ([What is Infrastructure as Code (IaC)?](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac))
* Mobile first
* Typescript everywhere

The following diagram visually highlights these principles.

![Architecture](@site/static/img/ApplicationBaseline.jpg)

A typical Comet application with its microservices is shown in the following diagram.

![Architecture](@site/static/img/Architecture.jpg)

:::note

Many of the highlighted microservices can be exchanged or omitted.

:::

**Why don’t just use an off-the-shelf solution?**

* We want a solution that is highly customizable
* We want to offer excellent developer experience (DX)
* We want to host on-premise