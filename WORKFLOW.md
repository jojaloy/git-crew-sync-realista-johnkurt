Git Crew Sync Lab Workflow
Student Name: John Kurt Realista
Repository: git-crew-sync-realista-johnkurt

Task 1: Push Overtime Pay (Clone A)
Implemented time and a half overtime pay for shifts over 8 hours on feature/overtime-pay and pushed to the remote.

Task 2: Rejected Push (Clone B)
Simulated a teammate working on feature/overtime-pay without pulling latest changes, attempting to push rounded pay logic.

Task 3: Merge Reconciliation (Clone B)
Resolved the merge conflict by keeping both overtime pay and pay rounding, then pushed the merge commit.

Task 4: Rebase Reconciliation (Clone A)
Encountered another rejected push after adding pay validation. Resolved it using git fetch and git rebase, fixed the conflict, and pushed cleanly without using force.

Task 5: Merge into Main
Merged the completed feature/overtime-pay branch into main and pushed the updated main branch.

Task 6: Tagging
Tagged the final commit on main as v1.0-synced and pushed tags to the remote repository.

Questions and Answers

What did the rejected push error message tell you, and why did it happen?
The error message told me that the push was rejected because the remote repository had newer commits that I did not have on my local computer. It happened because another clone had already pushed work to GitHub that my local copy had not downloaded yet.

What is the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?
In Task 3, merging created a new merge commit that tied the two different branches together while keeping their separate histories. In Task 4, rebasing moved my local commits and placed them on top of the latest remote commit, which made the commit history straight and clean without creating a merge commit.

What one habit would have avoided both rejected pushes in this lab?
Running git pull to fetch and integrate the latest changes before starting work and right before trying to push.

Which approach - merge or rebase - would you default to on a shared team branch, and why?
I would default to merge on a shared team branch because rebase rewrites the commit history. If other teammates are already using the branch, rewriting history can mess up their work and cause duplicate commits, while merging is safer and keeps the real timeline intact.