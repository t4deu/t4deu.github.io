---
title: Start writing a cleaner code instantly
categories:
  - Development
tags:
  - clean-code
---


Clean code is one of the main qualities of a good developer!
A clean code allows everyone in the team to understand, maintain, contribute and 
communicate better through the code itself.

But write clean code can be tricky, especially at the beginning of a developer's career.
A few years back when I began to develop, one of the great difficulties I had when writing a clean code was the formatting following the guidelines that my team had defined.

Because of this, today I'm going to show you how you can improve your formatting and write code equal to the rest of your team and following any guideline very fast and without much headache.

Basically we will delegate the formatting job to our editor. So you'll be able to focus on problem solving and feature development without having to worry if you forgot to put some extra space or did some bad indenting somewhere. But over time and practice you will learn to write clean code automatically and the editor will be there just to make sure everything is ok.
  
In this example I will show you how to configure [VS code](https://code.visualstudio.com/){:target="_blank"} for javascript, TypeScript and Css formatting. But you can use the same principle with any other good editor and for any language.

### Tools

#### [ESlint](https://eslint.org/){:target="_blank"}
Takes care code quality, like pair programming with someone smarter than ourselves. “Dude, you forgot to rename that”. “Careful, you shouldn’t divide by zero”.  "Hey Caboose, WTF is this". 

![Caboose](/images/posts/how-write-cleaner-code-instantly-caboose.gif){: .center-image}

ESLint is a tool that catch bugs, potential problem areas, poor coding styles and enforce best practices by analyzing your code and pointing out any issues it finds.

#### [Prettier](https://github.com/prettier/prettier){:target="_blank"}
ESLint turns your code stronger, but Prettier will make it look sexy. The best part  is that it does everything by itself. It can format JavaScript / TypeScript / CSS  and integrates with ESLint.

### Setup

#### ESLint
We will install ESLint using Airbnb’s style guide, It is supper simple! First run the following command from your project root directory:
```
 $ yarn add eslint babel-eslint --dev
```
With ESlint installed, lets set up the inital ESlint configuration, run this command.

```
./node_modules/.bin/eslint --init
```
It will launch a simple walk-through that will set up your ESlint configuration automatically by asking a few questions?

![Setup](/images/posts/how-write-cleaner-code-instantly-setup.gif){: .center-image}

Now install the [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){:target="_blank"} extension to integrate with VS code, search trhougt extensions tab, or hit `Ctrl+P` and run this command on the editor:

```
ext install dbaeumer.vscode-eslint
```

#### Prettier

We will configure Prettier to format our code based on our ESLint rules
The [prettier-eslint](https://www.npmjs.com/package/prettier-eslint){:target="_blank"} will install prettier and make the necessary integrations out of the box. run to install:
```
yarn add prettier-eslint --dev
``` 

Now install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode){:target="_blank"}, same way you did before, `Ctrl+P`  and run:
```
ext install esbenp.prettier-vscode
```

The final step is make VS code format using Prettier + ESLint after saving a file. Open VS settings and add the following:
```
"editor.formatOnSave": true,
"prettier.eslintIntegration": true,
``` 

Cool! we’re all set! Time to see the results:

![Setup](/images/posts/how-write-cleaner-code-instantly-cleaning.gif){: .center-image}

Fantastic!!


### Footnote
Formatting is just a small part of a cleaner code. There are many more, things like method 
and properties naming, [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and a bunch of good stuff.

A great source of information is the [Clean Code Book](https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882), is a must read on how to write clean code. I've read it three times.

Writing clean code is not an easy task, but the rewards are huge in the short and long term.
It will also make your team, your dog and your girlfriend / wife happier, even your neighbor will be with a smiley face when you write cleaner code.
