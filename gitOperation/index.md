## git 常用命令

`touch .gitignore 生成 .gitignore文件`

`npm cache clean --force 解决莫名其妙的错误`

### 查看用户名密码

`git config user.name`

`git config user.emil`

### 修改用户名和邮箱地址

`git config --global user.email "zhangkexu@yunquna.com"`

`git config --global user.name "zhangkexu"</code>`


### 查看配置

`git config --list`

### 从master分支拉新分支

`git checkout -b dev`

### push到远端

`git push origin dev`

### 拉取远端分支

`git pull`

### 关联

`git branch --set-upstream-to=origin/dev`

### 再次拉取 验证

`git pull`

### 提交改变

`git add .`

### 提交注释

`git commit -m 'xxx'`

### 推到远端

`git push`

### 当正在开发的时候，又要到别的分支搞事情（比如改bug）,又不想放弃当前分支的修改，那么

`git stash ----储藏，但默认不会储藏未跟踪的文件和被忽略的文件，比如新建了一个文件`

### 开发完了，想恢复之前分支的改动，那么

`git stash pop ----恢复存储并删除`

`git stash apply ----恢复存储不删除`

`git stash save 'xxx' ---暂存更改, xxx是起的名字`

`git stash apply 'stash@{num}' ---恢复对应的存储`

### 展示存储
 
`git stash show`
`git stash list`

### 删除存储

`git stash clear`
`git stash drop 'stash@{num}'`

### 修改commit信息（最后一次提交的注释）

`git commit --amend`

`输入i 进入编辑模式`

`按Esc 后 按:wq保存`

### git撤销commit至Changes to be committed（跟踪文件已暂存）,（windows下多了""）

`git reset --soft HEAD"^"`

### Changes not staged for commit（跟踪文件未暂存）

### 把最后的commit切回Changes not staged for commit状态

`git reset HEAD^`

### 把Changes to be committed状态切回Changes not staged for commit状态

`git reset HEAD <file>...          # 单个文件`
`git reset HEAD -- .               # 所有Changes to be committed的文件`

### 下载指定分支代码
```git clone -b 'feature/auto_filter_option' git@git.xxx:yundixxx-v2/frontend/xxx.git```

### 查看分支地址
``` git remote -v```

### 退出shell

`Esc下 大写Z Z 下就退出了(windows)Mac下不知道,因为没机器`
