1. Поменять ветку и создать новую с переходом туда:  
```
поменять ветку: git checkout ...
новая ветка: git checkout -b ...
```

2. Откатиться на несколько коммитов и удалить все коммиты:
```
git reset --hard HEAD~1
git push -f
```

3. Переименовать последний коммит:
```
git commit --amend -m 'fix: typing photo'
git push --force
```

4. Переименовать ветку через гит:
```
git branch --move html-with-git HTML-and-git           
git push --set-upstream origin HTML-and-git
```
