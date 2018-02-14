---
title: How DevOps helped me lead a remote team
categories:
  - Development

---

I recently had the opportunity to work remotely for a startup, it was a small but very dedicated team. The first half year the entire IT team was only me. Working as a full stack developer I always had a lot of things to do, from setting up the server migration, to developing the mobile app. But with a lot of sweat, coffee and beer, I managed to handle everything.

With the business growth came the need to increase the team, the first addition was an old friend of mine, that worked with me in the past and now was living in another state. His help allowed me to focus on features that were on hold for a long period.

At that time we organized our work like this, In the beginning of the week all start up members had a stand-up meeting to discuss our goals and tasks, what was done and settle what needed to be done, yet even with all the planning, during the week it was common to appear extra tasks, like the CEO asking for a new report for the investors, the marketing for a quick change in some land page, or the support to send a small fix of a bug that some client just saw. 

Initially, when the IT was composed of a single person, me, the tasks were sent directly by Slack, I would then create a card on Trello and put it on the "TO DO" list, but now, with two people they continued being delivered by Slack, which as you can imagine generated a lot of confusion, because I and my teammate had to keep constantly in touch to know what we were currently working, which eventually affected the tasks that had been discussed during the week meeting, so we created a new slack group to receive and talk about the issues, but it was not enough.

In an attempt to fix this situation, we agreed that all the extra tasks had be sent to me, so that I could organize them with the others that were being closed in the week. It kind worked at first, but with a few months the startup evolved and not even both of us were enough to handle everything, between support, bug fixes, performance improvement, we had little time to focus in the product growth, what for a startup is kind of a big problem.

That's when we had another addition to the IT team, a developer from the other side of the country, with that our remote team was spread across Brazil.
Now we were a squad of three people. In the initial weeks, I tried to make the adaptation of the newcomer as easy as possible, while receiving and forwarding the new tasks, checking the closed ones and production , making calls with stakeholders and other team leaders to discuss goals and keep working in my tasks

The result was, Collapse!

![Collapse](/images/posts/how-devops-helped-me-lead-a-remote-team-collapse.gif){: .center-image}

Anyone who knows me knows that one of the things I love, literally love, is to develop, finding solutions, creating features, refactoring, spending the day looking at a dark reddish screen.
But now with me as the main channel between IT and the rest of the startup team, I spent most of my day as a project manager, defining and assigning tasks, asking for status, getting new tasks with the other teams. 
For some this situation would be an ideal job, but not for me, I prefer to be in front of the keyboard developing.
The worst part, is that as the most experienced developer, some important features were also affected. In the end, even with the addition of one new member to the IT team, our performance was declining.

That's when during the weekly metting with the whole startup members, I indicated that I wanted to take the week to reformulate and organize our IT team, because the current format was no longer working,  everyone promptly agreed, as they saw that we were really having a difficult time.

## The Problems

First we listed the problems that needed to be solved

### Workflow
Our workflow, as you can see, was not good, the main tasks were not being performed, we could not be sure what would be done and delivered in the week

### Communication
Clearly I could not continue to be the only one to receive and assign tasks, besides being stressful to me,  I had become a funnel, isolating the IT from the rest of the team.


### Delivery time
The workflow problems began to generate delays, the team could not keep the focus, features that needed were consuming more time than necessary, things that should only take a week, were taking two or even more to be made.

### Code quality
With the work piling up, we were always behind schedule and the pressure eventually reduced the code quality, which in turn, caused more delays due the bugs that had to be resolved shortly after a release. We also began to create a fear of production, where to avoid bigger damages, we would schedule the deploys to periods where platform was idle, like late at night or week ends.

## The Research
With the problem and objective settled, I started thinking about possible solutions.
As an ex-soldier, one of the things that I learned, was that a great way to maintain organization is through consistency, which also help improve the communication, we just needed some way to apply on our daily work, but even with consistency the quality would still not be guaranteed.

That's when my contributions to open source projects showed me a direction.
Who already contributed to a open source project knows that is not just send a change and it will be immediately available in the project source code, there is a whole process: 

> First you must create a pull request with your change, this PR is then evaluated by another person, this person can then point out improvements that need to be made so that the contribution does not cause any regression, for only then the change can be accepted or even rejected, this process is called "Peer Review".

With this I already had a basic idea of a possible solution to our problems, but there was still a lot left.

As a curious person, I'm almost always reading about things that I find interesting, no matter the subject, just needs to be interesting.

It was when I remembered of the three continuous guys, the continuous integration, delivery and deployment, I had already studied about them in the past, but I never delved into the topic.
This seemed a great opportunity to learn more about it, after a lot reading on the subject, it seemed that I had found what was missing.

## The Solution
### Tools
#### GitLab and Version control
We used Trello to manage issues and bitbucket for version control, but it was no longer working for us, that's when GitLab presented itself as a very good response to our needs, for being more developer friendly,  have great tools for project management and support for continuous integration / delivery.

#### Guidelines
Until then we had no defined way of how to create, receive and close tasks, we needed a pattern to be consistent, that's when I joined the team to define the guidelines we should follow when dealing with commits, branchs and coding to safeguard the quality of our project.

