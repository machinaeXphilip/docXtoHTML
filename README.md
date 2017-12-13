# docXtoHTML
super simple node based wrapper for python-mammoth to simply recursively convert .docx to HTML files

walks downward from place of execution through the filetree and converts every .docx file to HTML yet names it still .docX (if you want it to also rename it, change [line44](https://github.com/machinaeXphilip/docXtoHTML/blob/5e35eec6b60718e5ecb51754a899d88acc1b3f6a/docxTOHTMLrecursive2.js#L44) )

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
