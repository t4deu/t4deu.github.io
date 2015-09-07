---
title: "Tips when creating gems"
bg: blue
color: white
fa-icon: check-square-o
---

## Generate boilerplate

Use bundler to generate setup files and a basic folder structure:

> $ bundle gem sinderella

## Release the gem

Use the rake tasks created by bundler

```
rake --task   # Show available commands
rake build    # Build into the pkg directory
rake install  # Build and install into system gems
rake release  # Create version tag and build and push to rubygems
rake spec     # Run RSpec code examples
```
