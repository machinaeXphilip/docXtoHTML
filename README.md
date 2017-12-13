# docXtoHTML
node based wrapper for python-mammoth to simply recursively convert .docx to HTML files

walks downward from place of execution through the filetree and converts every .docx file to HTML yet names it still .docX (if you want it to also rename it, change line xxx)

### dependencies ###
- node installed
- python installed
- python-mammoth (https://github.com/mwilliamson/python-mammoth) installed
    - $`pip install mammoth`

### usage ###
- $`cd <start directory>`
- check if any filenames with spaces are present in filetree to be converted. 
    - If yes: use https://github.com/machinaeXphilip/NoSpace first
- $`node docXtoHTMLrecursive2.js`
- enjoy the walk!