#### Linters and Formatters
To ensure that these guidelines were being followed, we would use linters and formatters to keep the consistency across functions, files and developers, maintaining the code clean, bugs free. It also aided our review process by smashing all the errors and style deficiencies before they had the chance of being pushed.

#### Automated test and code coverage
We had a culture of creating automated tests, but it was not being properly followed, this had to be solved if we wanted to guarantee the quality of our deliveries, so we maked clear that all changes needed to be tested in our guidelines and added code coverage to know how much of our platform needed testing and allow track our improvement.

#### Issues Templates
A big problem we had was the poorly written issues, then when someone from TI started working on the issue, he had contact who created it to find the missing details, this usually happening several days or weeks after the issue creation, when the person not even remembered the issue details and important informations already had been lost.

Gitlab allows create templates with instructions on how an issue should be created, the person who created the issue just needed to make sure to provide the informations that was being requested, things like print screens, ids and how to reproduce a bug. This allowed  everyone of the team, be it from marketing, customer success or sales could create detailed issues with the necessary data, without the need of any help.

### Culture
Our solution involved a lot more than just tools, we needed a change of culture, which is way more complicated and requires much more effort from the whole group, tools and guidelines are good but they do not improve anything, if not used properly.

So if we have any hope of success, the whole team must be in agreement and integrated during the process, because of this, at each new stage I asked for feedback, validating with the team if everything was good or needed some change.

#### Divide and Conquer
One of the problems we suffered when developing features, especially the bigger ones, is that they needed weeks to complete and the person that was responsible for it often isolated himself from the rest of the team and the platform, hindering feedbacks and creating gaps between the feature and the platform.
The solution found was to divide all tasks into smaller pieces, no matter what feature was, it would have to fit into a single sprint, as we were not magicians, for this to work it was necessary to remove fat.
We reduced features to the bare minimum, only what was extremely relevant would be done, which in return forced us to have a greater focus, avoiding wasting time on unnecessary things. What could not be removed was then splitted and delivered in stages, if possible in the same milestone.

### Workflow
#### Milestones
To keep us focused on what is really needed, the tasks were scheduled in  monthly milestones. allowing us to measure our results, along with the other metrics that were already generated and monitored by the entire team and investors. We could only advance to the next milestone, by closing all tasks of the previous milestone. This made us pay more attention while defining goals , so that only things that could actually be achieved until due date were included in the milestone, avoiding creating incorrect predictions of new features that would be announced for users and investors.

#### Sprints
We have one sprint per week, at the beginning of the week we held a talk to close the old sprint and set the new one, tasks outside the sprint would not be performed, only in specific cases, but only after all team members have been updated.

#### Issues
To avoid losing informations, during the weekly talk we reviewed the newly created issues to check for missing informations, add tags, specify who will close it and set the due date.
In case of lack of information, we would ask for more information or make a quick call with the creator of the issue to remove any doubts and fill in the issue.

### Delivery 
#### Manual off, Automatic On 
We abolished manual deploys for production, which currently were performed using Capistrano, allowing any commit or branch to be sent for production.

The flexibility to send and revert any code on production generated many regressions, because it allowed send quick fixes or "urgent" changes directly without proper testing.
But with a more rigid rule we were able to force quality because changes could not be sent directly and any error would be complicated to remove from production and shared by the whole team.

#### Deploy
Using the CI provided by gitlab, in a few hours I was able to create an environment, that for each new commit a new pipeline would execute:

* Set up and install any new dependencies in our Staging and Production environments
* It would run all automatic tests
* Lint the changes to validate the code based on our guidelines
* Perform automatic review of pull requests, commenting the encountered problems.
* Automatically deploy the changes to production

If an error occurred in any step, it would stop the pipeline, preventing the regression to reach production

#### Pull and Review
We addopted the process for sending the changes to the air based on pull requests and peer reviews. Through Git Lab we blocked direct changes in the master branch, preventing any one of the team from merging their own change.

## Adaptation and Results
After a week of hard work, our solution was ready.
The next week was only for the adaptation of the whole team. My job was to encourage and ensure that we were following the new process. but since everyone had participated and reviewed during the definition, it was not a complicated thing to do.
In the following weeks we began to notice that our hard work began to give results. 
The number of overdue tasks had declined. The deploys to production began to have fewer bugs and thus becoming more frequent, making our fear of production dissapier.
With the end of the first month in the new workflow, most of the tasks were done on time, the deploys for production were daily, the amount of bugs had reduced considerably, and finally I was back to the code, I did not have to keep constantly managing our team because every single person was now independent, knew what and how things should be done with a clear understanding of our business goals.

## Conclusion
Over time, we keep adapting and improving our workflow to meet our needs. But the results were tremendous and I do not know what would become of us without these changes.
It may not have been the best solution and for sure it had a lot of flaws, but it was enough at that moment to help us as a team and as a company, allowing to extract the best of ourselves instead of spending the day on unproductive, pointless things.

But the best part for me was that after some months, when my friend was no longer part of our team. He told me that one of the things that helped him secure his new opportunity was what he learned from our process. The interviewers simply loved the way we managed our project and tasks and they were looking for someone with this type of experience. I was very happy to know that the work we did together was able to help his career.

Finally, I hope that my saga can also help you in any possible way!
