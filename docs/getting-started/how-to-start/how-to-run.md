---
title: How to run
sidebar_position: 1
---

A Comet DXP application consists of multiple processes, such as:

* [an API](../../Overview/PackagesTools#apiPackage)
* [an admin application](../../Overview/PackagesTools#adminPackage)
* [a frontend site application](../../Overview/PackagesTools#sitePackage)
* type generators

We recommend using a process manager to avoid starting all these processes manually. Luckily, the steps in the [installation section](../HowToStart) automatically installed the package: [@vivid-planet/dev-process-manager](https://github.com/vivid-planet/dev-process-manager). 

Executing the following command starts all processes required to run a COMET DXP application:

`npm run dev`

## That's it!

Your Comet DXP application is up and running.

:::info

* Execute `npm run browser` to display your application in the browser
* Adding a custom process can be done in the file: *ecosystem.config.js*

:::

## Managing your processes

List the status of al processes:

`npx dev-pm status`
<!-- TODO: not pm2? -->

<br />

Display logs:

`npx dev-pm logs`

Display logs for a process:

`npx dev-pm logs <prcess_name>`

<br />


Stop all processes:

`npx dev-pm shutdown`

Start a process:

`npx dev-pm start <process_name>`

Restart a process:

`npx dev-pm restart <process_name>`