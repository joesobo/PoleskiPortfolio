
> [!INFO]
> 
> tags:  #🕸️/🟦 
> References:  [[⌨️ General Dev]]
> Links: 


# `= this.file.name`

This is my cheatsheet for everything that I think I will need to use while trying to learn Vim. 

## Modes
- `Normal` - Navigate default, Press `Esc` or `CTRL + C` to navigate to
- `Insert` - Typing, Press `i` to navigate to
- `Visual` - Selecting, Press `v` to navigate to

## Important Key Combos
- `hjkl` - Navigate
- `y` - Copy
- `p` - Paste
- `/{term}` - Search

## Commands
Commands are actions that have an effect in your editor

#### Motions
Motions are commands that you use to move in `Normal` mode


**Basic:**
 ```
        ↑
  ← h j k l →
      ↓
 ```


**Move Horizontal:**
- `w` - Move word by word
- `b` - Move backwards word by word
- `W` - Move WORD by Word 
- `B` - Move backwards WORD by WORD 

```
type wwww ==> v   v v   v   v
              word. are two words
              word. is one WORD
type WWW  ==> ^     ^  ^   ^
```

- `e` - Jump to end of a word 
- `ge` - Jump to end of previous word
- `E` - Jump to end of a WORD 
- `gE` - Jump to end of previous WORD


**Move to Specific Character:**
- `f{character}` - Find the next occurrence of character on the line
- `F{character}` - Find previous occurrence of character on the line
- `t{character}` - Move cursor until next occurrence of character on the line
- `T{character}` - Move cursor until previous occurrence of character on the line

```
type t(   ==> v                       v
              const fireball = function(target){
type f(   ==> ^                        ^
```

- `f{character};` - `;` brings you to the next occurrence of the character
- `f{character},` - `,` brings you to the previous occurrence of the character