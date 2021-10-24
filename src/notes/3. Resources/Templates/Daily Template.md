---
 
CreationDate: <% tp.file.creation_date() %>    
LastModificationDate: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
Sleep: 
Quality: 
Workout: ✅❌ 
Addiction: ✅❌
WalkDog: ✅❌
Journal: ✅❌
Mood: ☺️😄😐😶🙄🤷‍♂️😞😢😠😬

---
tags: #🕸️/🟩️

<br>

[[{{yesterday}}|<< {{yesterday}}]] | [[{{date}}]] | [[{{tomorrow}}|{{tomorrow}} >>]]

<br>

# Daily Note

Good morning! Remember to fill out your metadata and check your todos!

<br>

### Morning Brain Dump
Write your thoughts out here

<br>

### To-do
- [ ] Check email <%* if (tp.date.now("ddd") !== "Sat" && tp.date.now("ddd") !== "Sun") { %>
- [ ] Check teams
- [ ] Check calendar<%* } %>

<br>

### Evening Brain Dump
Write your thoughts out here

<br>

### Notes

<br>

### Daily Edits
```dataview
LIST FROM #🕸️  
WHERE file.name != this.file.name
SORT file.mtime DESC LIMIT 10
```