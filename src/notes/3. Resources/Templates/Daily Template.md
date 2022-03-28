---
 
CreationDate: <% tp.file.creation_date() %>    
LastModificationDate: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
Sleep: 
Quality: 
Workout: ✅❌ 
Addiction: ✅❌
WalkDog: ✅❌
Journal: ✅❌
Mood: ☺️😄😐😶🙄😞😢😠😬😀

---
tags: #🕸️/🟩️

[[{{yesterday}}|<< {{yesterday}}]] | [[{{date}}]] | [[{{tomorrow}}|{{tomorrow}} >>]]

# Daily Note

Good morning! Remember to fill out your metadata and check your todos!

### Morning Brain Dump
Write your thoughts out here

### To-do
- [ ] Check email <%* if (tp.date.now("ddd") !== "Sat" && tp.date.now("ddd") !== "Sun") { %>
- [ ] Check teams
- [ ] Check calendar<%* } %>

### Evening Brain Dump
Write your thoughts out here

### Notes

### Daily Edits
```dataview
LIST FROM #🕸️  
WHERE file.name != this.file.name
SORT file.mtime DESC LIMIT 10
```
