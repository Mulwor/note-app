1. What command displays the difference between the working tree and the stage/index area, as well as files not tracked by Git?

Перевод вопроса: Какая команда отображает разницу между рабочим деревом и областью stage/index, а также файлами, которые не отслеживаются Git?

a) git current (не команда)
`b) git status`
c) git local (не команда)
d) git context (не команда)
e) None of these

---
2. What comes first, staging with git add . or committing with git commit?

`a) staging, then commiting`
b) commiting, then staging

---
3. Which of the following is true (Что из перечисленного относится к) of the git push command?

`a) By default a push doesn't send tags to the remote repository.`
b) Commits can only be tagged when they are created.
c) Tags are pushed to the remote repository with their respective commits.
d) Only annotated tags are automatically pushed to the remote repository with a commit.
e) None of these

Пояснения: https://git-scm.com/book/en/v2/Git-Basics-Tagging#:~:text=Sharing%20Tags

--- 
4. What option can you use to apply git configurations across your entire git environment?
Какую опцию вы можете использовать для применения конфигураций git ко всей вашей среде git?

a) --all
b) --master
`c) --global`
d) --update
e) None of these

Пояснения: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

--- 
5. Which command uploads your code onto a remote repo?

a) git upload (не команда)
`b) git push`
c) git send (не команда)
d) git pull-request (не команда)
e) None of these

--- 
6. What's the git command that downloads your repo from GitHub to your computer?

a) git fork
`b) git clone`
c) git copy
d) git pull-request
e) None of these

---
7. How do you stage files for a commit?

a) git stage
`b) git add`
c) git track
d) git commit

---
8. How do you check the state of your local git repository since your last commit?

a) git check (не команда)
b) git diff
`c) git status`
d) git log

---
9. After pushing commits to the remote repository for the first time using the command 'git push -u origin master', what shorthand command can you use in future?

a) git push master
b) git push origin
c) Same as before, git push -u origin master
`d) git push`
e) None of these

---
10. How to check changes between commits?

a) git info --changes (не команда)
b) git show --changes
`c) git diff`
d) git changes (не команда)

---
11. What command creates a new branch from the currently checked-out branch?

a) git -b checkout <nameOfBranch>
b) git branch
c) git checkout <nameOfBranch>
`d) git checkout -b <nameOfBranch>`
e) None of these

---
12. Where are files stored before they are committed to the local repository?

a) Saved files
b) git documents (не команда)
`c) Staging area`
d) git cache (не команда)
e) None of these

---
13. How do you save the current state of your code into the git version control?

`a) By committing the staged changes with git commit`
b) By adding all changes and staging them with git stage
c) By adding all changes and staging them with git add
d) By creating a new commit with git init

---
14. Describe what the following git commands do to the commit history. git reset --hard HEAD~5 git merge --squash HEAD@{1} git commit

a) Reset the HEAD to the 5th commit in the repo, then merges to the master branch
b) Delete the last 5 commits
`c) Reset the commit branch back before the last 5 commits, then squashes them into a single commit`
d) Merges the last 5 commits into a new branch
e) None of these

---
15. Which command should you use to initialize a new Git repository?

a) git start (не команда)
b) git new (не команда)
`c) git init`
d) git install (не команда)

---
16. How can you display a list of files (отобразить список файлов) added or modified in a specific commit?

a) Find the commit in the remote repository, as that's the only place that kind of information is stored.
`b) Use the diff-tree command with the commit hash.`
c) Run git commit --info with the commit hash.
d) None of these

---
17. After you initialize a new Git repository and create a file named file.txt, which of the following commands will not work if issued?

a) git add file.txt
b) git status
c) git add .
`d) git commit -m 'file.txt added'`

---
18. What commands would you use to force an overwrite (принудительной перезаписи) of your local files with the master branch?

a) git pull --all git reset --hard origin/master
b) git pull -u origin master git reset --hard master
`c) git pull origin master git reset --hard origin/myCurrentBranch`
d) git fetch --all git reset --hard origin/master
e) None of these

---
19. What is the difference between a soft reset (git reset --soft) and a hard reset (git reset --hard) ?

`a) A soft reset only changes the commit that HEAD points to, while a hard reset resets the index and working tree to match the specified commit, discarding any changes.`
b) A soft reset caches the old HEAD pointer, while a hard reset deletes it entirely.
c) A hard reset changes only where the HEAD is pointing, while a soft reset changes the HEAD and index.
d) A hard reset caches the old HEAD pointer, while a soft reset deletes it entirely.
e) None of these

Пояснения: https://git-scm.com/docs/git-reset (в description)

---
20. Which Git command begins tracking of a new file?

`a) add`
b) addfile
c) begin
d) track
e) None of these

---
21. Which command can be used to list the branches that have been merged into the currently checked-out branch?

a) git master --status
b) git branch --status
`c) git branch --merged`
d) git status --merged
e) None of these

---
22. Looking at the following commands, describe what is happening. 'git checkout feature-user-location git cherry-pick kj2342134sdf090093f0sdgasdf99sdfo992mmmf9921231'

a) The commit is being tagged for release on the feature-user-location branch
b) A commit is being copied from its original branch over to the feature-user-location branch
c) The commit is being cherry picked as the new HEAD of the commit history
d) A commit is being copied from the feature-user-location branch to the master branch
`e) The branch is switched to the feature-user-location branch, and the specified commit is applied to the branch.`
f) None of these

---
23. Which command gets a copy of an existing Git repository?

a) duplicate
b) replicate
c) copy
`d) clone`
e) None of these

---
24. What are some advantages to using GIT?

a) It allows you to see what changes you made
b) It allows you to easily roll back changes if needed
c) Allows you to have a backup of your code and for others to have the ability to view, comment, and edit it
`d) All of them`

---
25. What is the difference between git fetch AND git pull

a) git fetch creates a new branch off the master branch, while git pull creates a new branch off the local repository's master branch.
b) git pull downloads new data from a remote repository without integrating it into local files, while git fetch updates the current HEAD branch with the latest changes from the remote server.
`c) git fetch updates remote tracking branches with changes from a remote repository, while git pull updates remote tracking branches with changes from a remote repository and merges them into their corresponding local branches.`
d) git fetch downloads and merges data from the local repository, while git pull informs your colleagues you are about to make changes to the master branch.
e) None of these