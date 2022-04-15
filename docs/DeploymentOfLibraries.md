---
title: Deployment of libraries & canary releases
sidebar_position: 10
---

All of our packages versions use [semantic versioning](https://semver.org/). To manage all of these on the side of our big monorepo, we use the tool "[lerna](https://github.com/lerna/lerna)." Every pull request merged in one of our protected branches will automatically trigger a canary release and be published by CI. When we want to post a new stable major/minor/patch, you only have to push a new tag with the next version, and CI will do the rest for you. It publishes the version of the tag to the registry.