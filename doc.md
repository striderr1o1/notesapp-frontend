# My Ideas/Thoughts Container

### 4th Feb, 2026:
Tried fixing the editor rendering. Passed the NodeID to editor component and set it as a dependency in its useEffect so whenever the p element is clicked, the editor takes the noteid and displays the text. Also need to look into the useEffect and fetch in the notesarea component.

Also need to fix render notebooks issue in the sidebar. 

### 5th Feb, 2026:

Debugging the Editor.jsx useEffect:
- Editor renders, thus runs useEffect
- using useEffect with two dependencies, first the noteid changes so editor rerenders with that note id. Second, the fetchedState. FetchedState is false by default
- the if fetchState false block runs, calls fetchNoteData function. Logs the fetchedState as false, i dont know why, doesnt even run the callback that im trying to run to change the fetchedState.
- on first logging of the contents, the contents array is empty
- rerenders the quill object again and again i dont know why
