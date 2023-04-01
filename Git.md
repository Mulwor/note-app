1. Поменять ветку:  
```
git checkout ...
```

2. Создать новую ветку и перейти туда: 
```
git checkout -b ...
```

3. Откатиться на несколько коммитов и удалить все коммиты
```
git reset --hard HEAD~1
git push -f
```

4. Переименовать последний коммит:
```
git commit --amend -m 'fix: typing photo'
git push --force
```