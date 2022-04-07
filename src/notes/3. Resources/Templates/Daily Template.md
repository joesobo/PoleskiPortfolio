---
 
CreationDate: <% tp.file.creation_date() %>    
LastModificationDate: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>

---
tags: #🕸️/🟩️

[[{{yesterday}}|<< {{yesterday}}]] | [[{{date}}]] | [[{{tomorrow}}|{{tomorrow}} >>]]

# Journal
- [ ] Mood: 

# Habits
- [ ] Exercise
- [ ] Read
- [ ] Study

# Vices
- [ ] Alcohol
- [ ] Weed

### Notes

### Daily Edits
```dataview
LIST FROM #🕸️  
WHERE file.name != this.file.name
SORT file.mtime DESC LIMIT 10
```
